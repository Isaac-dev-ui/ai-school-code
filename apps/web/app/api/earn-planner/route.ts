import { NextResponse } from "next/server";
import { z } from "zod";

const Req = z.object({
  skill: z.string(),
  niche: z.string(),
  time: z.string(),
  goal: z.string()
});

const nicheMap: Record<string, string> = {
  restaurants: "restaurants and food service",
  realestate: "real estate",
  healthcare: "healthcare and fitness",
  education: "education and tutoring",
  ecommerce: "e-commerce",
  finance: "finance and consulting",
  creative: "creative professionals (artists, musicians, designers)"
};

const skillMap: Record<string, string> = {
  html: "HTML/CSS for static websites",
  javascript: "JavaScript for interactive web features",
  python: "Python for automation and data",
  react: "React for dynamic web apps",
  nodejs: "Node.js for backend services",
  mobile: "Mobile app development (Swift/Kotlin)"
};

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = Req.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 });
  }

  const { skill, niche, time, goal } = parsed.data;

  // Check if OpenAI key is available
  const key = process.env.OPENAI_API_KEY?.trim();
  
  if (!key) {
    // Return a static plan without AI
    const staticPlan = generateStaticPlan(skill, niche, time, goal);
    return NextResponse.json({ ok: true, plan: staticPlan });
  }

  try {
    // Use OpenAI to generate a personalized plan
    const systemPrompt = `You are an expert career advisor specializing in helping developers monetize their coding skills. 
Generate a personalized earning plan based on the user's skill, target niche, available time, and goal.

Respond in JSON format with exactly this structure:
{
  "ideas": ["3 project ideas as strings"],
  "roadmap": "detailed multi-week roadmap as a string",
  "proposal": "template proposal text as a string",
  "checklist": ["5-7 delivery checklist items as strings"]
}

Be specific, practical, and actionable. Focus on realistic projects that can actually be sold.`;

    const userPrompt = `
Skill: ${skillMap[skill] || skill}
Target Niche: ${nicheMap[niche] || niche}
Time Available: ${time}
Goal: ${goal}
`.trim();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      // Fall back to static plan
      const staticPlan = generateStaticPlan(skill, niche, time, goal);
      return NextResponse.json({ ok: true, plan: staticPlan });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      const staticPlan = generateStaticPlan(skill, niche, time, goal);
      return NextResponse.json({ ok: true, plan: staticPlan });
    }

    // Parse JSON from response
    try {
      const plan = JSON.parse(content);
      return NextResponse.json({ ok: true, plan });
    } catch {
      // If JSON parsing fails, return static plan
      const staticPlan = generateStaticPlan(skill, niche, time, goal);
      return NextResponse.json({ ok: true, plan: staticPlan });
    }

  } catch (error) {
    // On any error, return static plan
    const staticPlan = generateStaticPlan(skill, niche, time, goal);
    return NextResponse.json({ ok: true, plan: staticPlan });
  }
}

function generateStaticPlan(skill: string, niche: string, time: string, goal: string) {
  const nicheName = nicheMap[niche] || niche;
  const skillName = skillMap[skill] || skill;

  const ideas = [
    `Build a ${nicheName} landing page template that local businesses can customize and use`,
    `Create a simple ${skillName} tool that solves a specific problem for ${nicheName} professionals`,
    `Develop a mini web app for ${nicheName} that automates a common task`
  ];

  const roadmap = `
Week 1-2: Research & Planning
- Research ${nicheName} businesses and their needs
- Study competitors in this space
- Define your minimum viable product (MVP)

Week 3-4: Development
- Build the core functionality
- Create a clean, professional design
- Add essential features only

Week 5: Testing & Feedback
- Test with real users if possible
- Gather feedback and iterate
- Fix bugs and polish

Week 6: Launch & Marketing
- Deploy your project
- Create a simple landing page
- Share on relevant communities
`.trim();

  const proposal = `Hi [Client Name],

I've analyzed your needs for [Project Type] and I'd love to help you [Deliverable].

Here's my proposal:

SCOPE:
- [Feature 1]
- [Feature 2]  
- [Feature 3]

TIMELINE:
- Week 1: Initial development
- Week 2: Testing & revisions
- Week 3: Final delivery

INVESTMENT:
$[Price] total, payable in installments

INCLUDES:
- 30-day support after delivery
- Source code ownership
- Documentation

Would you like to move forward?

Best,
[Your Name]`.trim();

  const checklist = [
    "Understand client requirements fully before starting",
    "Set up clear milestones and deadlines",
    "Create a detailed project specification",
    "Build MVP first, then add features",
    "Test on multiple devices/browsers",
    "Get client feedback at each milestone",
    "Provide clean, documented code",
    "Offer post-launch support period"
  ];

  return { ideas, roadmap, proposal, checklist };
}
