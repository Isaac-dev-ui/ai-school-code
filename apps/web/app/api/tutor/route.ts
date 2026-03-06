import { NextResponse } from "next/server";
import { z } from "zod";

const Req = z.object({
  kind: z.string(),
  lessonTitle: z.string(),
  lessonSummary: z.string(),
  language: z.string(),
  code: z.string(),
  error: z.string().optional().default(""),
  question: z.string().optional().default("")
});

// Offline tutor responses based on rules
function getOfflineResponse(data: {
  kind: string;
  lessonTitle: string;
  language: string;
  code: string;
  error: string;
  question: string;
}): string {
  const { kind, lessonTitle, language, code, error, question } = data;
  
  // Custom question
  if (kind === "custom" && question) {
    return getCustomQuestionResponse(question, language);
  }
  
  // Explain request
  if (kind === "explain") {
    return getExplainResponse(lessonTitle, language, code);
  }
  
  // Fix request - analyze error
  if (kind === "fix") {
    return getFixResponse(language, code, error);
  }
  
  // Quiz request
  if (kind === "quiz") {
    return getQuizResponse(lessonTitle, language);
  }
  
  // Exercise request
  if (kind === "exercise") {
    return getExerciseResponse(lessonTitle, language);
  }
  
  return "I'm in offline mode. Add OPENAI_API_KEY to enable the full AI tutor.";
}

function getCustomQuestionResponse(question: string, language: string): string {
  const q = question.toLowerCase();
  
  // Common programming questions
  if (q.includes("variable")) {
    return `Variables in ${language}:\n\n` +
      `In ${language === 'python' ? 'Python' : language}, variables store data:\n` +
      (language === 'python' ? 
        `name = "John"  # string\nage = 25        # integer` :
        `let name = "John";  // string\nlet age = 25;        // number`) +
      `\n\nVariables can hold different types of data like text, numbers, and true/false values.`;
  }
  
  if (q.includes("loop") || q.includes("for") || q.includes("while")) {
    return `Loops in ${language}:\n\n` +
      (language === 'python' ?
        `# For loop\nfor i in range(5):\n    print(i)\n\n# While loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1` :
        `// For loop\nfor (let i = 0; i < 5; i++) {\n    console.log(i);\n}\n\n// While loop\nlet count = 0;\nwhile (count < 5) {\n    console.log(count);\n    count++;\n}`);
  }
  
  if (q.includes("function") || q.includes("def")) {
    return `Functions in ${language}:\n\n` +
      (language === 'python' ?
        `def greet(name):\n    return "Hello, " + name + "!"\n\nprint(greet("Alice"))` :
        `function greet(name) {\n    return "Hello, " + name + "!";\n}\n\nconsole.log(greet("Alice"));`);
  }
  
  if (q.includes("array") || q.includes("list")) {
    return `Arrays/Lists in ${language}:\n\n` +
      (language === 'python' ?
        `fruits = ["apple", "banana", "cherry"]\nprint(fruits[0])  # Access first item\nfruits.append("orange")  # Add item` :
        `let fruits = ["apple", "banana", "cherry"];\nconsole.log(fruits[0]);  // Access first item\nfruits.push("orange");   // Add item`);
  }
  
  if (q.includes("object") || q.includes("dict")) {
    return `Objects/Dictionaries in ${language}:\n\n` +
      (language === 'python' ?
        `person = {"name": "John", "age": 30}\nprint(person["name"])\nperson["city"] = "NYC"` :
        `let person = {name: "John", age: 30};\nconsole.log(person.name);\nperson.city = "NYC";`);
  }
  
  if (q.includes("html") || q.includes("tag")) {
    return `HTML Basics:\n\n` +
      `Common HTML elements:\n` +
      `- <h1> to <h6> for headings\n` +
      `- <p> for paragraphs\n` +
      `- <a href="url"> for links\n` +
      `- <img src="url"> for images\n` +
      `- <div> for containers\n` +
      `- <button> for buttons`;
  }
  
  if (q.includes("css") || q.includes("style")) {
    return `CSS Basics:\n\n` +
      `Ways to style:\n` +
      `1. Inline: <p style="color: blue;">\n` +
      `2. Internal: <style> p { color: blue; } </style>\n` +
      `3. External: <link rel="stylesheet" href="style.css">\n\n` +
      `Common properties: color, background, padding, margin, font-size`;
  }
  
  // Default response for other questions
  return `Great question about "${question}"!\n\n` +
    `To learn more, try these resources:\n` +
    `1. Check the lesson examples\n` +
    `2. Experiment with the code editor\n` +
    `3. Add OPENAI_API_KEY for AI-powered answers`;
}

function getExplainResponse(lessonTitle: string, language: string, code: string): string {
  return `📖 ${lessonTitle} - Explanation\n\n` +
    `This lesson covers: ${lessonTitle}\n\n` +
    `Key concepts:\n` +
    `• ${language === 'python' ? 'Python' : language === 'javascript' ? 'JavaScript' : language === 'html' ? 'HTML' : 'CSS'} is a ${language === 'html' || language === 'css' ? 'markup/style' : 'programming'} language\n` +
    `• The code shows how to use this concept in practice\n\n` +
    `Try running the example in the editor!\n` +
    `Then modify it to experiment.`;
}

