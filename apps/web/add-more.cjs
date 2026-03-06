const fs = require('fs');

const newLessons = `

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
    starterCode: "SELECT o.id, u.name FROM orders o INNER JOIN users u ON o.user_id = u.id;"
  },
  {
    id: "php-arrays",
    language: "php",
    title: "PHP Arrays",
    summary: "Work with indexed and associative arrays.",
    tags: ["php", "arrays"],
    starterCode: "<?php $f = array('a','b'); echo $f[0]; ?>"
  },
  {
    id: "php-loops",
    language: "php",
    title: "PHP Loops",
    summary: "Use for, while, foreach loops in PHP.",
    tags: ["php", "loops"],
    starterCode: "<?php for($i=0;$i<5;$i++){echo $i;} ?>"
  },
  {
    id: "js-promises",
    language: "javascript",
    title: "JavaScript Promises",
    summary: "Handle asynchronous operations with Promises.",
    tags: ["javascript", "promises", "async"],
    starterCode: "new Promise((r,j)=>r('ok')).then(x=>console.log(x));"
  },
  {
    id: "js-fetch",
    language: "javascript",
    title: "JavaScript Fetch API",
    summary: "Make HTTP requests with fetch.",
    tags: ["javascript", "fetch", "api"],
    starterCode: "fetch('url').then(r=>r.json()).then(d=>console.log(d));"
  },
  {
    id: "js-classes",
    language: "javascript",
    title: "JavaScript Classes",
    summary: "Create classes and objects.",
    tags: ["javascript", "classes", "oop"],
    starterCode: "class P{constructor(n){this.n=n}g(){return'hi'+this.n}}new P('a').g();"
  },
  {
    id: "py-file-io",
    language: "python",
    title: "Python File I/O",
    summary: "Read and write files.",
    tags: ["python", "files", "io"],
    starterCode: "with open('f.txt','r') as f:print(f.read())"
  },
  {
    id: "py-exception",
    language: "python",
    title: "Python Exception Handling",
    summary: "Handle errors with try/except.",
    tags: ["python", "exceptions", "error"],
    starterCode: "try:x=1/0 except ZeroDivisionError:print('err')"
  },
  {
    id: "ts-types",
    language: "typescript",
    title: "TypeScript Basic Types",
    summary: "Learn TypeScript types.",
    tags: ["typescript", "types"],
    starterCode: "let n:string='a';let a:number=1;let b:boolean=true;"
  },
  {
    id: "ts-functions",
    language: "typescript",
    title: "TypeScript Functions",
    summary: "Type function parameters.",
    tags: ["typescript", "functions"],
    starterCode: "function add(a:number,b:number):number{return a+b}add(1,2);"
  },
  {
    id: "nodejs-intro",
    language: "nodejs",
    title: "Node.js Introduction",
    summary: "Learn Node.js basics.",
    tags: ["nodejs", "server"],
    starterCode: "require('http').createServer((r,s)=>s.end('hi')).listen(3000);"
  },
  {
    id: "nodejs-express",
    language: "nodejs",
    title: "Express.js Basics",
    summary: "Create servers with Express.",
    tags: ["nodejs", "express"],
    starterCode: "const e=require('express')();e.get('/',(r,s)=>s.send('hi')).listen(3000);"
  },
  {
    id: "react-intro",
    language: "react",
    title: "React Introduction",
    summary: "Learn React fundamentals.",
    tags: ["react", "ui"],
    starterCode: "function App(){return<h1>Hi</h1>}export default App;"
  },
  {
    id: "react-state",
    language: "react",
    title: "React State",
    summary: "Manage state with useState.",
    tags: ["react", "state", "hooks"],
    starterCode: "import{u}from'react';function C(){const[c,s]=u(0);return<button onClick={()=>s(c+1)}>{c}</button>}"
  },
  {
    id: "java-strings",
    language: "java",
    title: "Java Strings",
    summary: "Work with strings.",
    tags: ["java", "strings"],
    starterCode: "class M{public static void main(String[]a){String s=\"hi\";System.out.println(s.length());}}"
  },
  {
    id: "go-variables",
    language: "go",
    title: "Go Variables",
    summary: "Declare variables in Go.",
    tags: ["go", "variables"],
    starterCode: "package main;import\"fmt\";func main(){n:=1;fmt.Println(n);}"
  },
  {
    id: "go-maps",
    language: "go",
    title: "Go Maps",
    summary: "Use maps in Go.",
    tags: ["go", "maps"],
    starterCode: "package main;import\"fmt\";func main(){m:=make(map[string]int);m[\"a\"]=1;fmt.Println(m);}"
  },
  {
    id: "ruby-intro",
    language: "ruby",
    title: "Ruby Introduction",
    summary: "Learn Ruby basics.",
    tags: ["ruby"],
    starterCode: "n=\"a\";puts\"hi #{n}\""
  },
  {
    id: "csharp-intro",
    language: "csharp",
    title: "C# Introduction",
    summary: "Learn C# basics.",
    tags: ["csharp", "dotnet"],
    starterCode: "using System;class P{static void Main(){Console.WriteLine(\"hi\");}}"
  },
  {
    id: "swift-optionals",
    language: "swift",
    title: "Swift Optionals",
    summary: "Handle nil with optionals.",
    tags: ["swift", "optionals"],
    starterCode: "var n:String?=\"a\";n=nil;print(n ?? \"b\");"
  },
  {
    id: "kotlin-classes",
    language: "kotlin",
    title: "Kotlin Classes",
    summary: "Create classes in Kotlin.",
    tags: ["kotlin", "classes"],
    starterCode: "class P(val n:String){fun g()=\"hi \$n\"}fun main(){println(P(\"a\").g())}"
  },
  {
    id: "cpp-pointers",
    language: "cpp",
    title: "C++ Pointers",
    summary: "Work with pointers.",
    tags: ["cpp", "pointers"],
    starterCode: "int n=1;int*p=&n;cout<<*p<<endl;"
  },
  {
    id: "rust-ownership",
    language: "rust",
    title: "Rust Ownership",
    summary: "Understand ownership.",
    tags: ["rust", "ownership"],
    starterCode: "fn main(){let s1=String::from(\"hi\");let s2=s1;println!(\"{}\",s2);}"
  },
  {
    id: "bootstrap-grid",
    language: "bootstrap",
    title: "Bootstrap Grid",
    summary: "Responsive grid.",
    tags: ["bootstrap", "grid"],
    starterCode: "<div class='container'><div class='row'><div class='col-6'>a</div><div class='col-6'>b</div></div></div>"
  },
  {
    id: "r-matrix",
    language: "r",
    title: "R Matrices",
    summary: "Work with matrices.",
    tags: ["r", "matrix"],
    starterCode: "m<-matrix(1:9,nrow=3);print(m)"
  }
`;

let content = fs.readFileSync('lib/lessons.ts', 'utf8');
const lastIndex = content.lastIndexOf('];');
if (lastIndex > 0) {
  content = content.substring(0, lastIndex) + newLessons + ';';
  fs.writeFileSync('lib/lessons.ts', content);
  console.log('Lessons added!');
} else {
  console.log('Error: closing not found');
}
