import { NextResponse } from "next/server";
import { z } from "zod";

const Req = z.object({
  message: z.string().min(1).max(3000),
  history: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string()
  })).optional().default([])
});

// Omni-Engineer Isaac AI System Prompt
const SYSTEM_PROMPT = `You are OMNI-ENGINEER ISAAC AI - a Principal Software Engineer, Systems Architect, Startup CTO, DevOps Lead, Security Engineer, and Technical Educator with 15+ years of experience.

You help build real systems, scalable products, SaaS platforms, AI systems, DevOps pipelines, and portfolio-grade projects.

You support ALL major technologies:
- Frontend: JavaScript, TypeScript, React, Next.js, Vue, Angular, Tailwind, CSS, HTML
- Backend: Node.js, Express, Python (Flask, FastAPI, Django), Java, C#, Go, Rust, PHP, Ruby
- Databases: PostgreSQL, MySQL, SQLite, MongoDB, Redis
- DevOps: Docker, Docker Compose, CI/CD, Render, Railway, Fly.io, AWS, GCP, Azure
- AI: OpenAI APIs, RAG architecture, Embeddings, Vector databases

RESPONSE STRUCTURE:
1) What I Understand
2) Architecture / Strategy  
3) Folder Structure (if building something)
4) Full Code (complete & runnable)
5) How To Run
6) Deployment Instructions
7) Performance Notes
8) Security Notes
9) Improvements / Scaling

You are NOT a chatbot. You are a Principal Engineer and CTO-level technical architect.

When user asks questions:
- Ask up to 3 precise clarification questions if needed
- Provide production-ready code
- Include validation and error handling
- Use process.env.PORT for servers
- Suggest modular, scalable architecture

For portfolio projects:
- Use modern stack
- Keep structure clean
- Add README
- Add deployment guide
- Make it recruiter-impressive

SECURITY: Never generate malware, credential theft, phishing tools. Always validate inputs and prevent injection attacks.

MULTI-LANGUAGE: If language not specified, ask user which language they prefer. If they say "any", provide TypeScript + Python solutions.

DEBUG MODE: If user provides errors, identify root cause, explain why, provide exact fix with corrected code.

Now respond as OMNI-ENGINEER AI.`;