function getFixResponse(language: string, code: string, error: string): string {
  let response = `🔧 Code Fix Help\n\n`;
  
  if (error) {
    response += `Error detected: ${error}\n\n`;
    
    // Common Python errors
    if (error.includes("SyntaxError")) {
      response += `This is a syntax error. Check for:\n` +
        `• Missing colons (:) after if/for/while/function definitions\n` +
        `• Incorrect indentation\n` +
        `• Unmatched parentheses or quotes\n\n`;
    }
    
    // Common JavaScript errors  
    if (error.includes("ReferenceError") || error.includes("is not defined")) {
      response += `This variable isn't defined. Check:\n` +
        `• Variable name spelling\n` +
        `• Variable is declared before use\n` +
        `• Use let/const/var to declare variables\n\n`;
    }
    
    if (error.includes("TypeError")) {
      response += `This is a type error. Check:\n` +
        `• You're calling a method on the correct type\n` +
        `• Variable is not null/undefined before use\n\n`;
    }
  } else {
    response += `No error detected. To improve your code:\n` +
      `• Check for logic errors\n` +
      `• Make sure variables are initialized\n` +
      `• Verify loop conditions are correct\n\n`;
  }
  
  response += `Tip: Add OPENAI_API_KEY for detailed AI-powered code fixes!`;
  return response;
}

function getQuizResponse(lessonTitle: string, language: string): string {
  const quizzes: Record<string, string> = {
    'html': `📝 HTML Quiz\n\n` +
      `1. What does HTML stand for?\n   a) Hyper Text Markup Language\n   b) High Tech Modern Language\n   c) Home Tool Markup Language\n\n` +
      `2. Which tag defines the largest heading?\n   a) <heading>\n   b) <h6>\n   c) <h1>\n\n` +
      `3. What is the correct HTML element for a hyperlink?\n   a) <link>\n   b) <a>\n   c) <href>\n\n` +
      `Answers: 1-a, 2-c, 3-b`,
      
    'css': `📝 CSS Quiz\n\n` +
      `1. What does CSS stand for?\n   a) Computer Style Sheets\n   b) Cascading Style Sheets\n   c) Creative Style System\n\n` +
      `2. Which property changes text color?\n   a) text-color\n   b) font-color\n   c) color\n\n` +
      `3. How do you select an element with id "demo"?\n   a) .demo\n   b) #demo\n   c) demo\n\n` +
      `Answers: 1-b, 2-c, 3-b`,
      
    'javascript': `📝 JavaScript Quiz\n\n` +
      `1. Which keyword declares a variable?\n   a) var\n   b) let\n   c) both a and b\n\n` +
      `2. How do you write a comment in JS?\n   a) <!-- comment -->\n   b) // comment\n   c) # comment\n\n` +
      `3. Which method adds an element to an array?\n   a) add()\n   b) push()\n   c) append()\n\n` +
      `Answers: 1-c, 2-b, 3-b`,
      
    'python': `📝 Python Quiz\n\n` +
      `1. How do you print in Python?\n   a) console.log()\n   b) print()\n   c) echo()\n\n` +
      `2. Which is correct for a list?\n   a) [1, 2, 3]\n   b) (1, 2, 3)\n   c) {1, 2, 3}\n\n` +
      `3. How do you define a function?\n   a) function myFunc()\n   b) def myFunc()\n   c) func myFunc()\n\n` +
      `Answers: 1-b, 2-a, 3-b`
  };
  
  return quizzes[language] || `Quiz for ${lessonTitle}:\n\nTry the lesson exercises to test your knowledge!`;
}

function getExerciseResponse(lessonTitle: string, language: string): string {
  const exercises: Record<string, { task: string; solution: string }> = {
    'html': {
      task: `Create an HTML page with:\n1. A heading\n2. Two paragraphs\n3. A clickable link`,
      solution: `<!DOCTYPE html>\n<html>\n<body>\n  <h1>My Page</h1>\n  <p>First paragraph.</p>\n  <p>Second paragraph.</p>\n  <a href="https://google.com">Google</a>\n</body>\n</html>`
    },
    'css': {
      task: `Style a paragraph to have:\n1. Red text color\n2. Blue background\n3. 20px padding`,
      solution: `<style>\np {\n  color: red;\n  background: blue;\n  padding: 20px;\n}\n</style>\n<p>Styled paragraph</p>`
    },
    'javascript': {
      task: `Create a function that:\n1. Takes two numbers\n2. Returns their sum`,
      solution: `function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(5, 3)); // Output: 8`
    },
    'python': {
      task: `Write a function that:\n1. Takes a name\n2. Returns a greeting`,
      solution: `def greet(name):\n    return "Hello, " + name + "!"\n\nprint(greet("Alice"))`
    }
  };
  
  const exercise = exercises[language];
  if (!exercise) {
    return `Exercise for ${lessonTitle}:\n\nTry modifying the example code in the editor!\n\nTip: Add OPENAI_API_KEY for personalized exercises.`;
  }
  
  return `📝 Exercise\n\n${exercise.task}\n\n---\n\n💡 Solution:\n\n${exercise.solution}`;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = Req.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 });

  // If you don't set a key, return a rules-based tutor response (still works for demos).
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) {
    const text = getOfflineResponse({
      kind: parsed.data.kind,
      lessonTitle: parsed.data.lessonTitle,
      language: parsed.data.language,
      code: parsed.data.code,
      error: parsed.data.error,
      question: parsed.data.question
    });
    return NextResponse.json({ ok: true, text });
  }

  // Minimal OpenAI Chat Completions call
  const messages = [
    {
      role: "system",
      content:
        "You are a strict but kind coding tutor. Use short steps. Give examples. If fixing code, provide a corrected version and explain changes. Do not claim guaranteed earnings."
    },
    {
      role: "user",
      content: JSON.stringify(parsed.data)
    }
  ];

  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gpt-4o-mini", messages, temperature: 0.4 })
  });

  if (!r.ok) {
    const t = await r.text();
    return NextResponse.json({ ok: false, error: t }, { status: 500 });
  }

  const data = await r.json();
  const text = data.choices?.[0]?.message?.content ?? "";
  return NextResponse.json({ ok: true, text });
}
