export type Language = "html" | "css" | "javascript" | "python" | "swift" | "kotlin" | "cpp" | "rust" | "r" | "sql" | "php" | "react" | "nodejs" | "jquery" | "bootstrap" | "typescript" | "json" | "xml" | "go" | "docker" | "sass" | "vue" | "angular" | "ajax" | "mysql" | "django" | "flask" | "java" | "jsp" | "spring" | "numpy" | "pandas" | "matplotlib" | "git" | "github" | "cybersecurity" | "accessibility" | "xpath" | "xslt" | "excel" | "ai";

export type Lesson = {
  id: string;
  language: Language;
  title: string;
  summary: string;
  tags: string[];
  starterCode: string;
};

export const lessons: Lesson[] = [
  // HTML LESSONS
  {
    id: "html-intro",
    language: "html",
    title: "HTML Introduction",
    summary: "Learn what HTML is and how to create your first webpage.",
    tags: ["html", "intro", "basics", "web"],
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is my first webpage.</p>
</body>
</html>`
  },
  {
    id: "html-headings",
    language: "html",
    title: "HTML Headings",
    summary: "Headings define the title and subtitle of your content.",
    tags: ["html", "headings", "h1", "h6"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</body>
</html>`
  },
  {
    id: "html-paragraphs",
    language: "html",
    title: "HTML Paragraphs",
    summary: "Paragraphs define blocks of text in your document.",
    tags: ["html", "paragraphs", "p", "text"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <p>This is a paragraph of text.</p>
  <p>This is another paragraph.</p>
  <p>HTML ignores extra spaces.</p>
</body>
</html>`
  },
  {
    id: "html-links",
    language: "html",
    title: "HTML Links",
    summary: "Links allow users to navigate between pages.",
    tags: ["html", "links", "a", "href"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>HTML Links</h2>
  <p>Click the link:</p>
  <a href="https://www.google.com">Visit Google</a>
</body>
</html>`
  },
  {
    id: "html-images",
    language: "html",
    title: "HTML Images",
    summary: "Images enhance your webpage visually.",
    tags: ["html", "images", "img", "src"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>HTML Images</h2>
  <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="Logo" width="150">
</body>
</html>`
  },
  {
    id: "html-lists",
    language: "html",
    title: "HTML Lists",
    summary: "Create ordered and unordered lists.",
    tags: ["html", "lists", "ul", "ol", "li"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Unordered List</h2>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
  <h2>Ordered List</h2>
  <ol>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ol>
</body>
</html>`
  },
  {
    id: "html-tables",
    language: "html",
    title: "HTML Tables",
    summary: "Tables display data in rows and columns.",
    tags: ["html", "tables", "tr", "td", "th"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>HTML Table</h2>
  <table border="1">
    <tr><th>Name</th><th>Age</th></tr>
    <tr><td>John</td><td>25</td></tr>
    <tr><td>Jane</td><td>30</td></tr>
  </table>
</body>
</html>`
  },
  {
    id: "html-forms",
    language: "html",
    title: "HTML Forms",
    summary: "Forms collect user input for processing.",
    tags: ["html", "forms", "input", "button"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>HTML Form</h2>
  <form>
    <label>Name:</label><br>
    <input type="text" name="name"><br><br>
    <button type="submit">Submit</button>
  </form>
</body>
</html>`
  },
  // CSS LESSONS
  {
    id: "css-intro",
    language: "css",
    title: "CSS Introduction",
    summary: "Learn what CSS is and how to style HTML elements.",
    tags: ["css", "intro", "basics", "style"],
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; background: #f0f0f0; }
    h1 { color: blue; }
    p { color: green; }
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
  <p>This paragraph is styled with CSS.</p>
</body>
</html>`
  },
  {
    id: "css-colors",
    language: "css",
    title: "CSS Colors",
    summary: "Use colors to make your webpage visually appealing.",
    tags: ["css", "colors", "background", "text"],
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 { color: red; }
    .hex { color: #ff5733; }
    .rgb { color: rgb(0, 128, 0); }
  </style>
</head>
<body>
  <h1>Color Names</h1>
  <p class="hex">Hex Color</p>
  <p class="rgb">RGB Color</p>
</body>
</html>`
  },
  {
    id: "css-box-model",
    language: "css",
    title: "CSS Box Model",
    summary: "Understand content, padding, border, and margin.",
    tags: ["css", "box-model", "padding", "margin"],
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      background: lightgray;
      padding: 20px;
      border: 5px solid navy;
      margin: 20px;
    }
  </style>
</head>
<body>
  <div class="box">
    <h2>The Box Model</h2>
    <p>Content + Padding + Border + Margin</p>
  </div>
</body>
</html>`
  },
  {
    id: "css-flexbox",
    language: "css",
    title: "CSS Flexbox",
    summary: "Create flexible layouts with flexbox.",
    tags: ["css", "flexbox", "layout", "display"],
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
      gap: 10px;
      background: #f0f0f0;
    }
    .box {
      background: dodgerblue;
      color: white;
      padding: 20px;
      flex: 1;
      text-align: center;
    }
  </style>
</head>
<body>
  <h2>Flexbox Layout</h2>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
</body>
</html>`
  },
  {
    id: "css-grid",
    language: "css",
    title: "CSS Grid",
    summary: "Create two-dimensional layouts with CSS Grid.",
    tags: ["css", "grid", "layout", "columns"],
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 10px;
    }
    .grid-item {
      background: dodgerblue;
      color: white;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <h2>CSS Grid</h2>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
  </div>
</body>
</html>`
  },
  // JAVASCRIPT LESSONS
  {
    id: "js-intro",
    language: "javascript",
    title: "JavaScript Introduction",
    summary: "Learn what JavaScript is and how to use it in HTML.",
    tags: ["javascript", "intro", "basics", "script"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h1>JavaScript Intro</h1>
  <p id="demo">Watch this change!</p>
  <script>
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
  </script>
</body>
</html>`
  },
  {
    id: "js-variables",
    language: "javascript",
    title: "JavaScript Variables",
    summary: "Store and manipulate data using variables.",
    tags: ["javascript", "variables", "let", "const"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Variables</h2>
  <p id="output"></p>
  <script>
    let name = "John";
    const age = 25;
    let message = "Name: " + name + ", Age: " + age;
    document.getElementById("output").innerHTML = message;
  </script>
</body>
</html>`
  },
  {
    id: "js-operators",
    language: "javascript",
    title: "JavaScript Operators",
    summary: "Perform operations with arithmetic and comparison operators.",
    tags: ["javascript", "operators", "math", "comparison"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Operators</h2>
  <p id="output"></p>
  <script>
    let a = 10, b = 3;
    let result = "a + b = " + (a + b) + "<br>";
    result += "a * b = " + (a * b) + "<br>";
    result += "a > b: " + (a > b);
    document.getElementById("output").innerHTML = result;
  </script>
</body>
</html>`
  },
  {
    id: "js-functions",
    language: "javascript",
    title: "JavaScript Functions",
    summary: "Create reusable blocks of code with functions.",
    tags: ["javascript", "functions", "return"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Functions</h2>
  <p id="output"></p>
  <script>
    function greet(name) {
      return "Hello, " + name + "!";
    }
    function add(a, b) {
      return a + b;
    }
    let result = greet("Alice") + "<br>";
    result += "5 + 3 = " + add(5, 3);
    document.getElementById("output").innerHTML = result;
  </script>
</body>
</html>`
  },
  {
    id: "js-dom",
    language: "javascript",
    title: "JavaScript DOM Manipulation",
    summary: "Change HTML content dynamically with the DOM.",
    tags: ["javascript", "dom", "getElementById", "innerHTML"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>DOM Manipulation</h2>
  <p id="demo">Original text</p>
  <button onclick="changeText()">Change Text</button>
  <button onclick="changeColor()">Change Color</button>
  <script>
    function changeText() {
      document.getElementById("demo").innerHTML = "Text changed!";
    }
    function changeColor() {
      document.getElementById("demo").style.color = "blue";
    }
  </script>
</body>
</html>`
  },
  {
    id: "js-events",
    language: "javascript",
    title: "JavaScript Events",
    summary: "Respond to user actions like clicks and keypresses.",
    tags: ["javascript", "events", "onclick", "addEventListener"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Events</h2>
  <button id="myBtn">Click Me</button>
  <p id="output"></p>
  <script>
    document.getElementById("myBtn").addEventListener("click", function() {
      document.getElementById("output").innerHTML = "Button clicked!";
    });
  </script>
</body>
</html>`
  },
  {
    id: "js-arrays",
    language: "javascript",
    title: "JavaScript Arrays",
    summary: "Store multiple values in a single variable.",
    tags: ["javascript", "arrays", "push", "pop"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Arrays</h2>
  <p id="output"></p>
  <script>
    let fruits = ["Apple", "Banana", "Orange"];
    let result = "Array: " + fruits + "<br>";
    result += "Length: " + fruits.length + "<br>";
    fruits.push("Mango");
    result += "After push: " + fruits;
    document.getElementById("output").innerHTML = result;
  </script>
</body>
</html>`
  },
  {
    id: "js-objects",
    language: "javascript",
    title: "JavaScript Objects",
    summary: "Store related data and functions in objects.",
    tags: ["javascript", "objects", "properties"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Objects</h2>
  <p id="output"></p>
  <script>
    let person = {
      name: "John",
      age: 30,
      city: "New York"
    };
    let result = "Name: " + person.name + "<br>";
    result += "Age: " + person["age"];
    document.getElementById("output").innerHTML = result;
  </script>
</body>
</html>`
  },
  {
    id: "js-conditions",
    language: "javascript",
    title: "JavaScript Conditions",
    summary: "Make decisions with if/else statements.",
    tags: ["javascript", "conditions", "if", "else"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Conditions</h2>
  <p id="output"></p>
  <script>
    let age = 18;
    let result = "";
    if (age >= 18) {
      result = "You are an adult";
    } else {
      result = "You are a minor";
    }
    document.getElementById("output").innerHTML = result;
  </script>
</body>
</html>`
  },
  {
    id: "js-loops",
    language: "javascript",
    title: "JavaScript Loops",
    summary: "Repeat code with for and while loops.",
    tags: ["javascript", "loops", "for", "while"],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Loops</h2>
  <p id="output"></p>
  <script>
    let result = "For loop: ";
    for (let i = 1; i <= 5; i++) {
      result += i + " ";
    }
    result += "<br>While: ";
    let count = 0;
    while (count < 3) {
      result += count + " ";
      count++;
    }
    document.getElementById("output").innerHTML = result;
  </script>
</body>
</html>`
  },
  // PYTHON LESSONS
  {
    id: "py-intro",
    language: "python",
    title: "Python Introduction",
    summary: "Learn what Python is and write your first program.",
    tags: ["python", "intro", "basics", "print"],
    starterCode: `# Python Introduction
print("Hello, World!")
print("Welcome to Python!")`
  },
  {
    id: "py-variables",
    language: "python",
    title: "Python Variables",
    summary: "Store data in variables for later use.",
    tags: ["python", "variables", "types"],
    starterCode: `# Python Variables
name = "Alice"
age = 25
height = 5.6
is_student = True

print("Name:", name)
print("Age:", age)
print("Is Student:", is_student)`
  },
  {
    id: "py-data-types",
    language: "python",
    title: "Python Data Types",
    summary: "Understand different data types in Python.",
    tags: ["python", "types", "int", "str", "float"],
    starterCode: `# Python Data Types
x = 5           # int
y = 3.14        # float
name = "Python" # str
is_true = True  # bool

print("Type of x:", type(x))
print("Type of y:", type(y))
print("Type of name:", type(name))`
  },
  {
    id: "py-operators",
    language: "python",
    title: "Python Operators",
    summary: "Perform operations with arithmetic and comparison operators.",
    tags: ["python", "operators", "math"],
    starterCode: `# Python Operators
a, b = 10, 3

print("a + b =", a + b)
print("a - b =", a - b)
print("a * b =", a * b)
print("a / b =", a / b)
print("a > b:", a > b)`
  },
  {
    id: "py-strings",
    language: "python",
    title: "Python Strings",
    summary: "Work with text using string methods.",
    tags: ["python", "strings", "text"],
    starterCode: `# Python Strings
text = "Hello, Python!"

print("Original:", text)
print("Upper:", text.upper())
print("Lower:", text.lower())
print("Length:", len(text))
print("Replace:", text.replace("Python", "World"))`
  },
  {
    id: "py-lists",
    language: "python",
    title: "Python Lists",
    summary: "Store multiple items in a single variable.",
    tags: ["python", "lists", "arrays"],
    starterCode: `# Python Lists
fruits = ["apple", "banana", "cherry"]

print("List:", fruits)
print("First:", fruits[0])
print("Length:", len(fruits))

fruits.append("orange")
print("After append:", fruits)

fruits.remove("banana")
print("After remove:", fruits)`
  },
  {
    id: "py-conditionals",
    language: "python",
    title: "Python Conditionals",
    summary: "Make decisions with if, elif, and else statements.",
    tags: ["python", "conditionals", "if", "else"],
    starterCode: `# Python Conditionals
age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# Another example
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "F"

print("Score:", score, "Grade:", grade)`
  },
  {
    id: "py-loops",
    language: "python",
    title: "Python Loops",
    summary: "Repeat code with for and while loops.",
    tags: ["python", "loops", "for", "while"],
    starterCode: `# Python Loops
print("For loop 1-5:")
for i in range(1, 6):
    print(i, end=" ")

print("\\nWhile loop:")
count = 0
while count < 3:
    print("Count:", count)
    count += 1`
  },
  {
    id: "py-functions",
    language: "python",
    title: "Python Functions",
    summary: "Create reusable code with functions.",
    tags: ["python", "functions", "def", "return"],
    starterCode: `# Python Functions

def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
print(greet("Bob"))

def add(a, b=0):
    return a + b

print("add(5, 3):", add(5, 3))
print("add(5):", add(5))`
  },
  {
    id: "py-dictionaries",
    language: "python",
    title: "Python Dictionaries",
    summary: "Store data in key-value pairs.",
    tags: ["python", "dictionaries", "dict", "keys"],
    starterCode: `# Python Dictionaries
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

print("Dictionary:", person)
print("Name:", person["name"])
print("Age:", person.get("age"))

person["email"] = "john@email.com"
print("Updated:", person)

print("Keys:", list(person.keys()))`
  },
  {
    id: "py-classes",
    language: "python",
    title: "Python Classes",
    summary: "Create objects with classes and OOP.",
    tags: ["python", "classes", "oop", "object"],
    starterCode: `# Python Classes

class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"

my_dog = Dog("Buddy", 3)
print(my_dog.bark())
print(f"{my_dog.name} is {my_dog.age} years old")`
  },
  // SWIFT LESSONS
  {
    id: "swift-intro",
    language: "swift",
    title: "Swift Introduction",
    summary: "Learn Swift, Apple's modern programming language for iOS and macOS.",
    tags: ["swift", "ios", "apple", "intro"],
    starterCode: `// Swift Introduction
import Foundation

let greeting = "Hello, Swift!"
print(greeting)

// Variables
var name = "Alice"
let age = 25
print("Name: \(name), Age: \(age)")`
  },
  {
    id: "swift-variables",
    language: "swift",
    title: "Swift Variables & Constants",
    summary: "Learn about var and let in Swift.",
    tags: ["swift", "variables", "var", "let"],
    starterCode: `// Swift Variables
var greeting = "Hello"  // Mutable
let name = "Alice"       // Immutable

greeting = "Hi there"
// name = "Bob"  // Error! Cannot reassign

print("\(greeting), \(name)!")

// Type annotations
let message: String = "Welcome"
let count: Int = 42
print("\(message), count is \(count)")`
  },
  {
    id: "swift-functions",
    language: "swift",
    title: "Swift Functions",
    summary: "Create reusable code with Swift functions.",
    tags: ["swift", "functions", "func"],
    starterCode: `// Swift Functions
import Foundation

func greet(name: String) -> String {
    return "Hello, \(name)!"
}

print(greet(name: "Alice"))

// Multiple parameters
func add(a: Int, b: Int) -> Int {
    return a + b
}

print("5 + 3 = \(add(a: 5, b: 3))")

// Default parameters
func greet(message: String, name: String = "User") {
    print("\(message), \(name)!")
}

greet(message: "Hi")
greet(message: "Hello", name: "Bob")`
  },
  {
    id: "swift-arrays",
    language: "swift",
    title: "Swift Arrays",
    summary: "Work with arrays in Swift.",
    tags: ["swift", "arrays", "collection"],
    starterCode: `// Swift Arrays
import Foundation

var fruits = ["Apple", "Banana", "Cherry"]
print("Array: \(fruits)")
print("First: \(fruits[0])")
print("Count: \(fruits.count)")

// Add elements
fruits.append("Orange")
print("After append: \(fruits)")

// Remove
fruits.remove(at: 1)
print("After remove: \(fruits)")

// Loop
for fruit in fruits {
    print(fruit)
}`
  },
  {
    id: "swift-classes",
    language: "swift",
    title: "Swift Classes",
    summary: "Create objects with Swift classes.",
    tags: ["swift", "classes", "oop", "object"],
    starterCode: `// Swift Classes
import Foundation

class Dog {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func bark() -> String {
        return "\(name) says Woof!"
    }
}

let myDog = Dog(name: "Buddy", age: 3)
print(myDog.bark())
print("\(myDog.name) is \(myDog.age) years old")`
  },
  // KOTLIN LESSONS
  {
    id: "kotlin-intro",
    language: "kotlin",
    title: "Kotlin Introduction",
    summary: "Learn Kotlin, Google's preferred language for Android development.",
    tags: ["kotlin", "android", "google", "intro"],
    starterCode: `// Kotlin Introduction
fun main() {
    val greeting = "Hello, Kotlin!"
    println(greeting)
    
    // Variables
    var name = "Alice"
    val age = 25
    println("Name: $name, Age: $age")
}`
  },
  {
    id: "kotlin-variables",
    language: "kotlin",
    title: "Kotlin Variables",
    summary: "Learn val and var in Kotlin.",
    tags: ["kotlin", "variables", "val", "var"],
    starterCode: `// Kotlin Variables
fun main() {
    // val - immutable
    val name = "Alice"
    // name = "Bob"  // Error!
    
    // var - mutable
    var greeting = "Hello"
    greeting = "Hi there"
    
    println("$greeting, $name!")
    
    // Type annotations
    val message: String = "Welcome"
    val count: Int = 42
    println("$message, count is $count")
}`
  },
  {
    id: "kotlin-functions",
    language: "kotlin",
    title: "Kotlin Functions",
    summary: "Create functions in Kotlin.",
    tags: ["kotlin", "functions", "fun"],
    starterCode: `// Kotlin Functions
fun main() {
    println(greet("Alice"))
    println(add(5, 3))
}

fun greet(name: String): String {
    return "Hello, $name!"
}

// Single expression function
fun add(a: Int, b: Int) = a + b

// Default parameters
fun greet(message: String, name: String = "User") {
    println("$message, $name!")
}`
  },
  {
    id: "kotlin-null-safety",
    language: "kotlin",
    title: "Kotlin Null Safety",
    summary: "Handle nulls safely in Kotlin.",
    tags: ["kotlin", "null", "safety", "nullable"],
    starterCode: `// Kotlin Null Safety
fun main() {
    // Non-nullable
    var name: String = "Alice"
    // name = null  // Error!
    
    // Nullable
    var nullable: String? = "Hello"
    nullable = null
    
    // Safe call
    println(nullable?.length)
    
    // Elvis operator
    val length = nullable?.length ?: 0
    println("Length: $length")
    
    // Not null assertion
    println(nullable!!.length)  // Will crash if null
}`
  },
  // C++ LESSONS
  {
    id: "cpp-intro",
    language: "cpp",
    title: "C++ Introduction",
    summary: "Learn C++, a powerful language for system programming and games.",
    tags: ["cpp", "c++", "systems", "intro"],
    starterCode: `// C++ Introduction
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    
    // Variables
    string name = "Alice";
    int age = 25;
    cout << "Name: " << name << ", Age: " << age << endl;
    
    return 0;
}`
  },
  {
    id: "cpp-variables",
    language: "cpp",
    title: "C++ Variables & Types",
    summary: "Learn about C++ data types.",
    tags: ["cpp", "variables", "types", "int"],
    starterCode: `// C++ Variables
#include <iostream>
#include <string>
using namespace std;

int main() {
    // Basic types
    int age = 25;
    double height = 5.9;
    char grade = 'A';
    bool isStudent = true;
    string name = "Alice";
    
    cout << "Age: " << age << endl;
    cout << "Height: " << height << endl;
    cout << "Grade: " << grade << endl;
    cout << "Student: " << isStudent << endl;
    cout << "Name: " << name << endl;
    
    return 0;
}`
  },
  {
    id: "cpp-arrays",
    language: "cpp",
    title: "C++ Arrays",
    summary: "Work with arrays in C++.",
    tags: ["cpp", "arrays", "vector"],
    starterCode: `// C++ Arrays
#include <iostream>
#include <vector>
using namespace std;

int main() {
    // C-style array
    int numbers[5] = {1, 2, 3, 4, 5};
    cout << "First: " << numbers[0] << endl;
    
    // Vector (dynamic array)
    vector<string> fruits = {"Apple", "Banana"};
    fruits.push_back("Cherry");
    
    cout << "Fruits: ";
    for (string fruit : fruits) {
        cout << fruit << " ";
    }
    cout << endl;
    
    return 0;
}`
  },
  // RUST LESSONS
  {
    id: "rust-intro",
    language: "rust",
    title: "Rust Introduction",
    summary: "Learn Rust, a safe and fast systems programming language.",
    tags: ["rust", "systems", "memory", "intro"],
    starterCode: `// Rust Introduction
fn main() {
    let greeting = "Hello, Rust!";
    println!("{}", greeting);
    
    // Variables (immutable by default)
    let name = "Alice";
    let mut count = 5;  // mutable
    count = 6;
    
    println!("Name: {}, Count: {}", name, count);
}`
  },
  {
    id: "rust-variables",
    language: "rust",
    title: "Rust Variables & Mutability",
    summary: "Learn about variables and mutability in Rust.",
    tags: ["rust", "variables", "mut", "immutable"],
    starterCode: `// Rust Variables
fn main() {
    // Immutable by default
    let x = 5;
    // x = 6;  // Error!
    
    // Make mutable
    let mut y = 10;
    y = 20;
    
    println!("x: {}, y: {}", x, y);
    
    // Type annotations
    let z: i32 = 42;
    let name: &str = "Alice";
    println!("z: {}, name: {}", z, name);
}`
  },
  {
    id: "rust-functions",
    language: "rust",
    title: "Rust Functions",
    summary: "Create functions in Rust.",
    tags: ["rust", "functions", "fn"],
    starterCode: `// Rust Functions
fn main() {
    println!("{}", greet("Alice"));
    println!("{}", add(5, 3));
}

fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

// Simple function
fn add(a: i32, b: i32) -> i32 {
    a + b
}`
  },
  // R LESSONS
  {
    id: "r-intro",
    language: "r",
    title: "R Introduction",
    summary: "Learn R, the language for data science and statistics.",
    tags: ["r", "data", "statistics", "intro"],
    starterCode: `# R Introduction
# R is great for data analysis and statistics

greeting <- "Hello, R!"
print(greeting)

# Variables
name <- "Alice"
age <- 25

print(paste("Name:", name, ", Age:", age))`
  },
  {
    id: "r-vectors",
    language: "r",
    title: "R Vectors",
    summary: "Learn about vectors in R.",
    tags: ["r", "vectors", "data"],
    starterCode: `# R Vectors
# Create vectors
numbers <- c(1, 2, 3, 4, 5)
print(numbers)

# Arithmetic with vectors
print(numbers + 10)
print(numbers * 2)

# Character vectors
fruits <- c("apple", "banana", "cherry")
print(fruits)

# Access elements
print(fruits[1])  # R is 1-indexed

# Length
print(length(numbers))`
  },
  {
    id: "r-dataframes",
    language: "r",
    title: "R Data Frames",
    summary: "Work with data frames in R.",
    tags: ["r", "dataframe", "data"],
    starterCode: `# R Data Frames
# Create a data frame
df <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(25, 30, 35),
  score = c(85, 90, 95)
)

print(df)

# Access columns
print(df$name)
print(df$age)

# Access rows
print(df[1, ])

# Summary
print(summary(df))`
  },
  // AI LESSONS
  {
    id: "ai-intro",
    language: "ai",
    title: "AI Engineering Introduction",
    summary: "Learn the fundamentals of AI engineering and what it takes to build AI-powered applications.",
    tags: ["ai", "intro", "fundamentals", "basics"],
    starterCode: `# Welcome to AI Engineering!\n# Let's explore the fundamentals of Artificial Intelligence\n\n# What is AI?\nprint("Artificial Intelligence: Machines that mimic human intelligence")\n\n# Types of AI\nprint("1. Narrow AI - Designed for specific tasks")\nprint("2. General AI - Can perform any intellectual task")\nprint("3. Superintelligent AI - Exceeds human intelligence")\n\n# Key Concepts\nai_applications = ["Machine Learning", "Natural Language Processing", "Computer Vision", "Robotics"]\nprint(f"\\nCore AI Applications: {ai_applications}")`
  },
  {
    id: "ml-intro",
    language: "ai",
    title: "Machine Learning Introduction",
    summary: "Understand what Machine Learning is and explore the different types of ML algorithms.",
    tags: ["ai", "ml", "machine learning", "intro"],
    starterCode: `# Introduction to Machine Learning\n# ML is a subset of AI that enables systems to learn from data\n\n# Types of Machine Learning\nprint("1. Supervised Learning - Learning from labeled data")\nprint("2. Unsupervised Learning - Finding patterns in unlabeled data")\nprint("3. Reinforcement Learning - Learning through rewards and penalties")\n\n# Common ML Algorithms\nml_algorithms = [\n    "Linear Regression",\n    "Decision Trees",\n    "Random Forest",\n    "Support Vector Machines",\n    "Neural Networks"\n]\n\nprint("\\nPopular ML Algorithms:")\nfor algo in ml_algorithms:\n    print(f"  - {algo}")`
  },
  {
    id: "supervised-learning",
    language: "ai",
    title: "Supervised Learning",
    summary: "Explore classification and regression techniques in supervised learning.",
    tags: ["ai", "ml", "supervised learning", "classification", "regression"],
    starterCode: `# Supervised Learning: Classification & Regression\n\n# Classification: Predicting discrete categories\n# Example: Email spam detection\nprint("=== CLASSIFICATION ===")\nclassification_tasks = [\n    "Spam detection (spam/not spam)",\n    "Image classification (cat/dog)",\n    "Medical diagnosis (positive/negative)"\n]\nfor task in classification_tasks:\n    print(f"  - {task}")\n\n# Regression: Predicting continuous values\nprint("\\n=== REGRESSION ===")\nregression_tasks = [\n    "House price prediction",\n    "Temperature forecasting",\n    "Stock price prediction"\n]\nfor task in regression_tasks:\n    print(f"  - {task}")\n\n# Key Difference\nprint("\\nClassification: Discrete output (labels)")\nprint("Regression: Continuous output (numbers)")`
  },
  {
    id: "unsupervised-learning",
    language: "ai",
    title: "Unsupervised Learning",
    summary: "Learn about clustering algorithms and K-Means for finding patterns in data.",
    tags: ["ai", "ml", "unsupervised learning", "clustering", "k-means"],
    starterCode: `# Unsupervised Learning: Clustering & K-Means\n\n# What is Clustering?\nprint("=== CLUSTERING ===")\nprint("Grouping similar data points together without labels")\n\n# Common Clustering Algorithms\nclustering_algos = [\n    "K-Means",\n    "Hierarchical Clustering",\n    "DBSCAN",\n    "Gaussian Mixture Models"\n]\nprint("\\nClustering Algorithms:")\nfor algo in clustering_algos:\n    print(f"  - {algo}")\n\n# K-Means Example\nprint("\\n=== K-MEANS ALGORITHM ===")\nprint("1. Choose K (number of clusters)")\nprint("2. Initialize K centroids")\nprint("3. Assign points to nearest centroid")\nprint("4. Update centroids based on cluster points")\nprint("5. Repeat until convergence")\n\n# Use Cases\nprint("\\n=== USE CASES ===")\nuse_cases = ["Customer segmentation", "Document clustering", "Image compression"]\nfor case in use_cases:\n    print(f"  - {case}")`
  },
  {
    id: "deep-learning-intro",
    language: "ai",
    title: "Deep Learning Introduction",
    summary: "Understand neural networks basics and deep learning fundamentals.",
    tags: ["ai", "deep learning", "neural networks", "basics"],
    starterCode: `# Deep Learning Introduction\n# Deep Learning uses neural networks with multiple layers\n\nprint("=== DEEP LEARNING ===")\nprint("A subset of ML using neural networks with multiple hidden layers")\n\n# Key Components\nprint("\\nKey Components:")\ncomponents = [\n    "Input Layer - Receives data",\n    "Hidden Layers - Process information",\n    "Output Layer - Produces predictions"\n]\nfor comp in components:\n    print(f"  - {comp}")\n\n# Deep Learning Applications\nprint("\\nApplications:")\napplications = [\n    "Computer Vision (image recognition)",\n    "Natural Language Processing",\n    "Speech Recognition",\n    "Autonomous Vehicles"\n]\nfor app in applications:\n    print(f"  - {app}")\n\n# Why Deep Learning?\nprint("\\nWhy Deep Learning?")\nprint("- Can learn complex patterns")\nprint("- Works well with large datasets")\nprint("- Automatic feature extraction")`
  },
  {
    id: "neural-networks",
    language: "ai",
    title: "Neural Networks",
    summary: "Learn about neurons, weights, bias, and activation functions in neural networks.",
    tags: ["ai", "neural networks", "neurons", "weights", "activation"],
    starterCode: `# Neural Networks: Neurons, Weights, and Activation\n\nprint("=== NEURAL NETWORK BASICS ===")\n\n# The Neuron\nprint("\\n1. NEURON (Perceptron)")\nprint("   - Receives inputs")\nprint("   - Applies weights")\nprint("   - Adds bias")\nprint("   - Applies activation function")\nprint("   - Produces output")\n\n# Formula\nprint("\\n2. FORMULA: output = activation(sum(inputs * weights) + bias)")\n\n# Activation Functions\nprint("\\n3. ACTIVATION FUNCTIONS:")\nactivations = [\n    "ReLU (Rectified Linear Unit) - max(0, x)",\n    "Sigmoid - 1/(1+e^(-x))",\n    "Tanh - (e^x - e^(-x))/(e^x + e^(-x))",\n    "Softmax - for multi-class classification"\n]\nfor act in activations:\n    print(f"   - {act}")\n\n# Forward Propagation\nprint("\\n4. FORWARD PROPAGATION:")\nprint("   Input -> Hidden Layers -> Output")`
  },
  {
    id: "tensorflow",
    language: "ai",
    title: "TensorFlow",
    summary: "Learn Google's open-source ML framework for building neural networks.",
    tags: ["ai", "tensorflow", "google", "ml framework"],
    starterCode: `# TensorFlow - Google's ML Framework\n\nprint("=== TENSORFLOW ===")\nprint("Open-source platform for machine learning and AI")\n\n# Key Features\nprint("\\nKey Features:")\nfeatures = [\n    "Flexible computation graphs",\n    "Efficient GPU/CPU support",\n    "Keras integration",\n    "Large ecosystem of tools"\n]\nfor feat in features:\n    print(f"  - {feat}")\n\n# Basic TensorFlow Workflow\nprint("\\n=== BASIC WORKFLOW ===")\nworkflow = [\n    "1. Import TensorFlow",\n    "2. Prepare data",\n    "3. Build model (Sequential or Functional API)",\n    "4. Compile model (loss, optimizer, metrics)",\n    "5. Train model (model.fit())",\n    "6. Evaluate and predict"\n]\nfor step in workflow:\n    print(f"  {step}")\n\n# Simple Example Structure\nprint("\\n=== SIMPLE EXAMPLE ===")\nprint(""")\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Dense(128, activation='relu'),\n    tf.keras.layers.Dense(10, activation='softmax')\n])\nmodel.compile(optimizer='adam', loss='categorical_crossentropy')\nmodel.fit(x_train, y_train, epochs=10)\n""")`
  },
  {
    id: "pytorch",
    language: "ai",
    title: "PyTorch",
    summary: "Learn Facebook's deep learning framework with dynamic computation graphs.",
    tags: ["ai", "pytorch", "facebook", "deep learning"],
    starterCode: `# PyTorch - Facebook's Deep Learning Framework\n\nprint("=== PYTORCH ===")\nprint("Open-source machine learning framework by Meta (Facebook)")\n\n# Key Features\nprint("\\nKey Features:")\nfeatures = [\n    "Dynamic computation graphs",\n    "Pythonic syntax",\n    "Strong GPU acceleration",\n    "TorchScript for production"\n]\nfor feat in features:\n    print(f"  - {feat}")\n\n# TensorFlow vs PyTorch\nprint("\\n=== TENSORFLOW VS PYTORCH ===")\ncomparison = {\n    "Static Graphs": "Dynamic Graphs",\n    "Keras Integration": "Native Python API",\n    "Production Ready": "Research Favorite"\n}\nfor k, v in comparison.items():\n    print(f"  {k}: {v}")\n\n# Basic PyTorch Workflow\nprint("\\n=== BASIC WORKFLOW ===")\nworkflow = [\n    "1. Import torch",\n    "2. Create tensors",\n    "3. Define model (nn.Module)",\n    "4. Forward pass",\n    "5. Calculate loss",\n    "6. Backward pass & optimize"\n]\nfor step in workflow:\n    print(f"  {step}")\n\nprint("\\n=== SIMPLE EXAMPLE ===")\nprint(""")\nimport torch\nimport torch.nn as nn\n\nmodel = nn.Linear(10, 2)\ncriterion = nn.CrossEntropyLoss()\noptimizer = torch.optim.Adam(model.parameters())\n""")`
  },
  {
    id: "nlp",
    language: "ai",
    title: "Natural Language Processing",
    summary: "Learn text processing techniques and NLP fundamentals for AI applications.",
    tags: ["ai", "nlp", "text processing", "natural language"],
    starterCode: `# Natural Language Processing (NLP)\n\nprint("=== NATURAL LANGUAGE PROCESSING ===")\nprint("AI branch focused on understanding and generating human language")\n\n# NLP Tasks\nprint("\\n=== COMMON NLP TASKS ===")\ntasks = [\n    "Text Classification (sentiment analysis)",\n    "Named Entity Recognition (NER)",\n    "Machine Translation",\n    "Question Answering",\n    "Text Generation",\n    "Speech Recognition"\n]\nfor task in tasks:\n    print(f"  - {task}")\n\n# Text Preprocessing\nprint("\\n=== TEXT PREPROCESSING ===")\npreprocessing = [\n    "Tokenization (splitting text into words)",\n    "Lowercasing",\n    "Removing stopwords",\n    "Stemming/Lemmatization",\n    "Text vectorization (TF-IDF, Embeddings)"\n]\nfor step in preprocessing:\n    print(f"  - {step}")\n\n# NLP Libraries\nprint("\\n=== POPULAR NLP LIBRARIES ===")\nlibraries = ["NLTK", "spaCy", "Transformers (Hugging Face)", "TextBlob"]\nfor lib in libraries:\n    print(f"  - {lib}")`
  },
  {
    id: "computer-vision",
    language: "ai",
    title: "Computer Vision",
    summary: "Learn about image recognition, object detection, and computer vision techniques.",
    tags: ["ai", "computer vision", "image recognition", "cnn"],
    starterCode: `# Computer Vision\n\nprint("=== COMPUTER VISION ===")\nprint("AI field enabling machines to interpret and understand visual content")\n\n# Key Tasks\nprint("\\n=== COMMON COMPUTER VISION TASKS ===")\ntasks = [\n    "Image Classification",\n    "Object Detection",\n    "Semantic Segmentation",\n    "Face Recognition",\n    "Image Generation",\n    "Pose Estimation"\n]\nfor task in tasks:\n    print(f"  - {task}")\n\n# CNN Architecture\nprint("\\n=== CONVOLUTIONAL NEURAL NETWORKS (CNN) ===")\ncnn_layers = [\n    "Convolution Layer - Extract features",\n    "Pooling Layer - Reduce dimensions",\n    "Fully Connected Layer - Classification"\n]\nfor layer in cnn_layers:\n    print(f"  - {layer}")\n\n# Popular Models\nprint("\\n=== POPULAR MODELS ===")\nmodels = ["ResNet", "VGG", "YOLO", "EfficientNet", "Vision Transformer (ViT)"]\nfor model in models:\n    print(f"  - {model}")\n\n# Libraries\nprint("\\n=== COMPUTER VISION LIBRARIES ===")\nlibs = ["OpenCV", "Pillow", "scikit-image", "Detectron2"]\nfor lib in libs:\n    print(f"  - {lib}")`
  },
  {
    id: "openai-api",
    language: "ai",
    title: "OpenAI API",
    summary: "Learn how to use GPT models via OpenAI's API for text generation and more.",
    tags: ["ai", "openai", "gpt", "api", "llm"],
    starterCode: `# OpenAI API - Using GPT Models\n\nprint("=== OPENAI API ===")\nprint("Access powerful language models via REST API")\n\n# Available Models\nprint("\\n=== AVAILABLE MODELS ===")\nmodels = [\n    "GPT-4 - Most capable model",\n    "GPT-4 Turbo - Faster, cheaper",\n    "GPT-3.5 Turbo - Fast, affordable",\n    "DALL-E - Image generation",\n    "Whisper - Speech to text",\n    "Embedding Models - Text embeddings"\n]\nfor model in models:\n    print(f"  - {model}")\n\n# Basic API Usage\nprint("\\n=== BASIC API USAGE ===")\nprint("""\nimport openai\n\n# Set API key\nopenai.api_key = \"your-api-key\"\n\n# Chat Completion")\nprint("response = openai.ChatCompletion.create(")\nprint("    model=\"gpt-4\",")\nprint("    messages=[{\"role\": \"user\", \"content\": \"Hello!\"}]")\nprint(")")\nprint("print(response.choices[0].message.content)")\n\n# Use Cases\nprint("\\n=== USE CASES ===")\nuse_cases = [\n    "Chatbots and virtual assistants",\n    "Content generation",\n    "Code completion",\n    "Summarization",\n    "Translation"\n]\nfor case in use_cases:\n    print(f"  - {case}")`
  },
  {
    id: "langchain",
    language: "ai",
    title: "LangChain",
    summary: "Build powerful LLM applications using LangChain's framework and components.",
    tags: ["ai", "langchain", "llm", "apps"],
    starterCode: `# LangChain - Building LLM Apps\n\nprint("=== LANGCHAIN ===")\nprint("Framework for developing applications with large language models")\n\n# Core Components\nprint("\\n=== CORE COMPONENTS ===")\ncomponents = [\n    "LLM Wrappers - Connect to various LLMs",\n    "Prompt Templates - Dynamic prompt construction",\n    "Chains - Sequence of operations",\n    "Agents - Dynamic action selection",\n    "Memory - Conversation history",\n    "Indexes - Document retrieval"\n]\nfor comp in components:\n    print(f"  - {comp}")\n\n# Building with LangChain\nprint("\\n=== BASIC LANGCHAIN WORKFLOW ===")\nworkflow = [\n    "1. Install: pip install langchain",\n    "2. Import required modules",\n    "3. Create LLM instance",\n    "4. Build prompt template",\n    "5. Create and run chain"\n]\nfor step in workflow:\n    print(f"  {step}")\n\n# Simple Example\nprint("\\n=== SIMPLE EXAMPLE ===")\nprint("""\nfrom langchain import LLMChain, PromptTemplate\nfrom langchain.llms import OpenAI\n\nllm = OpenAI(temperature=0.9)\nprompt = PromptTemplate(\n    input_variables=[\"topic\"],\n    template=\"Explain {topic} in simple terms\"\n)\nchain = LLMChain(llm=llm, prompt=prompt)\nprint(chain.run(\"machine learning\"))\n""")\n\n# Use Cases\nprint("\\n=== USE CASES ===")\nuse_cases = ["Question answering", "Chatbots", "Document analysis", "Code generation"]\nfor case in use_cases:\n    print(f"  - {case}")`
  },
  {
    id: "rag",
    language: "ai",
    title: "RAG Architecture",
    summary: "Learn Retrieval-Augmented Generation for building knowledge-aware AI systems.",
    tags: ["ai", "rag", "retrieval", "llm", "architecture"],
    starterCode: `# RAG - Retrieval-Augmented Generation\n\nprint("=== RAG ARCHITECTURE ===")\nprint("Combines retrieval (search) with generative AI for accurate responses")\n\n# Why RAG?\nprint("\\n=== WHY RAG? ===")\nreasons = [\n    "Reduces hallucinations",\n    "Access to up-to-date information",\n    "Source citation for answers",\n    "Works with private data"\n]\nfor reason in reasons:\n    print(f"  - {reason}")\n\n# How RAG Works\nprint("\\n=== HOW RAG WORKS ===")\nsteps = [\n    "1. User query -> Convert to embedding",\n    "2. Search vector database for relevant docs",\n    "3. Retrieve top-k relevant documents",\n    "4. Combine context + prompt",\n    "5. Send to LLM for generation",\n    "6. Return generated response with sources"\n]\nfor step in steps:\n    print(f"  {step}")\n\n# RAG Stack\nprint("\\n=== RAG TECH STACK ===")\nstack = {\n    "Retrieval": "LangChain, LlamaIndex, Haystack",\n    "Vector DB": "Pinecone, Weaviate, Chroma, FAISS",\n    "Embeddings": "OpenAI, Cohere, Hugging Face"\n}\nfor k, v in stack.items():\n    print(f"  {k}: {v}")\n\n# Use Cases\nprint("\\n=== USE CASES ===")\nuse_cases = ["Enterprise knowledge base", "Customer support bots", "Research assistants"]\nfor case in use_cases:\n    print(f"  - {case}")`
  },
  {
    id: "ai-ethics",
    language: "ai",
    title: "AI Ethics",
    summary: "Understand responsible AI development and ethical considerations in AI.",
    tags: ["ai", "ethics", "responsible AI", "fairness"],
    starterCode: `# AI Ethics - Responsible AI Development\n\nprint("=== AI ETHICS ===")\nprint("Principles and practices for building fair, transparent, and safe AI")\n\n# Key Principles\nprint("\\n=== KEY ETHICAL PRINCIPLES ===")\nprinciples = [\n    "Fairness - No discrimination or bias",\n    "Transparency - Understandable decisions",\n    "Accountability - Responsible for outcomes",\n    "Privacy - Protect user data",\n    "Safety - Prevent harm",\n    "Human Oversight - Human in the loop"\n]\nfor principle in principles:\n    print(f"  - {principle}")\n\n# Common Biases\nprint("\\n=== COMMON AI BIASES ===")\nbiases = [\n    "Training data bias",\n    "Confirmation bias",\n    "Selection bias",\n    "Measurement bias"\n]\nfor bias in biases:\n    print(f"  - {bias}")\n\n# Mitigation Strategies\nprint("\\n=== BIAS MITIGATION ===")\nstrategies = [\n    "Diverse training data",\n    "Regular bias audits",\n    "Inclusive teams",\n    "Explainable AI (XAI)"\n]\nfor strategy in strategies:\n    print(f"  - {strategy}")\n\n# Ethical Frameworks\nprint("\\n=== ETHICAL FRAMEWORKS ===")\nframeworks = ["EU AI Act", "NIST AI Risk Management Framework", "OECD AI Principles"]\nfor fw in frameworks:\n    print(f"  - {fw}")`
  },
  {
    id: "deploying-ai",
    language: "ai",
    title: "Deploying AI Models",
    summary: "Learn ML Ops, model serving, and best practices for production AI systems.",
    tags: ["ai", "mlops", "deployment", "production"],
    starterCode: `# Deploying AI Models - ML Ops\n\nprint("=== AI MODEL DEPLOYMENT ===")\nprint("Moving ML models from development to production")\n\n# ML Ops Lifecycle\nprint("\\n=== ML OPS LIFECYCLE ===")\nlifecycle = [\n    "1. Development - Model training & evaluation",\n    "2. Staging - Integration testing",\n    "3. Production - Live serving",\n    "4. Monitoring - Performance tracking",\n    "5. Iteration - Model updates"\n]\nfor step in lifecycle:\n    print(f"  {step}")\n\n# Deployment Methods\nprint("\\n=== DEPLOYMENT METHODS ===")\nmethods = [\n    "REST API - HTTP endpoints",\n    "Serverless Functions - AWS Lambda, Vercel",\n    "Containerization - Docker, Kubernetes",\n    "Edge Deployment - On-device inference",\n    "Batch Inference - Scheduled predictions"\n]\nfor method in methods:\n    print(f"  - {method}")\n\n# Model Serving Frameworks\nprint("\\n=== MODEL SERVING ===")\nframeworks = ["TensorFlow Serving", "TorchServe", "FastAPI", "Ray Serve", "Seldon"]\nfor fw in frameworks:\n    print(f"  - {fw}")\n\n# Best Practices\nprint("\\n=== BEST PRACTICES ===")\npractices = [\n    "Version control models and data",\n    "Implement CI/CD for ML",\n    "Monitor model performance",\n    "Set up alerting for drift",\n    "A/B testing for improvements"\n]\nfor practice in practices:\n    print(f"  - {practice}")`
  }
];