// Enhanced Smart offline responses for Isaac AI
function getOfflineResponse(message: string): string {
  const msg = message.toLowerCase();
  
  // Math questions
  if (msg.includes("calculate") || msg.match(/\d+ [+\-*/] \d+/)) {
    try {
      const result = Function('"use strict"; return (' + message.replace(/[^0-9+\-*/.() ]/g, '') + ')')();
      return `🧮 **Math Result**\n\nThe answer is: **${result}**\n\nNeed help with more complex calculations or programming math? Just ask!`;
    } catch {
      return "I'd be happy to help with calculations! For programming-related math or coding questions, let me know what you're working on.";
    }
  }
  
  // Time/date questions
  if (msg.includes("time") || msg.includes("date") || msg.includes("today")) {
    const now = new Date();
    return `🕐 **Current Date & Time**\n\n**Date:** ${now.toLocaleDateString()}\n**Time:** ${now.toLocaleTimeString()}\n**Day:** ${now.toLocaleDateString('en-US', { weekday: 'long' })}\n\nNeed help with date programming in any language?`;
  }
  
  // Who am I / profile
  if (msg.includes("who am i") || msg.includes("my name") || msg.includes("know me")) {
    return `👤 **About You**\n\nI don't have access to your personal information - I'm an AI assistant, not a connected app.\n\nHowever, I can help you build apps that DO track user profiles!\n\nWant to build a user management system? I can show you how!`;
  }
  
  // Jokes
  if (msg.includes("joke") || msg.includes("funny") || msg.includes("laugh")) {
    return `😂 **Here's a programmer joke for you:**\n\nWhy do programmers prefer dark mode?\nBecause light attracts bugs!\n\n😂 Another one:\n\nA SQL query walks into a bar, walks up to two tables and asks...\n"Can I join you?"\n\nWant more? Ask me anything serious too!`;
  }
  
  // Weather
  if (msg.includes("weather") || msg.includes("temperature") || msg.includes("rain")) {
    return `🌤️ **Weather**\n\nI don't have access to live weather data, but I can help you build a weather app!\n\n**To build a weather app you'd need:**\n1. Weather API (OpenWeatherMap, WeatherAPI)\n2. Frontend (React, Next.js)\n3. API integration skills\n\nWant me to show you how to build a weather app?`;
  }
  
  // News
  if (msg.includes("news") || msg.includes("latest") || msg.includes("happening")) {
    return `📰 **Tech Topics**\n\nI don't have live internet access, but here are hot topics in tech:\n\n- AI/LLM advancements\n- Web3 & crypto developments\n- New JavaScript frameworks\n- Cloud computing trends\n\nWant me to help you build a news aggregator? I can show you how!`;
  }
  
  // Music
  if (msg.includes("music") || msg.includes("song") || msg.includes("spotify")) {
    return `🎵 **Music**\n\nI can't play music, but I CAN help you build a music streaming app!\n\n**To build a music app:**\n- Audio playback (HTML5 Audio API)\n- Playlist management\n- User profiles\n- Search functionality\n\nWant me to architect a Spotify clone? Just ask!`;
  }
  
  // Games
  if (msg.includes("game") || msg.includes("play") || msg.includes("chess")) {
    return `🎮 **Game Development**\n\nI can help you build games!\n\n**Beginner Games:**\n- Rock Paper Scissors\n- Tic-Tac-Toe\n- Snake\n- Pong\n\n**Tools:**\n- JavaScript/Canvas\n- Python (Pygame)\n- Unity (C#)\n- Godot (GDScript)\n\nWhat game do you want to build?`;
  }
  
  // Food/cooking
  if (msg.includes("food") || msg.includes("cook") || msg.includes("recipe")) {
    return `🍳 **Cooking**\n\nI'm a coding assistant, not a chef! But I CAN help you build:\n\n- Recipe apps\n- Food delivery platforms\n- Restaurant management systems\n- Meal planning apps\n\nWant me to show you how to build a recipe app?`;
  }
  
  // Sports
  if (msg.includes("sport") || msg.includes("football") || msg.includes("basketball")) {
    return `⚽ **Sports**\n\nI'm a coding assistant, not a sports expert! But I can help you build:\n\n- Sports betting apps\n- Fantasy league platforms\n- Live score dashboards\n- Sports news aggregators\n\nWant to build a sports app? I can help!`;
  }
  
  // Travel
  if (msg.includes("travel") || msg.includes("flight") || msg.includes("hotel")) {
    return `✈️ **Travel Apps**\n\nI can help you build travel applications!\n\n**Project ideas:**\n- Flight booking system\n- Hotel reservation app\n- Trip planner\n- Travel blog\n\n**Tech stack:**\n- Next.js + Stripe (payments)\n- PostgreSQL (bookings)\n- Maps API\n\nWant to build a travel platform?`;
  }
  
  // Health/fitness
  if (msg.includes("health") || msg.includes("fitness") || msg.includes("workout")) {
    return `💪 **Fitness Apps**\n\nI can help you build fitness applications!\n\n**Features:**\n- Workout tracking\n- Calorie counter\n- Exercise timers\n- Progress charts\n\n**Tech:**\n- React Native (mobile)\n- Chart.js (graphs)\n- LocalStorage or database\n\nWant to build a fitness app?`;
  }
  
  // Finance/money
  if (msg.includes("money") || msg.includes("stock") || msg.includes("crypto") || msg.includes("invest")) {
    return `💰 **Finance Apps**\n\nI can help you build financial applications!\n\n**Project ideas:**\n- Expense tracker\n- Stock price dashboard\n- Crypto portfolio tracker\n- Budget planner\n\n**Note:** For real trading, you'd need APIs like Alpha Vantage or CoinGecko\n\nWant to build a finance app?`;
  }
  
  // Shopping/ecommerce
  if (msg.includes("shop") || msg.includes("buy") || msg.includes("sell") || msg.includes("product")) {
    return `🛒 **E-commerce Apps**\n\nI can help you build online stores!\n\n**Features:**\n- Product catalog\n- Shopping cart\n- Payment integration (Stripe)\n- Order management\n\n**Tech stack:**\n- Next.js + Stripe\n- PostgreSQL\n\nWant to build an online store?`;
  }
  
  // Social media
  if (msg.includes("social") || msg.includes("facebook") || msg.includes("twitter") || msg.includes("instagram")) {
    return `📱 **Social Media Apps**\n\nI can help you build social platforms!\n\n**Features to build:**\n- User profiles\n- Posts/tweets\n- Comments & likes\n- Real-time chat\n\n**Complex features:**\n- Feed algorithm\n- Notifications\n- Media storage\n\nWant to build a social app?`;
  }
  
  // Thank you
  if (msg.includes("thank") || msg.includes("thanks") || msg.includes("appreciate")) {
    return `😊 **You're Welcome!**\n\nHappy to help! 🤖\n\nFeel free to ask me anything else:\n- Build projects\n- Debug errors\n- Learn coding\n- Career advice\n\nWhat would you like to do next?`;
  }
  
  // Goodbye
  if (msg.includes("bye") || msg.includes("goodbye") || msg.includes("see you") || msg.includes("later")) {
    return `👋 **Goodbye!**\n\nIt was great chatting with you!\n\nRemember:\n- Keep coding! 🧑‍💻\n- Build projects! 🚀\n- Stay curious! 🎯\n\nCome back anytime you need help!`;
  }
  
  // Yes/No questions
  if (msg.includes("can you") || msg.includes("could you") || msg.includes("will you") || msg.includes("should i")) {
    return `✅ **Yes, I Can Help With:**\n\n🛠️ **Build** - Any web/app project\n💻 **Code** - Any programming language\n🐛 **Debug** - Fix errors & bugs\n📚 **Teach** - Explain any concept\n🚀 **Deploy** - Cloud & DevOps\n💼 **Career** - Interview prep & jobs\n\n❓ **Just Ask!** - What do you need?`;
  }
  
  // What/How questions
  if (msg.startsWith("what") || msg.startsWith("how") || msg.startsWith("why") || msg.startsWith("when") || msg.startsWith("where")) {
    return `💡 **Great Question!**\n\nI can help you with that! To give you the best answer, tell me:\n\n1. **What's your goal?**\n2. **What language/tech?**\n3. **What's your level?**\n\nOr tell me more and I'll provide a comprehensive answer!\n\nExample: "How do I build a React app?"`;
  }
  
  // Comparisons
  if (msg.includes("vs") || msg.includes("versus") || msg.includes("compare") || msg.includes("difference")) {
    return `⚖️ **Tech Comparisons**\n\nI can compare any technologies! Common ones:\n\n- **React vs Vue** - Both great, React has more jobs\n- **Python vs JavaScript** - Different use cases\n- **SQL vs NoSQL** - Structured vs flexible data\n- **Docker vs Kubernetes** - Container vs orchestration\n- **Next.js vs Nuxt** - React vs Vue SSR\n\nWhich specific comparison would you like?`;
  }
  
  // Programming specific
  if (msg.includes("program") || msg.includes("coding") || msg.includes("developer") || msg.includes("software")) {
    return `💻 **Software Development**\n\nI can help you with ALL aspects of software development!\n\n**What I can do:**\n- Write code in any language\n- Design system architecture\n- Debug issues\n- Explain concepts\n- Review code\n- Plan projects\n\n**What's your specific need?**`;
  }
  
  // Hello/Greetings - expanded
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("who are you")) {
    return `👋 Hello! I'm **OMNI-ENGINEER ISAAC AI**.\n\nI'm your personal Principal Engineer and Technical Architect. I can help you with:\n\n🛠️ **Building Projects**\n- Full-stack applications\n- SaaS platforms\n- AI systems\n- DevOps pipelines\n\n💻 **Coding**\n- Any programming language\n- Debugging errors\n- Code reviews\n- Best practices\n\n🏗️ **Architecture**\n- System design\n- Scalability planning\n- Database design\n- API design\n\n🚀 **Deployment**\n- Docker & containers\n- Cloud platforms\n- CI/CD pipelines\n\n📚 **Learning**\n- Explain concepts\n- Code examples\n- Career guidance\n- Interview prep\n\nWhat would you like to build or learn about today?`;
  }
  
  // Build/Create
  if (msg.includes("build") || msg.includes("create") || msg.includes("make") || msg.includes("start") || msg.includes("develop")) {
    return `🚀 **Let's Build Something!**\n\nTo help you effectively, I need to know:\n\n1. **What do you want to build?**\n   - Web app? Mobile app? AI system? API?\n\n2. **What's your tech stack preference?**\n   - Any language? TypeScript? Python?\n\n3. **What's your goal?**\n   - Portfolio? Production app? Learning?\n\n4. **Any timeline?**\n   - MVP? Full product?\n\nTell me what you have in mind and I'll architect and build it for you!`;
  }
  
  // Debug help
  if (msg.includes("error") || msg.includes("bug") || msg.includes("fix") || msg.includes("doesn't work") || msg.includes("failed") || msg.includes("issue") || msg.includes("problem")) {
    return `🐛 **Debug Mode Activated**\n\nI'd be happy to help debug! Please share:\n\n1. **The error message** (exact text)\n2. **The code** that's causing the error\n3. **What you expected** to happen\n4. **What you've tried** so far\n\nAlso let me know:\n- What language/framework?\n- What have you Google'd already?\n\nPaste the error and code, and I'll identify the root cause and provide the fix!`;
  }
  
  // Code help
  if (msg.includes("code") || msg.includes("program") || msg.includes("how to") || msg.includes("write")) {
    return `💻 **Coding Help**\n\nI can help you write code in any language. To give you the best answer:\n\n1. **Which language?** (JavaScript, Python, TypeScript, Go, Rust, etc.)\n\n2. **What's the use case?**\n   - Web API?\n   - Frontend component?\n   - Script/automation?\n   - Data processing?\n\n3. **Any specific requirements?**\n   - Framework preference?\n   - Database?\n   - Authentication?\n\nOr just tell me what you want to build and I'll write the complete code!`;
  }
  
  // Learning
  if (msg.includes("learn") || msg.includes("tutorial") || msg.includes("teach") || msg.includes("explain") || msg.includes("study")) {
    return `📚 **Learning Path**\n\nHere's my recommended learning roadmap:\n\n**Beginner (1-3 months)**\n- HTML/CSS/JavaScript\n- Git basics\n- Command line\n\n**Intermediate (3-6 months)**\n- React or Vue\n- Node.js or Python\n- PostgreSQL or MongoDB\n\n**Advanced (6-12 months)**\n- TypeScript\n- Docker\n- Cloud platforms\n- System design\n\n**For specific careers:**\n- 🌐 **Web Dev**: JavaScript → React → Node.js\n- 🤖 **AI/ML**: Python → FastAPI → TensorFlow\n- 📱 **Mobile**: React Native or Swift/Kotlin\n- 🔧 **DevOps**: Linux → Docker → Kubernetes\n\nWhat would you like to learn? I'll create a personalized path!`;
  }
  
  // Career
  if (msg.includes("career") || msg.includes("job") || msg.includes("salary") || msg.includes("interview") || msg.includes("hire") || msg.includes("resume")) {
    return `💼 **Career Guidance**\n\nLet me help you plan your tech career!\n\n**Hot Tech in 2024:**\n- AI/ML Engineering (highest demand)\n- Full-Stack Development\n- Cloud/DevOps\n- Cybersecurity\n\n**How to land a job:**\n1. Build 3-4 portfolio projects\n2. Contribute to open source\n3. Network on LinkedIn\n4. Practice coding interviews\n5. Apply to 50+ jobs\n\n**Salary ranges (US):**\n- Junior: $60-90K\n- Mid: $90-140K\n- Senior: $140-200K\n- Staff/Principal: $200K+\n\nWhat's your current level? I'll tailor advice!`;
  }
  
  // AI/ML
  if (msg.includes("ai") || msg.includes("machine learning") || msg.includes("ml") || msg.includes("chatgpt") || msg.includes("gpt") || msg.includes("neural")) {
    return `🤖 **AI Systems**\n\nI can help you build AI applications!\n\n**Popular AI Projects:**\n- Chatbots (like me!)\n- Code assistants\n- Image generators\n- Recommendation systems\n- Data analysis\n\n**Tech Stack:**\n- Python (PyTorch, TensorFlow)\n- OpenAI API\n- LangChain for RAG\n- Vector databases\n\n**Quick Start in Python:**\nimport openai\n\nresponse = openai.ChatCompletion.create(\n    model="gpt-4",\n    messages=[{"role": "user", "content": "Hello!"}]\n)\nprint(response.choices[0].message.content)\n\nWant to build an AI app? Tell me what type!`;
  }
  
  // DevOps
  if (msg.includes("docker") || msg.includes("deploy") || msg.includes("devops") || msg.includes("cloud") || msg.includes("railway") || msg.includes("render") || msg.includes("vercel") || msg.includes("aws")) {
    return `☁️ **DevOps & Deployment**\n\nPopular deployment platforms:\n- **Render** - Easy, good free tier\n- **Railway** - Modern, Python-friendly\n- **Fly.io** - Global, fast\n- **Vercel** - Frontend/Next.js\n- **AWS** - Enterprise\n\n**Docker Example:**\nFROM node:20\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nRUN npm run build\nEXPOSE 3000\nCMD ["npm", "start"]\n\n**Key tips:**\n- Use .dockerignore\n- Multi-stage builds\n- Never commit secrets\n- Use environment variables\n\nWhere do you want to deploy?`;
  }
  
  // Database
  if (msg.includes("database") || msg.includes("sql") || msg.includes("postgresql") || msg.includes("mongodb") || msg.includes("redis") || msg.includes("mysql")) {
    return `🗄️ **Database Design**\n\n**When to use what:**\n\n| Use Case | Database |\n|----------|----------|\n| Relational data | PostgreSQL |\n| Flexible schema | MongoDB |\n| Caching | Redis |\n| Analytics | ClickHouse |\n| Search | Elasticsearch |\n\n**PostgreSQL Example:**\nCREATE TABLE users (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    email VARCHAR(255) UNIQUE,\n    created_at TIMESTAMP DEFAULT NOW()\n);\n\n**Best Practices:**\n- Always use indexes on foreign keys\n- Never store plain text passwords\n- Use migrations for schema changes\n- Back up regularly\n\nWhat database do you need?`;
  }
  
  // Web development
  if (msg.includes("web") || msg.includes("website") || msg.includes("frontend") || msg.includes("backend") || msg.includes("fullstack")) {
    return `🌐 **Web Development**\n\nI can help you build web applications!\n\n**Frontend:**\n- React, Vue, Angular\n- Next.js, Nuxt\n- Tailwind CSS\n- TypeScript\n\n**Backend:**\n- Node.js, Express\n- Python (Django, FastAPI)\n- Go, Rust\n- PHP, Ruby\n\n**What do you want to build?**`;
  }
  
  // Mobile
  if (msg.includes("mobile") || msg.includes("app") || msg.includes("ios") || msg.includes("android") || msg.includes("react native")) {
    return `📱 **Mobile Development**\n\nI can help you build mobile apps!\n\n**Options:**\n- **React Native** - JavaScript, cross-platform\n- **Flutter** - Dart, cross-platform\n- **Swift** - iOS only\n- **Kotlin** - Android only\n\n**Quick Start (React Native):**\nnpx create-expo-app my-app\ncd my-app\nnpm start\n\nWhat platform do you want?`;
  }
  
  // Python
  if (msg.includes("python") || msg.includes("django") || msg.includes("flask") || msg.includes("fastapi")) {
    return `🐍 **Python Development**\n\nI can help you with Python!\n\n**Web Frameworks:**\n- **Django** - Full-featured, batteries included\n- **FastAPI** - Modern, async, great for APIs\n- **Flask** - Lightweight, flexible\n\n**Data/AI:**\n- NumPy, Pandas\n- PyTorch, TensorFlow\n- Scikit-learn\n\n**What do you want to build?**`;
  }
  
  // JavaScript/TypeScript
  if (msg.includes("javascript") || msg.includes("typescript") || msg.includes("node") || msg.includes("react") || msg.includes("nextjs")) {
    return `🟨 **JavaScript/TypeScript**\n\nI can help you with JS/TS!\n\n**Frontend:**\n- React, Vue, Angular\n- Next.js (SSR/SSG)\n- Svelte\n\n**Backend:**\n- Node.js, Express\n- NestJS\n- Fastify\n\n**Tools:**\n- TypeScript\n- Vite\n- Tailwind\n\nWhat do you want to build?`;
  }
  
  // Default - ask for more details
  return `🤔 **I'm Here to Help!**\n\nI can assist you with:\n\n🛠️ **Building** - Any web, mobile, or desktop app\n💻 **Coding** - Any programming language\n🐛 **Debugging** - Fix errors and issues\n📚 **Learning** - Explain any tech concept\n💼 **Career** - Job advice and interview prep\n🚀 **Deploying** - Cloud and DevOps\n\n**Just tell me what you need!**\n\nExamples:\n- "Help me build a todo app"\n- "Fix my JavaScript error"\n- "Explain how React works"\n- "How do I get a job in tech?"`;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = Req.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 });
  }

  const { message, history } = parsed.data;
  
  // Check for API key
  const key = process.env.OPENAI_API_KEY?.trim();
  
  if (key) {
    // Use OpenAI with Omni-Engineer prompt
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.slice(-10),
      { role: "user", content: message }
    ];

    try {
      const r = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: { 
          Authorization: `Bearer ${key}`, 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ 
          model: "gpt-4o-mini", 
          messages, 
          temperature: 0.3,
          max_tokens: 1500
        })
      });

      if (!r.ok) {
        const text = getOfflineResponse(message);
        return NextResponse.json({ ok: true, text });
      }

      const data = await r.json();
      const text = data.choices?.[0]?.message?.content ?? "";
      return NextResponse.json({ ok: true, text });
    } catch {
      const text = getOfflineResponse(message);
      return NextResponse.json({ ok: true, text });
    }
  }

  // Offline mode
  const text = getOfflineResponse(message);
  return NextResponse.json({ ok: true, text });
}
