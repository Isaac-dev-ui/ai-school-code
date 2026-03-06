"use client";

import { useState, useEffect } from "react";

const EXAM_QUESTIONS = {
  python: [
    { q: "What keyword defines a function in Python?", options: ["function", "def", "func", "define"], answer: "def" },
    { q: "Which data type stores multiple items?", options: ["array", "list", "collection", "group"], answer: "list" },
    { q: "What is print(type(3.14))?", options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'decimal'>"], answer: "<class 'float'>" },
    { q: "How to create a dictionary?", options: ["{}", "[]", "()", "<>"], answer: "{}" },
    { q: "Floor division operator?", options: ["/", "//", "%", "**"], answer: "//" },
    { q: "Method to add to end of list?", options: ["add()", "append()", "insert()", "push()"], answer: "append()" },
    { q: "Create a tuple?", options: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "<1, 2, 3>"], answer: "(1, 2, 3)" },
    { q: "Check key in dictionary?", options: ["key in dict", "dict.contains()", "dict.has()", "exists()"], answer: "key in dict" },
    { q: "What is 'self' in class?", options: ["Class", "Instance", "Parent", "Global"], answer: "Instance" },
    { q: "Output of bool([])?", options: ["True", "False", "Error", "None"], answer: "False" },
    { q: "Read file in Python?", options: ["file.open()", "open(file)", "with open()", "File(file)"], answer: "with open()" },
    { q: "lambda creates?", options: ["Class", "Function", "Variable", "Module"], answer: "Function" },
    { q: "Module for regex?", options: ["re", "regex", "pattern", "exp"], answer: "re" },
    { q: "Handle exceptions?", options: ["try/catch", "try/except", "catch/throw", "handle/error"], answer: "try/except" },
    { q: "Generator uses?", options: ["return", "yield", "generate", "make"], answer: "yield" },
    { q: "Create set?", options: ["[]", "{}", "()", "set()"], answer: "set()" },
    { q: "Import module?", options: ["import", "include", "require", "using"], answer: "import" },
    { q: "Get user input?", options: ["input()", "scan()", "read()", "get()"], answer: "input()" },
    { q: "Check type of variable?", options: ["type()", "typeof()", "getType()", "class()"], answer: "type()" },
    { q: "Make string uppercase?", options: ["uppercase()", "upper()", "toUpper()", "uppercase()"], answer: "upper()" },
    { q: "Get length of list?", options: ["len()", "length()", "size()", "count()"], answer: "len()" },
    { q: "Remove item from list?", options: ["remove()", "delete()", "pop()", "discard()"], answer: "remove()" },
    { q: "Join strings?", options: ["join()", "concat()", "merge()", "combine()"], answer: "join()" },
    { q: "Round number?", options: ["round()", "floor()", "ceil()", "abs()"], answer: "round()" },
    { q: "Create class?", options: ["class MyClass", "new class MyClass", "create class", "MyClass extends"], answer: "class MyClass" },
    { q: "Inheritance syntax?", options: ["class Child(Parent)", "class Child extends Parent", "class Child: Parent", "Child extends Parent"], answer: "class Child(Parent)" },
    { q: "pip install package?", options: ["pip install", "npm install", "gem install", "apt install"], answer: "pip install" },
    { q: "Virtual environment?", options: ["venv", "virtualenv", "env", "both a and b"], answer: "both a and b" },
    { q: "List comprehension syntax?", options: ["[x for x in list]", "(x for x in list)", "{x for x in list}", "<x for x in list>"], answer: "[x for x in list]" },
    { q: "What is *args?", options: ["Keyword args", "Variable positional", "Optional", "Default"], answer: "Variable positional" },
    { q: "What is **kwargs?", options: ["Multiple kwargs", "Variable keyword", "Dictionary", "both b and c"], answer: "both b and c" },
    { q: "Decorator syntax?", options: ["@decorator", "decorator()", "@", "*decorator"], answer: "@decorator" },
    { q: "Super() used for?", options: ["Call parent method", "Create instance", "Import module", "Define class"], answer: "Call parent method" },
    { q: "__init__ method?", options: ["Constructor", "Destructor", "Main method", "Private method"], answer: "Constructor" },
    { q: "Global variable?", options: ["Outside function", "Inside function", "Class variable", "Constant"], answer: "Outside function" },
    { q: "Break loop?", options: ["exit", "break", "stop", "end"], answer: "break" },
    { q: "Continue loop?", options: ["skip", "continue", "next", "pass"], answer: "continue" },
    { q: "Pass statement?", options: ["Do nothing", "Error", "Import", "Exit"], answer: "Do nothing" },
    { q: "Is Python OOP?", options: ["No", "Yes", "Only functional", "Script only"], answer: "Yes" },
    { q: "Multiple inheritance?", options: ["One parent", "Multiple parents", "No inheritance", "Interface"], answer: "Multiple parents" },
    { q: "Method overriding?", options: ["Same name", "Change behavior", "Both", "None"], answer: "Both" },
    { q: "Abstract class?", options: ["Can instantiate", "Cannot instantiate", "Interface", "Module"], answer: "Cannot instantiate" },
    { q: "Static method?", options: ["Instance method", "Class method", "No instance needed", "Both b and c"], answer: "Both b and c" },
    { q: "Class variable?", options: ["Instance variable", "Shared variable", "Local variable", "Global variable"], answer: "Shared variable" },
    { q: "Instance variable?", options: ["Class variable", "Object variable", "Global variable", "Local variable"], answer: "Object variable" },
    { q: "Python 3 print?", options: ["print x", "print(x)", "echo x", "write(x)"], answer: "print(x)" },
    { q: "Range function?", options: ["List", "Sequence", "Generator", "All"], answer: "Sequence" },
    { q: "Enumerate?", options: ["Index-value pairs", "Sort", "Filter", "Map"], answer: "Index-value pairs" },
    { q: "Zip function?", options: ["Combine iterables", "Compress", "Filter", "Reduce"], answer: "Combine iterables" },
    { q: "Filter function?", options: ["Transform", "Select based on condition", "Sort", "Reduce"], answer: "Select based on condition" },
    { q: "Map function?", options: ["Transform each item", "Filter", "Sort", "Reduce"], answer: "Transform each item" },
    { q: "Reduce function?", options: ["Single value", "Multiple values", "Filter", "Map"], answer: "Single value" },
    { q: "Sorted vs sort?", options: ["Same", "Sorted new list, sort in-place", "Sort new list", "Sorted in-place"], answer: "Sorted new list, sort in-place" },
    { q: "Reverse list?", options: ["reverse()", "reversed()", "Both", "flip()"], answer: "Both" },
    { q: "Copy list?", options: ["list.copy()", "list[:]", "Both", "new list()"], answer: "Both" },
    { q: "Deep copy?", options: ["copy.copy()", "copy.deepcopy()", "Both", "clone()"], answer: "copy.deepcopy()" },
    { q: "String format f?", options: ["format()", "f-string", "Both", "template"], answer: "f-string" },
    { q: "Strip whitespace?", options: ["trim()", "strip()", "clean()", "remove()"], answer: "strip()" },
    { q: "Split string?", options: ["split()", "explode()", "divide()", "separate()"], answer: "split()" },
    { q: "Replace string?", options: ["replace()", "substitute()", "change()", "swap()"], answer: "replace()" },
    { q: "Find index?", options: ["index()", "find()", "position()", "Both a and b"], answer: "Both a and b" },
    { q: "Startswith?", options: ["Check prefix", "Check suffix", "Find", "Replace"], answer: "Check prefix" },
    { q: "Endswith?", options: ["Check prefix", "Check suffix", "Find", "Replace"], answer: "Check suffix" },
    { q: "Is digit?", options: ["isdigit()", "isnumber()", "isnumeric()", "digit()"], answer: "isdigit()" },
    { q: "Is alpha?", options: ["isalpha()", "isletter()", "isalphabetic()", "letter()"], answer: "isalpha()" },
    { q: "Capitalize?", options: ["capitalize()", "upper()", "title()", "caps()"], answer: "capitalize()" },
    { q: "Title case?", options: ["title()", "capitalize()", "upper()", "proper()"], answer: "title()" },
    { q: "Swap case?", options: ["swapcase()", "inverse()", "reverse()", "flip()"], answer: "swapcase()" },
    { q: "Count occurrences?", options: ["count()", "occurrences()", "times()", "findall()"], answer: "count()" },
    { q: "Format string?", options: ["format()", "f-string", "% formatting", "All"], answer: "All" },
    { q: "Docstring?", options: ["Comment", "Documentation", "Type hint", "Decorator"], answer: "Documentation" },
    { q: "Docstring syntax?", options: ["triple quotes", "#", "//", "<!-- -->"], answer: "triple quotes" },
    { q: "Dataclass?", options: ["@dataclass", "@data", "@record", "@model"], answer: "@dataclass" },
    { q: "Property decorator?", options: ["@property", "@getter", "@setter", "All"], answer: "All" },
    { q: "Class method?", options: ["@classmethod", "@static", "@property", "@method"], answer: "@classmethod" },
    { q: "Static method?", options: ["@staticmethod", "@static", "@classmethod", "@property"], answer: "@staticmethod" },
    { q: "Metaclass?", options: ["Class of class", "Abstract class", "Parent class", "Base class"], answer: "Class of class" },
    { q: "Coroutine?", options: ["Thread", "Async function", "Generator", "Both b and c"], answer: "Both b and c" },
    { q: "Async def?", options: ["Regular function", "Coroutine function", "Generator", "Thread"], answer: "Coroutine function" },
    { q: "Await?", options: ["Wait for coroutine", "Sync call", "Error handling", "Exception"], answer: "Wait for coroutine" },
    { q: "asyncio?", options: ["Thread library", "Async IO library", "Networking", "Database"], answer: "Async IO library" },
    { q: "aiohttp?", options: ["Database", "Async HTTP", "Web server", "ORM"], answer: "Async HTTP" },
    { q: "Thread vs Process?", options: ["Same", "Thread shared memory, process separate", "Process faster", "Thread for CPU"], answer: "Thread shared memory, process separate" },
    { q: "Multiprocessing?", options: ["Multiple threads", "Multiple processes", "Async IO", "Green threads"], answer: "Multiple processes" },
    { q: "Threading?", options: ["Multiple processes", "Multiple threads", "Async IO", "Coroutines"], answer: "Multiple threads" },
    { q: "Queue?", options: ["Stack", "FIFO", "LIFO", "Array"], answer: "FIFO" },
    { q: "Stack?", options: ["Queue", "FIFO", "LIFO", "Array"], answer: "LIFO" },
    { q: "Heap?", options: ["FIFO", "LIFO", "Priority", "Stack"], answer: "Priority" },
    { q: "Tree?", options: ["Linear", "Hierarchical", "Graph", "Hash"], answer: "Hierarchical" },
    { q: "Graph?", options: ["Tree", "Nodes and edges", "Linear", "Hash"], answer: "Nodes and edges" },
    { q: "Linked list?", options: ["Array", "Nodes with pointers", "Hash", "Tree"], answer: "Nodes with pointers" },
    { q: "Hash table?", options: ["Array", "Key-value pairs", "Tree", "Graph"], answer: "Key-value pairs" },
    { q: "Big O notation?", options: ["Best case", "Worst case", "Time complexity", "Space"], answer: "Time complexity" },
    { q: "O(1)?", options: ["Linear", "Constant", "Logarithmic", "Quadratic"], answer: "Constant" },
    { q: "O(n)?", options: ["Constant", "Linear", "Logarithmic", "Quadratic"], answer: "Linear" },
    { q: "O(log n)?", options: ["Linear", "Constant", "Logarithmic", "Quadratic"], answer: "Logarithmic" },
    { q: "O(n^2)?", options: ["Linear", "Constant", "Logarithmic", "Quadratic"], answer: "Quadratic" },
    { q: "Recursion?", options: ["Loop", "Function calling itself", "Iteration", "Exception"], answer: "Function calling itself" },
    { q: "Base case?", options: ["First case", "Stopping condition", "Default case", "Error case"], answer: "Stopping condition" },
    { q: "Memoization?", options: ["Memory optimization", "Cache results", "Both", "Error handling"], answer: "Both" },
    { q: "Binary search?", options: ["Sequential", "Divide and conquer", "Hash-based", "Tree-based"], answer: "Divide and conquer" },
    { q: "Merge sort?", options: ["In-place", "Divide and conquer", "Comparison-based", "Both b and c"], answer: "Both b and c" },
    { q: "Quick sort?", options: ["Stable", "In-place", "Divide and conquer", "All"], answer: "All" },
    { q: "Bubble sort?", options: ["Efficient", "Simple", "In-place", "Both b and c"], answer: "Both b and c" },
    { q: "Insertion sort?", options: ["O(n^2)", "Adaptive", "In-place", "All"], answer: "All" },
    { q: "Selection sort?", options: ["Stable", "In-place", "Comparison-based", "All"], answer: "All" },
    { q: "Binary tree?", options: ["Max 2 children", "Max 3 children", "No limit", "One child"], answer: "Max 2 children" },
    { q: "BST?", options: ["Binary Search Tree", "Balanced Tree", "Sorted Tree", "All"], answer: "All" },
    { q: "AVL tree?", options: ["Binary tree", "Self-balancing", "Rotations", "All"], answer: "All" },
    { q: "Red-Black tree?", options: ["Binary tree", "Self-balancing", "Color property", "All"], answer: "All" },
    { q: "Heap property?", options: ["Min or Max", "Complete binary tree", "Parent > children", "All"], answer: "All" },
    { q: "Hash collision?", options: ["Same key", "Same hash", "Different keys same hash", "Error"], answer: "Different keys same hash" },
    { q: "Chaining?", options: ["Open addressing", "Linked list", "Both", "None"], answer: "Both" },
    { q: "Linear probing?", options: ["Open addressing", "Next empty slot", "Hash again", "Chain"], answer: "Next empty slot" }
  ],
  javascript: [
    { q: "Declare constant?", options: ["var", "let", "const", "define"], answer: "const" },
    { q: "Add to array end?", options: ["add()", "push()", "append()", "insert()"], answer: "push()" },
    { q: "Single line comment?", options: ["<!-- -->", "//", "#", "**"], answer: "//" },
    { q: "typeof []?", options: ["array", "object", "list", "undefined"], answer: "object" },
    { q: "JSON string to object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], answer: "JSON.parse()" },
    { q: "=== does?", options: ["Assign", "Compare value", "Compare type", "Check exists"], answer: "Compare type" },
    { q: "Create function?", options: ["function myFunc()", "def myFunc()", "func myFunc()", "create myFunc()"], answer: "function myFunc()" },
    { q: "Get element by ID?", options: ["getElement(#id)", "getElementById()", "queryId()", "find()"], answer: "getElementById()" },
    { q: "Add event listener?", options: ["addEvent()", "onEvent()", "addEventListener()", "onClick()"], answer: "addEventListener()" },
    { q: "Promise handles?", options: ["Sync", "Async", "HTML", "CSS"], answer: "Async" },
    { q: "Declare class?", options: ["class = MyClass", "class MyClass", "new class", "MyClass extends"], answer: "class MyClass" },
    { q: "Spread operator?", options: ["...", "***", ">>>", ":::"], answer: "..." },
    { q: "Remove last array item?", options: ["remove()", "pop()", "shift()", "delete()"], answer: "pop()" },
    { q: "async keyword?", options: ["Sync code", "Returns Promise", "Creates thread", "Enables cache"], answer: "Returns Promise" },
    { q: "localStorage?", options: ["storage.save()", "localStorage.setItem()", "window.store()", "browser.save()"], answer: "localStorage.setItem()" },
    { q: "Remove first item?", options: ["pop()", "shift()", "remove()", "delete()"], answer: "shift()" },
    { q: "Filter array?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "filter()" },
    { q: "Map array?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "map()" },
    { q: "Arrow function?", options: ["=>", "->", "->>", "::"], answer: "=>" },
    { q: "Template literal?", options: ["''", "\"\"", "` `", "//"], answer: "` `" },
    { q: "Destructuring?", options: ["const {a,b} = obj", "const [a,b] = arr", "Both", "Neither"], answer: "Both" },
    { q: "Fetch API?", options: ["request()", "fetch()", "http()", "ajax()"], answer: "fetch()" },
    { q: "async/await?", options: ["Synchronous", "Clean async", "Parallel", "Blocking"], answer: "Clean async" },
    { q: "console.log()?", options: ["Print to page", "Print to console", "Log file", "Alert"], answer: "Print to console" },
    { q: "null type?", options: ["undefined", "object", "null", "void"], answer: "object" },
    { q: "NaN check?", options: ["isNaN()", "Number.isNaN()", "Both", "None"], answer: "Both" },
    { q: "Create Set?", options: ["new Set()", "Set.new()", "Set.create()", "makeSet()"], answer: "new Set()" },
    { q: "Create Map?", options: ["new Map()", "Map.new()", "Map.create()", "makeMap()"], answer: "new Map()" },
    { q: "Try/catch/finally?", options: ["Optional", "Required", "Error handling", "both a and c"], answer: "both a and c" },
    { q: "Regular expression?", options: ["/pattern/", "RegExp()", "Both", "Neither"], answer: "Both" }
  ],
  html: [
    { q: "HTML stands for?", options: ["Hyper Text Markup", "High Tech Modern", "Home Tool Markup", "Hyper Transfer"], answer: "Hyper Text Markup" },
    { q: "Largest heading?", options: ["<heading>", "<h6>", "<h1>", "<head>"], answer: "<h1>" },
    { q: "Hyperlink tag?", options: ["<link>", "<a>", "<href>", "<url>"], answer: "<a>" },
    { q: "Image source attribute?", options: ["src", "href", "link", "source"], answer: "src" },
    { q: "Root element?", options: ["<body>", "<html>", "<head>", "<root>"], answer: "<html>" },
    { q: "Unordered list?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: "<ul>" },
    { q: "Email input type?", options: ["validate", "type='email'", "check='email'", "pattern"], answer: "type='email'" },
    { q: "Table row?", options: ["<td>", "<tr>", "<th>", "<table>"], answer: "<tr>" },
    { q: "<br> does?", options: ["Break", "Bold", "Bullet", "Bridge"], answer: "Break" },
    { q: "Semantic header?", options: ["<header>", "<div>", "<head>", "<section>"], answer: "<header>" },
    { q: "Checkbox?", options: ["<input check>", "<checkbox>", "<input type='checkbox'>", "<check>"], answer: "<input type='checkbox'>" },
    { q: "Image alt attribute?", options: ["title", "alt", "src", "desc"], answer: "alt" },
    { q: "Dropdown?", options: ["<list>", "<dropdown>", "<select>", "<option>"], answer: "<select>" },
    { q: "Inline element?", options: ["<div>", "<p>", "<span>", "<section>"], answer: "<span>" },
    { q: "<iframe> does?", options: ["Video", "Embed content", "Frame", "Image"], answer: "Embed content" },
    { q: "Ordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<ol>" },
    { q: "Table cell?", options: ["<tr>", "<td>", "<th>", "<table>"], answer: "<td>" },
    { q: "Table header?", options: ["<tr>", "<td>", "<th>", "<thead>"], answer: "<th>" },
    { q: "Form method POST?", options: ["getData", "postData", "method='POST'", "action='POST'"], answer: "method='POST'" },
    { q: "Input placeholder?", options: ["placeholder", "value", "text", "hint"], answer: "placeholder" },
    { q: "Required field?", options: ["required", "mandatory", "necessary", "must"], answer: "required" },
    { q: "External CSS?", options: ["<style>", "<css>", "<link rel='stylesheet'>", "<stylesheet>"], answer: "<link rel='stylesheet'>" },
    { q: "JavaScript tag?", options: ["<script>", "<js>", "<javascript>", "<code>"], answer: "<script>" },
    { q: "Meta charset?", options: ["<meta encoding>", "<meta charset='UTF-8'>", "<charset>", "<encoding>"], answer: "<meta charset='UTF-8'>" },
    { q: "Viewport meta?", options: ["<meta view>", "<meta name='viewport'>", "<viewport>", "<meta screen>"], answer: "<meta name='viewport'>" },
    { q: "Comment syntax?", options: ["<!-- -->", "//", "#", "/**/"], answer: "<!-- -->" },
    { q: "Horizontal rule?", options: ["<hr>", "<line>", "<break>", "<rule>"], answer: "<hr>" },
    { q: "Bold text?", options: ["<b>", "<strong>", "Both", "<bold>"], answer: "Both" },
    { q: "Italic text?", options: ["<i>", "<em>", "Both", "<italic>"], answer: "Both" },
    { q: "Line break?", options: ["<lb>", "<br>", "<break>", "<newline>"], answer: "<br>" }
  ],
  css: [
    { q: "CSS stands for?", options: ["Computer Style", "Cascading Style", "Creative Style", "Colorful Style"], answer: "Cascading Style" },
    { q: "Change text color?", options: ["text-color", "font-color", "color", "foreground"], answer: "color" },
    { q: "Select id 'demo'?", options: [".demo", "#demo", "demo", "*demo"], answer: "#demo" },
    { q: "Space inside element?", options: ["margin", "padding", "spacing", "border"], answer: "padding" },
    { q: "Flex container?", options: ["display:block", "display:inline", "display:flex", "display:grid"], answer: "display:flex" },
    { q: "Responsive?", options: ["@responsive", "@media", "@screen", "@breakpoint"], answer: "@media" },
    { q: "Center text?", options: ["text-align:middle", "text-align:center", "align:center", "center:text"], answer: "text-align:center" },
    { q: "rem unit?", options: ["Relative to parent", "Relative to root", "Pixel", "Point"], answer: "Relative to root" },
    { q: "Flex gap?", options: ["space", "gap", "margin-between", "padding"], answer: "gap" },
    { q: "Default <div> display?", options: ["inline", "block", "flex", "none"], answer: "block" },
    { q: "Fixed position?", options: ["position:absolute", "position:fixed", "position:sticky", "position:relative"], answer: "position:fixed" },
    { q: "Hover pseudo-class?", options: [":hover", ":active", ":focus", ":visited"], answer: ":hover" },
    { q: "Transition property?", options: ["animation", "transition", "transform", "movement"], answer: "transition" },
    { q: "CSS variable?", options: ["$variable", "#variable", "var()", "--variable"], answer: "var()" },
    { q: "Shadow effect?", options: ["shadow", "box-shadow", "text-shadow", "Both b and c"], answer: "Both b and c" },
    { q: "Grid container?", options: ["display:block", "display:flex", "display:grid", "display:inline"], answer: "display:grid" },
    { q: "Background color?", options: ["bg-color", "background", "color", "fill"], answer: "background" },
    { q: "Font size?", options: ["font-size", "text-size", "size", "font"], answer: "font-size" },
    { q: "Bold text?", options: ["font-weight:bold", "text-weight:bold", "bold", "weight:bold"], answer: "font-weight:bold" },
    { q: "Opacity?", options: ["opacity", "visibility", "alpha", "transparency"], answer: "opacity" },
    { q: "Border radius?", options: ["border-radius", "border-round", "radius", "corner-radius"], answer: "border-radius" },
    { q: "Z-index?", options: ["layer", "z-index", "stack", "position"], answer: "z-index" },
    { q: "Absolute position?", options: ["position:fixed", "position:relative", "position:absolute", "position:static"], answer: "position:absolute" },
    { q: "Background image?", options: ["bg-image", "background-image", "img", "picture"], answer: "background-image" },
    { q: "Text align?", options: ["text-align", "align", "position:text", "justify"], answer: "text-align" },
    { q: "Cursor pointer?", options: ["cursor:pointer", "mouse:pointer", "click:cursor", "hand:pointer"], answer: "cursor:pointer" },
    { q: "Display none?", options: ["display:none", "visibility:hidden", "Both", "opacity:0"], answer: "display:none" },
    { q: "Important flag?", options: ["!important", "!override", "!force", "!priority"], answer: "!important" },
    { q: "Child selector?", options: [">", "+", "~", " "], answer: ">" },
    { q: "First child?", options: [":first", ":first-child", ":child:first", "first"], answer: ":first-child" }
  ],
  react: [
    { q: "What is React?", options: ["Database", "JS library", "CSS framework", "Server"], answer: "JS library" },
    { q: "Create component?", options: ["component()", "React.component()", "function/class", "new Component()"], answer: "function/class" },
    { q: "State hook?", options: ["useEffect", "useState", "useContext", "useReducer"], answer: "useState" },
    { q: "What is JSX?", options: ["JS XML", "Java Syntax", "JSON", "JavaScript Extra"], answer: "JS XML" },
    { q: "Pass data?", options: ["state", "props", "context", "hooks"], answer: "props" },
    { q: "useEffect default?", options: ["Once", "Every render", "Never", "Mount only"], answer: "Every render" },
    { q: "Conditional rendering?", options: ["Hide", "Show on condition", "Loop", "Style"], answer: "Show on condition" },
    { q: "Render list?", options: ["for loop", "while loop", "map()", "forEach()"], answer: "map()" },
    { q: "Form input?", options: ["Controlled", "Uncontrolled", "Both", "Neither"], answer: "Controlled" },
    { q: "Context for?", options: ["Styling", "Global state", "Routing", "Animation"], answer: "Global state" },
    { q: "Prevent re-render?", options: ["useMemo", "React.memo", "useCallback", "All"], answer: "All" },
    { q: "Redux?", options: ["Database", "State management", "Router", "HTTP client"], answer: "State management" },
    { q: "SPA?", options: ["Simple Page", "Single Page App", "Static Page", "Secure Page"], answer: "Single Page App" },
    { q: "Handle errors?", options: ["try/catch", "Error Boundaries", "onError", "catch()"], answer: "Error Boundaries" },
    { q: "Keys for?", options: ["Styling", "Unique ID", "Animation", "Security"], answer: "Unique ID" },
    { q: "useEffect cleanup?", options: ["return function", "useEffect return", "Both", "Neither"], answer: "return function" },
    { q: "useState returns?", options: ["value only", "[value, setter]", "setter only", "object"], answer: "[value, setter]" },
    { q: "Children prop?", options: ["this.children", "props.children", "children", "Both b and c"], answer: "Both b and c" },
    { q: "Fragment?", options: ["<div>", "<>", "Both", "<React.Fragment>"], answer: "Both" },
    { q: "PropTypes?", options: ["Required", "Type checking", "Default", "Validation"], answer: "Type checking" },
    { q: "defaultProps?", options: ["Required props", "Default values", "Type checking", "Validation"], answer: "Default values" },
    { q: "PureComponent?", options: ["Component", "Memoized Component", "Both", "Neither"], answer: "Memoized Component" },
    { q: "ComponentDidMount?", options: ["useEffect(()=>{}, [])", "useEffect(()=>{})", "componentDidMount", "useMount"], answer: "useEffect(()=>{}, [])" },
    { q: "ComponentDidUpdate?", options: ["useEffect(()=>{})", "useEffect(()=>{}, [dep])", "componentDidUpdate", "useUpdate"], answer: "useEffect(()=>{}, [dep])" },
    { q: "Custom hook?", options: ["useSomething", "createHook", "Both", "new Hook"], answer: "Both" },
    { q: "useRef for?", options: ["State", "DOM, mutable", "Context", "Effects"], answer: "DOM, mutable" },
    { q: "useCallback?", options: ["Memoize value", "Memoize function", "Cache", "State"], answer: "Memoize function" },
    { q: "useMemo?", options: ["Memoize value", "Memoize function", "Cache", "State"], answer: "Memoize value" },
    { q: "Context Provider?", options: ["<Context.Provider>", "<Provider>", "<Context>", "Both a and b"], answer: "Both a and b" },
    { q: "Redux store?", options: ["createStore", "new Store", "Store.create()", "makeStore()"], answer: "createStore" }
  ],
  nodejs: [
    { q: "Node.js?", options: ["Browser", "JS runtime", "Database", "Framework"], answer: "JS runtime" },
    { q: "Import module?", options: ["import", "require", "include", "using"], answer: "require" },
    { q: "Express?", options: ["Database", "Web framework", "CSS lib", "Template"], answer: "Web framework" },
    { q: "Handle routes?", options: ["app.route()", "app.get/post", "router.handle()", "All"], answer: "All" },
    { q: "Middleware?", options: ["Database", "Req/Res function", "Template", "CSS"], answer: "Req/Res function" },
    { q: "npm?", options: ["Node Package Manager", "New Program", "Node Program", "None"], answer: "Node Package Manager" },
    { q: "HTTP request?", options: ["http.request", "fetch", "axios", "All"], answer: "All" },
    { q: "REST?", options: ["Data format", "Architectural style", "Database", "Language"], answer: "Architectural style" },
    { q: "File upload?", options: ["multer", "formidable", "busboy", "All"], answer: "All" },
    { q: "JWT?", options: ["Java Web", "JSON Web Token", "JS Web Tool", "None"], answer: "JSON Web Token" },
    { q: "Streams?", options: ["Video", "Data processing", "Database", "Routing"], answer: "Data processing" },
    { q: "MongoDB?", options: ["SQL", "NoSQL", "File system", "Cache"], answer: "NoSQL" },
    { q: "Authentication?", options: ["Sessions", "JWT", "Cookies", "All"], answer: "All" },
    { q: "WebSocket?", options: ["HTTP", "Real-time", "Database", "Template"], answer: "Real-time" },
    { q: "package.json?", options: ["Styling", "Project metadata", "Database", "Server"], answer: "Project metadata" },
    { q: "module.exports?", options: ["Import all", "Export module", "Both", "Neither"], answer: "Export module" },
    { q: "Process env?", options: ["System env vars", "App config", "Both", "Neither"], answer: "System env vars" },
    { q: "Event loop?", options: ["Loop events", "Handle async", "Both", "None"], answer: "Handle async" },
    { q: "Callback?", options: ["Function called back", "Async function", "Error handler", "Both a and b"], answer: "Both a and b" },
    { q: "Promise?", options: ["Async result", "Future value", "Both", "None"], answer: "Both" },
    { q: "Async/await?", options: ["Sync code", "Clean async", "Parallel", "Blocking"], answer: "Clean async" },
    { q: "Error first callback?", options: ["Error first arg", "Error last arg", "No error", "Try/catch"], answer: "Error first arg" },
    { q: "EventEmitter?", options: ["DOM events", "Node events", "Both", "None"], answer: "Node events" },
    { q: "Buffer?", options: ["String", "Binary data", "Number", "Object"], answer: "Binary data" },
    { q: "Path module?", options: ["File path", "URL", "Both", "Network"], answer: "Both" },
    { q: "FS module?", options: ["File system", "Network", "Crypto", "Events"], answer: "File system" },
    { q: "Read file async?", options: ["fs.readFile()", "fs.readFileSync()", "Both", "None"], answer: "Both" },
    { q: "Create server?", options: ["http.createServer()", "express()", "app.listen()", "All"], answer: "All" },
    { q: "Router?", options: ["Express Router", "app.route()", "Both", "None"], answer: "Both" },
    { q: "CORS?", options: ["Cross Origin", "Security", "Both", "None"], answer: "Both" }
  ],
  typescript: [
    { q: "TypeScript?", options: ["Different lang", "Typed JS", "Java alt", "Database"], answer: "Typed JS" },
    { q: "String type?", options: [":string", ":str", ":text", ":String"], answer: ":string" },
    { q: "Interface?", options: ["Database", "Object shape", "Class", "Function"], answer: "Object shape" },
    { q: "Generics?", options: ["Java feature", "Reusable types", "Database", "None"], answer: "Reusable types" },
    { q: "Optional property?", options: ["?", "!", "~", "*"], answer: "?" },
    { q: "Enum?", options: ["Function", "Named constants", "Class", "Type"], answer: "Named constants" },
    { q: "any type?", options: ["Strong typing", "No type check", "String", "Number"], answer: "No type check" },
    { q: "readonly?", options: ["readonly", "const", "static", "final"], answer: "readonly" },
    { q: "Union type?", options: ["Single type", "Multiple types", "Object", "Array"], answer: "Multiple types" },
    { q: "Type guards?", options: ["Security", "Type narrowing", "Validation", "None"], answer: "Type narrowing" },
    { q: "Import type?", options: ["import type", "import {type}", "Both", "None"], answer: "Both" },
    { q: "never type?", options: ["Empty", "Function never returns", "Any", "Null"], answer: "Function never returns" },
    { q: "Decorators?", options: ["Comments", "Meta-programming", "Testing", "Styling"], answer: "Meta-programming" },
    { q: "keyof operator?", options: ["DB key", "Object keys", "Array key", "File key"], answer: "Object keys" },
    { q: "Pick/Omit?", options: ["Pick", "Omit", "Both", "Neither"], answer: "Both" },
    { q: "Number type?", options: [":number", ":num", ":int", ":Integer"], answer: ":number" },
    { q: "Boolean type?", options: [":bool", ":boolean", ":true", ":false"], answer: ":boolean" },
    { q: "Array type?", options: [":array", ":Array", ":number[]", "Both b and c"], answer: "Both b and c" },
    { q: "Object type?", options: [":object", ":Object", ":{}", "All"], answer: "All" },
    { q: "Function type?", options: [":function", ":Function", ":() => void", "All"], answer: "All" },
    { q: "Optional param?", options: ["param?", "param:optional", "param!", "None"], answer: "param?" },
    { q: "Default param?", options: ["param=value", "param: =value", "default param", "param?"], answer: "param=value" },
    { q: "Return type?", options: [":return", ":returns", ": void", ":never"], answer: ": void" },
    { q: "Type assertion?", options: ["<Type>", "as Type", "Both", "None"], answer: "Both" },
    { q: "Interface vs Type?", options: ["Same", "Interface for objects", "Type for unions", "All"], answer: "All" },
    { q: "Class implements?", options: ["Interface", "Type", "Both", "Neither"], answer: "Interface" },
    { q: "Abstract class?", options: ["Can't instantiate", "Can instantiate", "Interface", "Type"], answer: "Can't instantiate" },
    { q: "Namespace?", options: ["Module", "Code organization", "Both", "None"], answer: "Both" },
    { q: "Triple-slash?", options: ["Comment", "Reference", "Type import", "All"], answer: "All" },
    { q: "Declare global?", options: ["declare global", "global {}", "ambient", "All"], answer: "All" }
  ],
  bootstrap: [
    { q: "Bootstrap?", options: ["JS library", "CSS framework", "HTML framework", "Web framework"], answer: "CSS framework" },
    { q: "Container class?", options: [".container", ".wrapper", ".box", ".page"], answer: ".container" },
    { q: "Grid system?", options: ["12 columns", "10 columns", "16 columns", "Flex"], answer: "12 columns" },
    { q: "Medium breakpoint?", options: ["md", "lg", "sm", "xl"], answer: "md" },
    { q: "Primary button?", options: [".btn-primary", ".button-primary", ".btn-blue", ".button-blue"], answer: ".btn-primary" },
    { q: "Card class?", options: [".card", ".panel", ".box", ".container"], answer: ".card" },
    { q: "Navbar class?", options: [".navbar", ".nav", ".navigation", ".header"], answer: ".navbar" },
    { q: "Modal?", options: [".modal", ".popup", ".dialog", ".overlay"], answer: ".modal" },
    { q: "Alert class?", options: [".alert", ".message", ".notification", ".warning"], answer: ".alert" },
    { q: "Table striped?", options: [".table-striped", ".table-lines", ".table-zebra", ".table-dark"], answer: ".table-striped" },
    { q: "Form control?", options: [".form-control", ".form-input", ".input", ".field"], answer: ".form-control" },
    { q: "Badge?", options: [".badge", ".label", ".tag", ".marker"], answer: ".badge" },
    { q: "Jumbotron?", options: [".jumbotron", ".hero", ".banner", ".header"], answer: ".jumbotron" },
    { q: "Progress bar?", options: [".progress", ".bar", ".loading", ".status"], answer: ".progress" },
    { q: "Spinners?", options: [".spinner", ".loader", ".spinner-border", ".loading"], answer: ".spinner-border" },
    { q: "Flex utilities?", options: [".d-flex", ".flex", ".display-flex", ".fbox"], answer: ".d-flex" },
    { q: "Text center?", options: [".text-center", ".center", ".text-middle", ".t-center"], answer: ".text-center" },
    { q: "Margin utilities?", options: [".m-*", ".margin-*", ".space-*", ".pad-*"], answer: ".m-*" },
    { q: "Padding utilities?", options: [".p-*", ".padding-*", ".space-*", ".margin-*"], answer: ".p-*" },
    { q: "Hidden on mobile?", options: [".d-none", ".d-md-block", ".hide-mobile", ".mobile-hide"], answer: ".d-none" },
    { q: "Col class?", options: [".col", ".column", ".col-*", ".grid-col"], answer: ".col-*" },
    { q: "Row class?", options: [".row", ".grid", ".flex-row", ".line"], answer: ".row" },
    { q: "Input group?", options: [".input-group", ".input-field", ".form-group", ".input-wrap"], answer: ".input-group" },
    { q: "Dropdown menu?", options: [".dropdown", ".dropdown-menu", ".drop-menu", ".menu"], answer: ".dropdown-menu" },
    { q: "Nav tabs?", options: [".nav-tabs", ".tabs", ".nav-pills", ".both a and c"], answer: "both a and c" },
    { q: "Breadcrumb?", options: [".breadcrumbs", ".breadcrumb", ".trail", ".path"], answer: ".breadcrumb" },
    { q: "Pagination?", options: [".page", ".pager", ".pagination", ".pages"], answer: ".pagination" },
    { q: "Close button?", options: [".close", ".btn-close", ".close-btn", ".x-btn"], answer: ".btn-close" },
    { q: "Carousel?", options: [".slider", ".carousel", ".slide", ".gallery"], answer: ".carousel" }
  ],
  git: [
    { q: "Git?", options: ["Language", "Version control", "Database", "Framework"], answer: "Version control" },
    { q: "Initialize repo?", options: ["git start", "git init", "git new", "git create"], answer: "git init" },
    { q: "Stage files?", options: ["git add", "git stage", "git commit", "git push"], answer: "git add" },
    { q: "Commit changes?", options: ["git commit -m", "git save -m", "git push -m", "git add -m"], answer: "git commit -m" },
    { q: "Check status?", options: ["git info", "git status", "git check", "git show"], answer: "git status" },
    { q: "View log?", options: ["git history", "git log", "git show", "git info"], answer: "git log" },
    { q: "Create branch?", options: ["git branch", "git new", "git create", "git make"], answer: "git branch" },
    { q: "Switch branch?", options: ["git switch", "git checkout", "git change", "Both a and b"], answer: "Both a and b" },
    { q: "Merge branch?", options: ["git merge", "git join", "git combine", "git add"], answer: "git merge" },
    { q: "Pull changes?", options: ["git fetch", "git pull", "git update", "git sync"], answer: "git pull" },
    { q: "Push changes?", options: ["git send", "git push", "git upload", "git commit"], answer: "git push" },
    { q: "Stash changes?", options: ["git save", "git stash", "git hold", "git keep"], answer: "git stash" },
    { q: "Undo commit?", options: ["git undo", "git revert", "git back", "git cancel"], answer: "git revert" },
    { q: "Remote origin?", options: ["git remote add origin", "git set origin", "git config origin", "origin set"], answer: "git remote add origin" },
    { q: "Clone repo?", options: ["git copy", "git clone", "git get", "git download"], answer: "git clone" },
    { q: "Diff command?", options: ["git compare", "git diff", "git changes", "git show"], answer: "git diff" },
    { q: "Remove staged?", options: ["git remove", "git reset", "git unstage", "git clear"], answer: "git reset" },
    { q: "Force push?", options: ["git push -f", "git push --force", "git push -f", "All"], answer: "All" },
    { q: "Delete branch?", options: ["git delete branch", "git branch -d", "git remove branch", "git branch --delete"], answer: "git branch -d" },
    { q: "Tag release?", options: ["git tag", "git label", "git mark", "git version"], answer: "git tag" },
    { q: "HEAD?", options: ["First commit", "Current branch", "Last commit", "None"], answer: "Current branch" },
    { q: "Checkout files?", options: ["git checkout -- file", "git restore", "git revert --", "All"], answer: "All" },
    { q: "Squash commits?", options: ["git merge --squash", "git rebase -i", "git squash", "Both a and b"], answer: "Both a and b" },
    { q: "Cherry pick?", options: ["Copy commit", "Move commit", "Delete commit", "Merge commit"], answer: "Copy commit" },
    { q: "Fetch vs pull?", options: ["Same", "Fetch downloads, pull merges", "Pull downloads, fetch merges", "Different branches"], answer: "Fetch downloads, pull merges" },
    { q: "Merge conflict?", options: ["Same file changed", "Cannot auto-merge", "Both", "None"], answer: "Both" },
    { q: "Rebase?", options: ["Copy commits", "Move commits", "Delete commits", "Merge commits"], answer: "Move commits" },
    { q: "Reflog?", options: ["Remote log", "Reference log", "Reset log", "Commit log"], answer: "Reference log" },
    { q: "Submodule?", options: ["Nested repo", "External repo", "Both", "None"], answer: "Both" },
    { q: "Gitignore?", options: ["Untrack files", "Delete files", "Ignore commits", "Hide files"], answer: "Untrack files" }
  ],
  docker: [
    { q: "Docker?", options: ["Language", "Container platform", "Database", "Framework"], answer: "Container platform" },
    { q: "Dockerfile?", options: ["Image config", "Container config", "Both", "None"], answer: "Image config" },
    { q: "Build image?", options: ["docker build", "docker create", "docker make", "docker new"], answer: "docker build" },
    { q: "Run container?", options: ["docker run", "docker start", "docker create", "docker new"], answer: "docker run" },
    { q: "List containers?", options: ["docker list", "docker ps", "docker show", "docker containers"], answer: "docker ps" },
    { q: "Pull image?", options: ["docker pull", "docker get", "docker fetch", "docker download"], answer: "docker pull" },
    { q: "Stop container?", options: ["docker stop", "docker end", "docker kill", "docker halt"], answer: "docker stop" },
    { q: "Remove container?", options: ["docker delete", "docker remove", "docker rm", "docker erase"], answer: "docker rm" },
    { q: "Dockerfile FROM?", options: ["Base image", "Parent image", "OS image", "All"], answer: "Base image" },
    { q: "Dockerfile RUN?", options: ["Build command", "Runtime command", "Config command", "None"], answer: "Build command" },
    { q: "Dockerfile COPY?", options: ["Copy files", "Mount files", "Link files", "Move files"], answer: "Copy files" },
    { q: "Dockerfile CMD?", options: ["Default command", "Build command", "Setup command", "None"], answer: "Default command" },
    { q: "Port mapping?", options: ["-p", "-port", "--mapping", "-m"], answer: "-p" },
    { q: "Volume mount?", options: ["-v", "-volume", "Both", "None"], answer: "Both" },
    { q: "Docker Compose?", options: ["Multi-container", "Single container", "Image builder", "Registry"], answer: "Multi-container" },
    { q: "Docker network?", options: ["-net", "--network", "Both", "None"], answer: "Both" },
    { q: "ENV in Dockerfile?", options: ["Environment var", "System var", "Both", "None"], answer: "Environment var" },
    { q: "WORKDIR?", options: ["Working directory", "Root directory", "Home directory", "Temp"], answer: "Working directory" },
    { q: "EXPOSE?", options: ["Port declaration", "Port mapping", "Port binding", "Port link"], answer: "Port declaration" },
    { q: "Dockerfile best practice?", options: ["Layer caching", "Multi-stage", "Both", "None"], answer: "Both" },
    { q: "docker-compose.yml?", options: ["Single container", "Multi-container", "Image file", "Build file"], answer: "Multi-container" },
    { q: "Volumes?", options: ["Temp storage", "Persistent storage", "Network storage", "Cache"], answer: "Persistent storage" },
    { q: "Dockerfile ENTRYPOINT?", options: ["Default args", "Executable", "Both", "None"], answer: "Executable" },
    { q: "Multi-stage build?", options: ["Multiple OS", "Build in stages", "Both", "None"], answer: "Build in stages" },
    { q: "Layer caching?", options: ["Cache builds", "Cache images", "Layer reuse", "All"], answer: "All" },
    { q: "CMD vs ENTRYPOINT?", options: ["Same", "CMD overridable, ENTRYPOINT not", "Both executable", "None"], answer: "CMD overridable, ENTRYPOINT not" },
    { q: "Container vs Image?", options: ["Same", "Image is template, container is running", "Container is template", "None"], answer: "Image is template, container is running" },
    { q: "Docker registry?", options: ["Docker Hub", "Local", "Cloud", "All"], answer: "All" },
    { q: ".dockerignore?", options: ["Ignore builds", "Ignore images", "Ignore files from build", "None"], answer: "Ignore files from build" },
    { q: "Restart policy?", options: ["Always", "On-failure", "Unless-stopped", "All"], answer: "All" }
  ]
};

const TOPICS = [
  { id: "python", name: "🐍 Python", count: EXAM_QUESTIONS.python?.length || 30, color: "bg-yellow-500" },
  { id: "javascript", name: "📜 JavaScript", count: EXAM_QUESTIONS.javascript?.length || 30, color: "bg-yellow-400" },
  { id: "html", name: "🌐 HTML", count: EXAM_QUESTIONS.html?.length || 30, color: "bg-orange-500" },
  { id: "css", name: "🎨 CSS", count: EXAM_QUESTIONS.css?.length || 30, color: "bg-blue-500" },
  { id: "react", name: "⚛️ React", count: EXAM_QUESTIONS.react?.length || 30, color: "bg-cyan-500" },
  { id: "nodejs", name: "🖥️ Node.js", count: EXAM_QUESTIONS.nodejs?.length || 30, color: "bg-green-500" },
  { id: "typescript", name: "📘 TypeScript", count: EXAM_QUESTIONS.typescript?.length || 30, color: "bg-blue-600" },
  { id: "bootstrap", name: "📦 Bootstrap", count: EXAM_QUESTIONS.bootstrap?.length || 30, color: "bg-purple-500" },
  { id: "git", name: "📚 Git", count: EXAM_QUESTIONS.git?.length || 30, color: "bg-orange-600" },
  { id: "docker", name: "🐳 Docker", count: EXAM_QUESTIONS.docker?.length || 30, color: "bg-blue-400" }
];

export default function ExamPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [examHistory, setExamHistory] = useState<Record<string, { correct: number; total: number }>>({});

  useEffect(() => {
    const saved = localStorage.getItem("exam-history");
    if (saved) setExamHistory(JSON.parse(saved));
  }, []);

  const saveHistory = (topic: string, correct: number, total: number) => {
    const newHistory = { ...examHistory, [topic]: { correct, total } };
    setExamHistory(newHistory);
    localStorage.setItem("exam-history", JSON.stringify(newHistory));
  };

  const startExam = (topic: string) => {
    setSelectedTopic(topic);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
    const questions = getQuestionsForTopic(selectedTopic!);
    if (answer === questions[currentQuestion].answer) setScore(score + 1);
  };

  const nextQuestion = () => {
    const questions = getQuestionsForTopic(selectedTopic!);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      saveHistory(selectedTopic!, score, questions.length);
      setShowResult(true);
    }
  };

  const finishExam = () => {
    const questions = getQuestionsForTopic(selectedTopic!);
    saveHistory(selectedTopic!, score, questions.length);
    setShowResult(true);
  };

  const resetExam = () => {
    setSelectedTopic(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  if (!selectedTopic) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">📝 Exam Center</h1>
          <p className="text-neutral-400">Test your knowledge across all topics!</p>
        </div>

        <div className="bg-neutral-900 rounded-xl p-6 mb-8 border border-neutral-800">
          <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {TOPICS.map(topic => {
              const stats = examHistory[topic.id];
              return (
                <div key={topic.id} className="text-center p-3 bg-neutral-800 rounded-lg">
                  <div className="text-xl mb-1">{stats ? Math.round((stats.correct / stats.total) * 100) + '%' : '--'}</div>
                  <div className="text-xs text-neutral-400">{stats ? `${stats.correct}/${stats.total}` : 'Not taken'}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {TOPICS.map(topic => (
            <button key={topic.id} onClick={() => startExam(topic.id)} className={`${topic.color} p-5 rounded-xl text-white hover:opacity-90 text-left`}>
              <div className="text-xl font-bold">{topic.name}</div>
              <div className="text-sm opacity-90">{topic.count} questions</div>
            </button>
          ))}
        </div>

        <button onClick={() => startExam("all")} className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 p-5 rounded-xl text-white">
          <div className="text-xl font-bold">🎯 All Topics Exam</div>
          <div className="text-sm opacity-90">{Object.values(EXAM_QUESTIONS).flat().length} questions</div>
        </button>
      </div>
    );
  }

  const getQuestionsForTopic = (topic: string) => {
  if (topic === "all") {
    return [
      ...EXAM_QUESTIONS.python,
      ...EXAM_QUESTIONS.javascript,
      ...EXAM_QUESTIONS.html,
      ...EXAM_QUESTIONS.css,
      ...EXAM_QUESTIONS.react,
      ...EXAM_QUESTIONS.nodejs,
      ...EXAM_QUESTIONS.typescript,
      ...EXAM_QUESTIONS.bootstrap,
      ...EXAM_QUESTIONS.git,
      ...EXAM_QUESTIONS.docker
    ];
  }
  return EXAM_QUESTIONS[topic as keyof typeof EXAM_QUESTIONS] || [];
};

const questions = getQuestionsForTopic(selectedTopic!);
const currentQ = questions[currentQuestion];
  const topicName = TOPICS.find(t => t.id === selectedTopic)?.name || "All Topics";

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-800 text-center">
          <div className="text-6xl mb-4">{percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : '📚'}</div>
          <h2 className="text-3xl font-bold mb-2">Exam Complete!</h2>
          <div className="text-5xl font-bold mb-4" style={{ color: percentage >= 60 ? '#22c55e' : '#ef4444' }}>{percentage}%</div>
          <p className="text-xl mb-2">You scored {score} out of {questions.length}</p>
          <button onClick={() => startExam(selectedTopic)} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg mr-4">Try Again</button>
          <button onClick={resetExam} className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg">Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button onClick={resetExam} className="text-neutral-400 hover:text-white">← Back</button>
        <div className="text-center">
          <h2 className="font-semibold">{topicName}</h2>
          <p className="text-sm text-neutral-400">Question {currentQuestion + 1} of {questions.length}</p>
        </div>
        <div className="text-green-500 font-medium">Score: {score}</div>
      </div>

      <div className="h-2 bg-neutral-800 rounded-full mb-8">
        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
      </div>

      <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 mb-6">
        <h3 className="text-xl font-medium mb-6">{currentQ.q}</h3>
        <div className="space-y-3">
          {currentQ.options.map((option, index) => {
            let btnClass = "w-full text-left p-4 rounded-lg border transition-all ";
            if (isAnswered) {
              if (option === currentQ.answer) btnClass += "border-green-500 bg-green-500/20 text-green-400";
              else if (option === selectedAnswer) btnClass += "border-red-500 bg-red-500/20 text-red-400";
              else btnClass += "border-neutral-700 text-neutral-500";
            } else {
              btnClass += selectedAnswer === option ? "border-blue-500 bg-blue-500/20" : "border-neutral-700 hover:border-neutral-600";
            }
            return <button key={index} onClick={() => handleAnswer(option)} disabled={isAnswered} className={btnClass}><span className="text-neutral-500 mr-3">{String.fromCharCode(97 + index)})</span>{option}</button>;
          })}
        </div>
      </div>

      {isAnswered && (
        <div className="mb-6">
          <div className={`p-4 rounded-lg mb-4 ${selectedAnswer === currentQ.answer ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
            {selectedAnswer === currentQ.answer ? "✓ Correct!" : `✗ Answer: ${currentQ.answer}`}
          </div>
          <button onClick={nextQuestion} className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-medium">
            {currentQuestion < questions.length - 1 ? "Next Question →" : "Finish Exam"}
          </button>
        </div>
      )}
    </div>
  );
}
