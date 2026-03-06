import { NextResponse } from "next/server";
import { z } from "zod";

const Req = z.object({
  question: z.string().min(1),
  context: z.string().optional().default(""),
  mode: z.enum(["answer", "notes", "exam"]).default("answer")
});

// Generate topic summary based on context
function generateTopicSummary(topic: string): string {
  const summaries: Record<string, string> = {
    'python': `Python Programming Summary:

📚 BASICS:
• Variables: Containers for storing data values
• Data Types: int, float, string, bool, list, dict
• Comments: # single-line, """ multi-line """

🔄 CONTROL FLOW:
• If/Elif/Else: Conditional statements
• For Loops: Iterate over sequences
• While Loops: Repeat while condition is true

📦 FUNCTIONS:
• def keyword to define functions
• Parameters and return values
• Lambda functions for quick operations

📋 DATA STRUCTURES:
• Lists: Ordered, mutable collections
• Dictionaries: Key-value pairs
• Tuples: Ordered, immutable collections

🎯 BEST PRACTICES:
• Use meaningful variable names
• Keep functions small and focused
• Write docstrings for documentation`,
    
    'javascript': `JavaScript Programming Summary:

📚 BASICS:
• Variables: let, const, var
• Data Types: string, number, boolean, object, array
• Comments: // single-line, /* multi-line */

🔄 CONTROL FLOW:
• If/Else: Conditional statements
• For Loops: for, for...of, for...in
• While Loops: while, do...while
• Switch: Multiple condition checks

📦 FUNCTIONS:
• function keyword or arrow functions
• Parameters and return values
• Default parameters
• Rest parameters

📋 DATA STRUCTURES:
• Arrays: Ordered collections with push, pop, map, filter
• Objects: Key-value pairs
• Sets and Maps

🎯 BEST PRACTICES:
• Use const by default, let when needed
• Avoid var
• Use arrow functions for callbacks`,
    
    'html': `HTML Programming Summary:

📚 BASICS:
• HTML: HyperText Markup Language
• Elements: <tag>content</tag>
• Attributes: <tag attribute="value">

📝 COMMON TAGS:
• Headings: <h1> to <h6>
• Text: <p>, <span>, <div>
• Links: <a href="url">
• Images: <img src="url" alt="">
• Lists: <ul>, <ol>, <li>
• Forms: <form>, <input>, <button>

🎯 BEST PRACTICES:
• Use semantic HTML tags
• Always add alt attributes to images
• Use proper nesting
• Validate your HTML`,
    
    'css': `CSS Programming Summary:

📚 BASICS:
• Selectors: element, .class, #id, *
• Properties: color, background, margin, padding
• Values: units (px, em, rem, %)

🎨 STYLING:
• Colors: names, hex, rgb(), hsl()
• Typography: font-family, font-size, text-align
• Box Model: margin, border, padding, content

📐 LAYOUT:
• Flexbox: display: flex
• Grid: display: grid
• Position: static, relative, absolute, fixed

🎯 BEST PRACTICES:
• Use external stylesheets
• Use CSS variables
• Mobile-first approach
• Keep selectors simple`
  };
  
  return summaries[topic.toLowerCase()] || `Summary for ${topic}:\n\nThis topic covers key concepts and best practices. Ask specific questions to learn more!`;
}

