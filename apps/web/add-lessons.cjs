const fs = require('fs');

const newLessons = `

  // SQL LESSONS
  {
    id: "sql-select",
    language: "sql",
    title: "SQL SELECT",
    summary: "Learn to retrieve data from databases using SELECT.",
    tags: ["sql", "select", "query"],
    starterCode: "SELECT * FROM users;"
  },
  {
    id: "sql-where",
    language: "sql",
    title: "SQL WHERE Clause",
    summary: "Filter data with WHERE conditions.",
    tags: ["sql", "where", "filter"],
    starterCode: "SELECT * FROM products WHERE price > 100;"
  },
  {
    id: "sql-join",
    language: "sql",
    title: "SQL JOIN",
    summary: "Combine data from multiple tables using JOIN.",
    tags: ["sql", "join", "tables"],
    starterCode: "SELECT orders.id, users.name FROM orders INNER JOIN users ON orders.user_id = users.id;"
  },
  {
    id: "sql-aggregate",
    language: "sql",
    title: "SQL Aggregate Functions",
    summary: "Use COUNT, SUM, AVG, MIN, MAX.",
    tags: ["sql", "aggregate", "functions"],
    starterCode: "SELECT COUNT(*) FROM users;"
  },

  // PHP MORE
  {
    id: "php-arrays",
    language: "php",
    title: "PHP Arrays",
    summary: "Work with indexed and associative arrays.",
    tags: ["php", "arrays"],
    starterCode: "<?php $fruits = array('apple', 'banana'); echo $fruits[0]; ?>"
  },
  {
    id: "php-loops",
    language: "php",
    title: "PHP Loops",
    summary: "Use for, while, foreach loops in PHP.",
    tags: ["php", "loops"],
    starterCode: "<?php for($i=0; $i<5; $i++){ echo $i; } ?>"
  },

  // JAVASCRIPT MORE
  {
    id: "js-promises",
    language: "javascript",
    title: "JavaScript Promises",
    summary: "Handle asynchronous operations with Promises.",
    tags: ["javascript", "promises", "async"],
    starterCode: "const promise = new Promise((resolve, reject) => { resolve('Done!'); }); promise.then(result => console.log(result));"
  },
  {
    id: "js-fetch",
    language: "javascript",
    title: "JavaScript Fetch API",
    summary: "Make HTTP requests with fetch().",
    tags: ["javascript", "fetch", "api", "http"],
    starterCode: "fetch('https://api.example.com/data').then(r => r.json()).then(d => console.log(d)).catch(e => console.error(e));"
  },
  {
    id: "js-classes",
    language: "javascript",
    title: "JavaScript Classes",
    summary: "Create classes and objects in JavaScript.",
    tags: ["javascript", "classes", "oop"],
    starterCode: "class Person { constructor(name, age) { this.name = name; this.age = age; } greet() { return 'Hello, ' + this.name; } } const p = new Person('Alice', 25); console.log(p.greet());"
  },

  // PYTHON MORE
  {
    id: "py-file-io",
    language: "python",
    title: "Python File I/O",
    summary: "Read and write files in Python.",
    tags: ["python", "files", "io"],
    starterCode: "with open('file.txt', 'r') as f: print(f.read())"
  },
  {
    id: "py-exception",
    language: "python",
    title: "Python Exception Handling",
    summary: "Handle errors with try/except.",
    tags: ["python", "exceptions", "error"],
    starterCode: "try: x = 1/0 except ZeroDivisionError: print('Cannot divide by zero!')"
  },
  {
    id: "py-oop",
    language: "python",
    title: "Python OOP",
    summary: "Object-oriented programming in Python.",
    tags: ["python", "oop", "classes"],
    starterCode: "class Dog: def __init__(self, name): self.name = name def bark(self): return self.name + ' says Woof!' my_dog = Dog('Buddy'); print(my_dog.bark())"
  },

  // TYPESCRIPT
  {
    id: "ts-types",
    language: "typescript",
    title: "TypeScript Basic Types",
    summary: "Learn TypeScript primitive and array types.",
    tags: ["typescript", "types"],
    starterCode: "let name: string = 'Alice'; let age: number = 25; let active: boolean = true; console.log(name, age, active);"
  },
  {
    id: "ts-functions",
    language: "typescript",
    title: "TypeScript Functions",
    summary: "Type function parameters and return values.",
    tags: ["typescript", "functions"],
    starterCode: "function add(a: number, b: number): number { return a + b; } console.log(add(5, 3));"
  },
  {
    id: "ts-classes",
    language: "typescript",
    title: "TypeScript Classes",
    summary: "Create typed classes in TypeScript.",
    tags: ["typescript", "classes"],
    starterCode: "class Animal { constructor(public name: string) {} } class Dog extends Animal { constructor(name: string, public breed: string) { super(name); } } const d = new Dog('Buddy', 'Lab'); console.log(d.name);"
  },

  // NODE.JS
  {
    id: "nodejs-intro",
    language: "nodejs",
    title: "Node.js Introduction",
    summary: "Learn Node.js and npm basics.",
    tags: ["nodejs", "javascript", "server"],
    starterCode: "const http = require('http'); const s = http.createServer((r, res) => { res.end('Hello!'); }); s.listen(3000);"
  },
  {
    id: "nodejs-express",
    language: "nodejs",
    title: "Express.js Basics",
    summary: "Create web servers with Express.",
    tags: ["nodejs", "express", "server"],
    starterCode: "const express = require('express'); const app = express(); app.get('/', (req, res) => res.send('Hello!')); app.listen(3000);"
  },

  // REACT
  {
    id: "react-intro",
    language: "react",
    title: "React Introduction",
    summary: "Learn React fundamentals and JSX.",
    tags: ["react", "javascript", "ui"],
    starterCode: "import React from 'react'; function App() { return <h1>Hello React!</h1>; } export default App;"
  },
  {
    id: "react-state",
    language: "react",
    title: "React State",
    summary: "Manage component state with useState.",
    tags: ["react", "state", "hooks"],
    starterCode: "import { useState } from 'react'; function Counter() { const [c, setC] = useState(0); return <button onClick={()=>setC(c+1)}>{c}</button>; }"
  },

  // JAVA
  {
    id: "java-strings",
    language: "java",
    title: "Java Strings",
    summary: "Work with strings in Java.",
    tags: ["java", "strings"],
    starterCode: "public class Main { public static void main(String[] args) { String s = \"Hello\"; System.out.println(s.length()); } }"
  },

  // GO
  {
    id: "go-variables",
    language: "go",
    title: "Go Variables",
    summary: "Declare and use variables in Go.",
    tags: ["go", "golang", "variables"],
    starterCode: "package main; import \"fmt\"; func main() { name := \"Alice\"; fmt.Println(\"Hello\", name); }"
  },
  {
    id: "go-maps",
    language: "go",
    title: "Go Maps",
    summary: "Use maps in Go.",
    tags: ["go", "maps"],
    starterCode: "package main; import \"fmt\"; func main() { m := make(map[string]int); m[\"a\"] = 1; fmt.Println(m); }"
  },

  // RUBY
  {
    id: "ruby-intro",
    language: "ruby",
    title: "Ruby Introduction",
    summary: "Learn Ruby basics and syntax.",
    tags: ["ruby", "scripting"],
    starterCode: "name = \"Alice\"; puts \"Hello, #{name}\"; fruits = ['a','b']; puts fruits[0]"
  },

  // C#
  {
    id: "csharp-intro",
    language: "csharp",
    title: "C# Introduction",
    summary: "Learn C# basics and syntax.",
    tags: ["csharp", ".net", "microsoft"],
    starterCode: "using System; class Program { static void Main() { string n = \"Alice\"; Console.WriteLine(\"Hello, \" + n); } }"
  },

  // SWIFT MORE
  {
    id: "swift-optionals",
    language: "swift",
    title: "Swift Optionals",
    summary: "Handle nil values with optionals.",
    tags: ["swift", "optionals", "nil"],
    starterCode: "var name: String? = \"Alice\"; name = nil; if let n = name { print(n) }; print(name ?? \"Guest\")"
  },

  // KOTLIN
  {
    id: "kotlin-classes",
    language: "kotlin",
    title: "Kotlin Classes",
    summary: "Create classes in Kotlin.",
    tags: ["kotlin", "classes", "oop"],
    starterCode: "class Person(val name: String, var age: Int) { fun greet() = \"Hello, $name\" } fun main() { val p = Person(\"Alice\", 25); println(p.greet()); }"
  },

  // C++ MORE
  {
    id: "cpp-pointers",
    language: "cpp",
    title: "C++ Pointers",
    summary: "Work with pointers in C++.",
    tags: ["cpp", "pointers"],
    starterCode: "#include <iostream> using namespace std; int main() { int n = 10; int* p = &n; cout << *p << endl; return 0; }"
  },

  // RUST MORE
  {
    id: "rust-ownership",
    language: "rust",
    title: "Rust Ownership",
    summary: "Understand Rust ownership system.",
    tags: ["rust", "ownership"],
    starterCode: "fn main() { let s1 = String::from(\"hello\"); let s2 = s1; println!(\"{}\", s2); }"
  },

  // BOOTSTRAP MORE
  {
    id: "bootstrap-grid",
    language: "bootstrap",
    title: "Bootstrap Grid System",
    summary: "Learn Bootstrap responsive grid.",
    tags: ["bootstrap", "grid", "responsive"],
    starterCode: "<div class='container'><div class='row'><div class='col-6'>Col 1</div><div class='col-6'>Col 2</div></div></div>"
  },

  // R MORE
  {
    id: "r-matrix",
    language: "r",
    title: "R Matrices",
    summary: "Work with matrices in R.",
    tags: ["r", "matrix", "arrays"],
    starterCode: "m <- matrix(1:9, nrow=3); print(m)"
  }
`;

let content = fs.readFileSync('lib/lessons.ts', 'utf8');
content = content.replace(/\];\s*$/, newLessons + ';');
fs.writeFileSync('lib/lessons.ts', content);
console.log('Lessons added successfully');