// Generate exam questions
function generateExamQuestions(topic: string, count: number = 5): string {
  const questions: Record<string, { q: string; options: string[]; answer: string }[]> = {
    python: [
      { q: "What is the correct way to create a variable in Python?", options: ["var x = 5", "x = 5", "let x = 5", "int x = 5"], answer: "x = 5" },
      { q: "Which method adds an element to the end of a list?", options: ["add()", "append()", "insert()", "push()"], answer: "append()" },
      { q: "How do you define a function in Python?", options: ["function myFunc()", "def myFunc():", "func myFunc()", "void myFunc()"], answer: "def myFunc():" },
      { q: "What is the output of print(type(3.14))?", options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"], answer: "<class 'float'>" },
      { q: "Which operator is used for floor division?", options: ["/", "//", "%", "**"], answer: "//" }
    ],
    javascript: [
      { q: "Which keyword declares a constant variable?", options: ["var", "let", "const", "define"], answer: "const" },
      { q: "What method adds an element to the end of an array?", options: ["add()", "push()", "append()", "insert()"], answer: "push()" },
      { q: "How do you write a single-line comment?", options: ["<!-- comment -->", "// comment", "# comment", "** comment **"], answer: "// comment" },
      { q: "What is the result of typeof []?", options: ["array", "object", "list", "undefined"], answer: "object" },
      { q: "Which method converts JSON string to object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], answer: "JSON.parse()" }
    ],
    html: [
      { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"], answer: "Hyper Text Markup Language" },
      { q: "Which tag defines the largest heading?", options: ["<heading>", "<h6>", "<h1>", "<head>"], answer: "<h1>" },
      { q: "What is the correct tag for a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: "<a>" },
      { q: "Which attribute specifies the image source?", options: ["src", "href", "link", "source"], answer: "src" },
      { q: "What is the root element of an HTML document?", options: ["<body>", "<html>", "<head>", "<root>"], answer: "<html>" }
    ],
    css: [
      { q: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
      { q: "Which property changes the text color?", options: ["text-color", "font-color", "color", "foreground"], answer: "color" },
      { q: "How do you select an element with id 'demo'?", options: [".demo", "#demo", "demo", "*demo"], answer: "#demo" },
      { q: "Which property controls the space inside an element?", options: ["margin", "padding", "spacing", "border"], answer: "padding" },
      { q: "What display property creates a flex container?", options: ["display: block", "display: inline", "display: flex", "display: grid"], answer: "display: flex" }
    ]
  };
  
  const topicQuestions = questions[topic.toLowerCase()] || questions['python'];
  let output = `📝 Exam Questions: ${topic.toUpperCase()}\n\n`;
  
  for (let i = 0; i < Math.min(count, topicQuestions.length); i++) {
    const q = topicQuestions[i];
    output += `Question ${i + 1}: ${q.q}\n`;
    q.options.forEach((opt, idx) => {
      output += `  ${String.fromCharCode(97 + idx)}) ${opt}\n`;
    });
    output += `  ✓ Answer: ${q.answer}\n\n`;
  }
  
  return output;
}

// Answer general questions
function answerQuestion(question: string, context: string): string {
  const q = question.toLowerCase();
  
  // Math questions
  if (q.match(/calculate|compute|what is \d+|sum|multiply|divide|add|subtract/)) {
    return `🧮 Calculation Help\n\nFor calculations, I can help! Try these approaches:\n\n• Use the Python editor for math: print(2 + 2)\n• Use JavaScript: console.log(2 + 2)\n• Ask me to explain a math concept\n\nWhat calculation do you need help with?`;
  }
  
  // Learning questions
  if (q.includes("learn") || q.includes("start") || q.includes("beginner")) {
    return `📚 Getting Started\n\nGreat question! Here's how to begin:\n\n1. Start with HTML basics\n2. Move to CSS for styling\n3. Learn JavaScript for interactivity\n4. Practice with Python for logic\n\nUse the courses page to begin your journey!\n\nNeed help with a specific topic?`;
  }
  
  // Career questions
  if (q.includes("job") || q.includes("career") || q.includes("career") || q.includes("money") || q.includes("earn")) {
    return `💼 Career & Earnings\n\nCoding can lead to great careers:\n\n• Web Developer\n• Software Engineer\n• Data Analyst\n• Mobile Developer\n• AI/ML Engineer\n\nCheck out the /earn page for learning strategies!\n\nWhat field interests you most?`;
  }
  
  // Default helpful response
  return `🤖 AI Assistant\n\nI can help you with:\n\n• 📖 Explaining programming concepts\n• 💻 Writing and debugging code\n• 📝 Creating quizzes and exercises\n• 📚 Generating topic summaries\n• 🎯 Answering exam questions\n\nTry asking me about:\n- Specific topics (variables, loops, functions)\n- Code examples in Python, JavaScript, HTML, CSS\n- Topic summaries and notes\n- Exam practice questions\n\nWhat would you like to learn about?`;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = Req.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 });
  }

  const { question, context, mode } = parsed.data;
  let response = "";

  // Try to use OpenAI if available
  const key = process.env.OPENAI_API_KEY?.trim();
  
  if (key && mode === "answer") {
    try {
      const messages = [
        {
          role: "system",
          content: "You are a helpful AI assistant for a coding education platform. Be concise, friendly, and educational. Provide code examples when relevant."
        },
        {
          role: "user",
          content: `Context: ${context}\nQuestion: ${question}`
        }
      ];

      const r = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model: "gpt-4o-mini", messages, temperature: 0.7 })
      });

      if (r.ok) {
        const data = await r.json();
        response = data.choices?.[0]?.message?.content ?? "";
        return NextResponse.json({ ok: true, text: response });
      }
    } catch (e) {
      console.error("OpenAI error:", e);
    }
  }

  // Fallback to rule-based responses
  switch (mode) {
    case "notes":
      response = generateTopicSummary(context || question);
      break;
    case "exam":
      response = generateExamQuestions(context || "python", 5);
      break;
    default:
      response = answerQuestion(question, context);
  }

  return NextResponse.json({ ok: true, text: response });
}
