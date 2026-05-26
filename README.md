# LearnPlaywrightBasics2X

A comprehensive learning repository for **JavaScript fundamentals** and **Playwright automation testing** concepts. This project is organized into chapters covering everything from basic JavaScript syntax to advanced automation testing patterns.

---

## Table of Contents

- [About This Repository](#about-this-repository)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [How to Use](#how-to-use)
- [Chapters Overview](#chapters-overview)
  - [Chapter 01: Basics](#chapter-01-basics)
  - [Chapter 02: JavaScript Concepts](#chapter-02-javascript-concepts)
  - [Chapter 03: Identifiers & Literals](#chapter-03-identifiers--literals)
  - [Chapter 04: JavaScript Concepts - Variables, Functions & Scope](#chapter-04-javascript-concepts---variables-functions--scope)
  - [Chapter 05: Literals](#chapter-05-literals)
  - [Chapter 06: Operators](#chapter-06-operators)
  - [Chapter 07: If-Else Statements](#chapter-07-if-else-statements)
  - [Chapter 08: Switch Statements](#chapter-08-switch-statements)
  - [Chapter 09: User Input](#chapter-09-user-input)
  - [Chapter 10: Loops](#chapter-10-loops)
  - [Chapter 11: Arrays](#chapter-11-arrays)
  - [JavaScript Basics Part 1: Literals & Identifiers](#javascript-basics-part-1-literals--identifiers)
  - [Test 2: JavaScript Coding Questions](#test-2-javascript-coding-questions)
  - [VS Code Tips](#vs-code-tips)
- [Running the Code](#running-the-code)
- [Contributing](#contributing)

---

## About This Repository

This repository serves as a structured learning resource for:
- JavaScript programming fundamentals
- Naming conventions and best practices
- VS Code editor shortcuts and productivity tips
- Identifier rules, keywords, and literals in JavaScript
- Foundation concepts for Playwright test automation

Each chapter contains practical examples with VS Code-specific tips, keyboard shortcuts, and hands-on exercises.

---

## Repository Structure

```
LearnPlaywrightBasics2X/
├── Chapter_01_Basics/                          # JavaScript Basics
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JSCommands.js
│   └── 04_HotCode.js
│
├── Chapter_02_Javascript_Concept/              # JavaScript Core Concepts
│   └── 05_JS_Basics.js
│
├── Chapter_03_Identifier_Literals/             # Identifiers, Keywords & Literals
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Literals_Part02.js
│   ├── 08_Comments.js
│   ├── Identifier_Rules.md
│   ├── JavaScript_Keywords.md
│   ├── JavaScript_Keywords_VS_Code.md
│   ├── JavaScript_Literals_VS_Code.md
│   └── VS_Code_KeyboardShortcuts.md
│
├── Chapter_04_JavaScript_Concepts/             # Variables, Functions & Scope
│   ├── 09_Var_Let_Const.js
│   ├── 10_functions.js
│   ├── 11_var_explained.js
│   ├── 12_let_people_love.js
│   ├── 13_const_explained.js
│   ├── 14_var_functionscope.js
│   ├── 15_let_scope.js
│   ├── 16_Hoisting.js
│   ├── 17_hoisting_fn.js
│   ├── 18_let_hoisting.js
│   ├── 19_let_hoisting_block.js
│   ├── 20_let_const.js
│   └── 21_Jr_QA.js
│
├── Chapter_05_Literal/                         # Literals in JavaScript
│   ├── 22_literal.js
│   ├── 23_null_undefined.js
│   ├── 24_null.js
│   ├── 25_Literal_All.js
│   ├── 26_Literal_Number_all.js
│   ├── 27_String.js
│   ├── 28_Template_Literal.js
│   └── 29_Backtick_single_double.js
│
├── Chapter_06_Operator/                        # Operators in JavaScript
│   ├── 30_Operator.js
│   ├── 31_Arithmetic_Operator.js
│   ├── 32_Modulus_Operator.js
│   ├── 33_Expo_Operator.js
│   ├── 34_IQ.js
│   ├── 35_Comparison_Operator.js
│   ├── 36_Comparison_Strict_loose.js
│   ├── 37_IQ_Loose_Strict.js
│   ├── 38_Confusing_Comparison.js
│   ├── 39_Logical_Operator.js
│   ├── 40_String_Con_Operator.js
│   ├── 41_Ternary_Operator.js
│   ├── 42_Type_Operator.js
│   ├── 43_Incre_Decre_Operator.js
│   ├── 44_Null_Operator.js
│   ├── 45_Post_Increment.js
│   ├── 46_IQ_INCREMENT_D.js
│   └── 47_Advance_ID_.js
│
├── Chapter_07_if_else/                         # If-Else Statements
│   ├── 48_if_else.js
│   ├── 49_if_elseif_else.js
│   ├── 50_Real_is_else.js
│   ├── 51_API_is_else.js
│   ├── 52_IQ_if_else.js
│   ├── 53_if_else_real.js
│   ├── 54_IQ.js
│   ├── 55_IE.js
│   ├── 56_IQ_even_odd.js
│   ├── 57_Grade_Calc.js
│   └── 58_leap_year.js
│
├── Chapter_08_Switch_Statement/                # Switch Statements
│   ├── 59_switch.js
│   ├── 60_No_Break.js
│   ├── 61_Default.js
│   ├── 62_Real_Time_Example.js
│   ├── 63_Switch_Group.js
│   ├── 64_IQ.js
│   ├── 65_IQ2.js
│   ├── 66_IQ3.js
│   └── 67_IQ4.js
│
├── Chapter_09_User_Input/                      # User Input Handling
│   ├── 68_userInput.js
│   ├── 69_Node_Readline.js
│   └── 70_Prompt_Sync.js
│
├── Chapter_10_Loop/                            # Loops in JavaScript
│   ├── 71_For_Loop.js
│   ├── 72_for_Loop.js
│   ├── 73_For_Loop2.js
│   ├── 74_IQ.js
│   ├── 75_for_of_in_each.js
│   ├── 76_while.js
│   ├── 77_do_while.js
│   ├── 78_dowhile.js
│   ├── 79_IQ.js
│   ├── 80_IQ.js
│   ├── 81_IQ.js
│   └── 82_IQ.js
│
├── Chapter_11_Array/                           # Arrays in JavaScript
│   ├── 83_Arrays.js
│   ├── 84_Arrays.js
│   ├── 85_Access_Arrays.js
│   ├── 86_Array_adding_remove.js
│   ├── 87_Array_Adding_remove2.js
│   ├── 88_Real_Example.js
│   ├── 89_Searching.js
│   ├── 90_Iterate.js
│   └── 91_Transform_Array.js
│
├── JavaScript_Basics_Part1_Literals_identifier/  # JS Basics Part 1
│   ├── Q1.js
│   ├── Q2.js
│   ├── Q3.js
│   ├── Q4.js
│   ├── Q5.js
│   ├── Q6.js
│   ├── Q7.js
│   ├── Q8.js
│   ├── Q9.js
│   ├── Q10.js
│   ├── Q11.js
│   ├── Q12.js
│   ├── Q13.js
│   ├── Q14.js
│   ├── Q15.js
│   └── README.md
│
├── Tasks_LiveClass_Code/                       # Live Class Tasks & Assignments
│   ├── 11May_Task01_diff_let_var_const.md
│   ├── 11May_Task02_hoisting.md
│   ├── 11May_Task03.md
│   ├── 11May_Task04.md
│   ├── 11May_Task05.js
│   ├── 13May_Task_hoisting_tdz_research.js
│   ├── 18May_Task01_MaxNum_Two_Ternary.js
│   ├── 18May_Task02_MaxNumber_Three_Ternary.js
│   ├── 18MAy_Task03_Incre_Decre.js
│   ├── 20May_Task01_Even_Odd.js
│   ├── 20May_Task02_Studeny_Grade_Calc.js
│   ├── 20May_Task03_LeapYear_Caluculation.js
│   ├── 20May_Task04_API_StatusCode.js
│   ├── 20May_Task05_Expected_Actual_Comparison.js
│   ├── 20May_Task06_Bug_Severity.js
│   ├── 20May_Task07_Build_Health_Checker.js
│   ├── 20May_Task08_Login_Locked_After_Failed.js
│   ├── 22May_Task01_Triangle_Classifier.js
│   └── 22May_Task02_fix_Buzz.js
│
├── .vscode/
│   └── extensions.json                         # Recommended VS Code extensions
│
├── Test2_Java_Script_Coding_Questions.js/      # JavaScript Coding Assessment
│   ├── Q1.js                                   # API Status Code Switch Case
│   ├── Q2.js                                   # Test Report Generator
│   ├── Q3.js                                   # API Call Retry Simulation
│   ├── Q5.js                                   # Dynamic Test Data Generator
│   └── Q6.js                                   # Bug Severity Classifier
│
├── classifyJsOperatorsScore.js                 # Score classifier utility
├── hello.js                                    # Quick start example
└── README.md                                   # This file
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [VS Code](https://code.visualstudio.com/) (recommended editor)
- Basic understanding of programming concepts

---

## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/msengar23/LearnPlaywrightBasics2X.git
   cd LearnPlaywrightBasics2X
   ```

2. **Open in VS Code:**
   ```bash
   code .
   ```

3. **Run JavaScript files:**
   ```bash
   node filename.js
   ```

4. **Use VS Code Debugger:**
   - Press `F5` to start debugging
   - Press `F9` to toggle breakpoints
   - Press `F10` to step over, `F11` to step into

---

## Chapters Overview

### Chapter 01: Basics

**Files:** `Chapter_01_Basics/`

Covers foundational JavaScript concepts:
- Variable declarations (`var`, `let`, `const`)
- Data types and type conversions
- Basic operators
- Console commands and debugging
- Essential JavaScript commands for daily use

**Key topics:**
- `01_Basics.js` - Core syntax fundamentals
- `02_JS.js` - JavaScript execution basics
- `03_JSCommands.js` - Useful JavaScript commands
- `04_HotCode.js` - Commonly used code patterns

---

### Chapter 02: JavaScript Concepts

**File:** `Chapter_02_Javascript_Concept/05_JS_Basics.js`

Deep dive into JavaScript programming concepts:
- Variable scoping (global vs function vs block)
- Hoisting behavior
- Type coercion and truthy/falsy values
- Comparison operators (`==` vs `===`)
- Template literals and string interpolation
- Arrow functions and function expressions
- Array and object destructuring
- Spread and rest operators

---

### Chapter 03: Identifiers & Literals

**Files:** `Chapter_03_Identifier_Literals/`

Comprehensive coverage of JavaScript identifiers, naming conventions, keywords, and literals with VS Code integration.

#### 3.1 Identifier Rules
- **Files:** `06_Identifier_Rules.js`, `Identifier_Rules.md`
- Valid identifier patterns
- Naming conventions (camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE)
- Reserved keywords restrictions
- Case-sensitivity rules
- Unicode support

#### 3.2 Naming Conventions
- **File:** `07_Identifier_Literals_Part02.js`
- camelCase for variables and functions
- PascalCase for classes and constructors
- snake_case for database fields and JSON keys
- SCREAMING_SNAKE_CASE for constants
- Hungarian notation (legacy style)

#### 3.3 Comments
- **File:** `08_Comments.js`
- Single-line comments (`//`)
- Multi-line comments (`/* */`)
- JSDoc documentation comments
- VS Code comment/uncomment shortcuts

#### 3.4 JavaScript Keywords
- **File:** `JavaScript_Keywords.md`
- Declaration keywords: `var`, `let`, `const`, `function`, `class`
- Control flow: `if`, `else`, `switch`, `case`, `try`, `catch`
- Loop keywords: `for`, `while`, `do`, `break`, `continue`
- Object/Class context: `this`, `super`, `new`, `extends`
- Type checking: `typeof`, `instanceof`, `delete`, `in`
- Literals: `true`, `false`, `null`, `undefined`
- Async: `async`, `await`
- Modules: `import`, `export`, `default`

#### 3.5 Keywords with VS Code
- **File:** `JavaScript_Keywords_VS_Code.md`
- All keywords with VS Code-specific tips
- Syntax highlighting explanations
- IntelliSense usage for each keyword
- Debugging tips with breakpoints
- Keyboard shortcuts for keyword navigation

#### 3.6 JavaScript Literals
- **File:** `JavaScript_Literals_VS_Code.md`
- String literals (single, double, template)
- Number literals (integer, float, binary, octal, hex, BigInt)
- Boolean literals (`true`, `false`)
- Null and undefined literals
- Array and object literals
- Regular expression literals
- Function expression literals
- Symbol literals
- Spread/rest literals
- Destructuring patterns

#### 3.7 VS Code Keyboard Shortcuts
- **File:** `VS_Code_KeyboardShortcuts.md`
- Complete Windows keyboard shortcuts reference
- General, editing, navigation, search shortcuts
- Multi-cursor, debugging, terminal shortcuts
- File and editor management shortcuts

---

### Chapter 04: JavaScript Concepts - Variables, Functions & Scope

**Files:** `Chapter_04_JavaScript_Concepts/`

Deep dive into JavaScript variables, functions, and scoping mechanisms:
- Variable declarations deep dive (`var`, `let`, `const`)
- Function declarations, expressions, and arrow functions
- Global scope, function scope, and block scope
- Hoisting behavior for variables and functions
- Temporal Dead Zone (TDZ) for `let` and `const`
- Practical examples and comparisons

**Key topics:**
- `09_Var_Let_Const.js` - Overview of variable declarations
- `10_functions.js` - Functions in JavaScript
- `11_var_explained.js` - Deep dive into `var`
- `12_let_people_love.js` - Understanding `let`
- `13_const_explained.js` - Understanding `const`
- `14_var_functionscope.js` - Function scope with `var`
- `15_let_scope.js` - Block scope with `let`
- `16_Hoisting.js` - Variable and function hoisting
- `17_hoisting_fn.js` - Function hoisting behavior
- `18_let_hoisting.js` - `let` hoisting and TDZ
- `19_let_hoisting_block.js` - Block scope hoisting with `let`
- `20_let_const.js` - `let` vs `const` behavior
- `21_Jr_QA.js` - Junior QA interview-style questions

---

### Chapter 05: Literals

**Files:** `Chapter_05_Literal/`

Covers all types of literals in JavaScript with practical examples:
- Number literals (integer, float, binary, octal, hex, BigInt)
- Special numeric values (`Infinity`, `-Infinity`, `NaN`)
- `null` vs `undefined` — differences, use-cases, and `typeof` behavior
- String literals (single quotes, double quotes)
- Template literals (backticks) with variable interpolation and multi-line strings
- Comparison of single quote vs double quote vs backtick
- Scientific notation and numeric separators
- Number parsing and base conversions

**Key topics:**
- `22_literal.js` - Introduction to literals
- `23_null_undefined.js` - `null` vs `undefined` explained with examples
- `24_null.js` - `null` literal basics and `typeof` behavior
- `25_Literal_All.js` - All number literal types (hex, octal, scientific notation)
- `26_Literal_Number_all.js` - Complete guide to all number types in JavaScript
- `27_String.js` - String literals with single and double quotes
- `28_Template_Literal.js` - Template literals with real-world Playwright examples
- `29_Backtick_single_double.js` - Comparison of `''`, `""`, and `` ` ` `` with use-cases

---

### Chapter 06: Operators

**Files:** `Chapter_06_Operator/`

Comprehensive coverage of JavaScript operators with practical examples:
- Assignment operators (`=`)
- Arithmetic operators (`+`, `-`, `*`, `/`)
- Modulus operator (`%`)
- Exponentiation operator (`**`)
- Comparison operators (`==`, `!=`, `===`, `!==`, `>`, `<`, `>=`, `<=`)
- Strict vs loose equality differences
- Logical operators (`&&`, `||`, `!`)
- String concatenation operator
- Ternary/conditional operator (`? :`)
- Type operators (`typeof`, `instanceof`)
- Increment/decrement operators (`++`, `--`)
- Nullish coalescing operator (`??`)

**Key topics:**
- `30_Operator.js` - Assignment operator basics
- `31_Arithmetic_Operator.js` - Arithmetic operations
- `32_Modulus_Operator.js` - Modulus/remainder operations
- `33_Expo_Operator.js` - Exponentiation operations
- `34_IQ.js` - Interview questions on operators
- `35_Comparison_Operator.js` - Comparison operations
- `36_Comparison_Strict_loose.js` - Strict (`===`) vs loose (`==`) equality
- `37_IQ_Loose_Strict.js` - Interview questions on equality comparisons
- `38_Confusing_Comparison.js` - Tricky comparison scenarios
- `39_Logical_Operator.js` - AND, OR, NOT logical operations
- `40_String_Con_Operator.js` - String concatenation
- `41_Ternary_Operator.js` - Ternary/conditional operator
- `42_Type_Operator.js` - `typeof` and type checking
- `43_Incre_Decre_Operator.js` - Increment and decrement operations
- `44_Null_Operator.js` - Nullish coalescing operator (`??`)
- `45_Post_Increment.js` - Post-increment (`a++`) behavior
- `46_IQ_INCREMENT_D.js` - Interview questions on increment/decrement
- `47_Advance_ID_.js` - Advanced increment/decrement expressions

---

### Chapter 07: If-Else Statements

**Files:** `Chapter_07_if_else/`

Complete coverage of conditional logic using `if`, `else if`, and `else` statements with real-world QA and API testing scenarios:
- Basic `if...else` syntax and flow
- `if...else if...else` ladders
- Nested conditions
- Real-world API status checks
- Even/odd number checks
- Grade calculator logic
- Leap year calculation
- Interview questions on conditionals

**Key topics:**
- `48_if_else.js` - Basic `if...else` syntax
- `49_if_elseif_else.js` - Multiple condition branches
- `50_Real_is_else.js` - Real-world conditional examples
- `51_API_is_else.js` - API response handling with conditionals
- `52_IQ_if_else.js` - Interview questions on `if...else`
- `53_if_else_real.js` - Practical conditional patterns
- `54_IQ.js` - More interview questions
- `55_IE.js` - Additional conditional exercises
- `56_IQ_even_odd.js` - Even/odd check using conditionals
- `57_Grade_Calc.js` - Student grade calculator
- `58_leap_year.js` - Leap year logic

---

### Chapter 08: Switch Statements

**Files:** `Chapter_08_Switch_Statement/`

Deep dive into `switch...case` control flow, fall-through behavior, grouping cases, and practical automation testing use-cases:
- Basic `switch` syntax and `case` matching
- `break` statement importance and fall-through behavior
- `default` case handling
- Grouping multiple cases
- Real-world examples: day of week, HTTP status codes
- Interview questions on `switch`

**Key topics:**
- `59_switch.js` - Basic `switch` statement
- `60_No_Break.js` - Fall-through behavior without `break`
- `61_Default.js` - Using the `default` case
- `62_Real_Time_Example.js` - Real-world `switch` examples
- `63_Switch_Group.js` - Grouping multiple cases
- `64_IQ.js` - Interview questions on `switch`
- `65_IQ2.js` - More `switch` interview questions
- `66_IQ3.js` - Advanced `switch` scenarios
- `67_IQ4.js` - Complex `switch` patterns

---

### Chapter 09: User Input

**Files:** `Chapter_09_User_Input/`

Learn how to accept user input in JavaScript using browser prompts, Node.js `readline`, and synchronous prompt modules:
- Browser `prompt()` for user input
- Node.js `readline` module for CLI input
- `prompt-sync` for synchronous input in Node.js
- Converting string input to numbers
- Building interactive CLI tools

**Key topics:**
- `68_userInput.js` - Browser-based `prompt()` input
- `69_Node_Readline.js` - Node.js `readline` module usage
- `70_Prompt_Sync.js` - Synchronous prompt with `prompt-sync`

---

### Chapter 10: Loops

**Files:** `Chapter_10_Loop/`

Master all JavaScript loop constructs for iterating over data, running repetitive tasks, and solving automation problems:
- `for` loop syntax and use-cases
- `for...of` and `for...in` loops
- `while` loop
- `do...while` loop
- Loop control with `break` and `continue`
- Nested loops
- Interview questions on loops

**Key topics:**
- `71_For_Loop.js` - Introduction to `for` loops
- `72_for_Loop.js` - `for` loop patterns
- `73_For_Loop2.js` - Advanced `for` loop examples
- `74_IQ.js` - Loop interview questions
- `75_for_of_in_each.js` - `for...of` vs `for...in`
- `76_while.js` - `while` loop basics
- `77_do_while.js` - `do...while` loop
- `78_dowhile.js` - More `do...while` examples
- `79_IQ.js` - Loop IQ questions
- `80_IQ.js` - More loop challenges
- `81_IQ.js` - Advanced loop problems
- `82_IQ.js` - Complex loop scenarios

---

### Chapter 11: Arrays

**Files:** `Chapter_11_Array/`

Comprehensive guide to JavaScript arrays — creation, access, modification, searching, iteration, and transformation:
- Array creation and initialization
- Accessing elements by index
- Adding and removing elements (`push`, `pop`, `shift`, `unshift`, `splice`)
- Searching methods (`indexOf`, `includes`, `find`)
- Iteration techniques (`forEach`, `for...of`)
- Transformation methods (`map`, `filter`, `reduce`)
- Real-world QA test data arrays

**Key topics:**
- `83_Arrays.js` - Array basics and initialization
- `84_Arrays.js` - Array properties and methods
- `85_Access_Arrays.js` - Accessing array elements
- `86_Array_adding_remove.js` - Adding and removing elements
- `87_Array_Adding_remove2.js` - More array modification techniques
- `88_Real_Example.js` - Real-world array examples
- `89_Searching.js` - Searching in arrays
- `90_Iterate.js` - Array iteration methods
- `91_Transform_Array.js` - Array transformation (`map`, `filter`, `reduce`)

---

### JavaScript Basics Part 1: Literals & Identifiers

**Files:** `JavaScript_Basics_Part1_Literals_identifier/`

A dedicated practice folder with 15 question-based exercises (`Q1.js` to `Q15.js`) focused on JavaScript literals and identifiers. Great for reinforcing naming conventions, valid/invalid identifiers, and literal types.

**Topics covered:**
- JavaScript Literals (string, number, boolean, object, array, etc.)
- Identifiers and Naming Conventions
- Valid vs Invalid Identifier Names
- Best Practices for Variable Naming

---

### Test 2: JavaScript Coding Questions

**Files:** `Test2_Java_Script_Coding_Questions.js/`

A practical JavaScript coding assessment focused on real-world automation testing scenarios:

- **`Q1.js`** — API HTTP Status Code Switch Case
  - Simulates HTTP response status code handling using `switch(true)`
  - Covers codes: 200, 201, 301, 400, 401, 403, 404, 500
  - Demonstrates API testing validation logic

- **`Q2.js`** — Test Report Generator
  - Accepts an array of test results (`pass`, `fail`, `skip`)
  - Calculates total tests, pass count, fail count, skip count, and pass rate percentage
  - Determines release verdict: `Ready for release` / `Review` / `Block release`
  - Demonstrates loop iteration, conditionals, and formatted console output

- **`Q3.js`** — API Call Retry Simulation
  - Simulates flaky API calls using `do...while` loop with retry logic
  - Configurable max attempts (5) with 40% random success probability
  - Demonstrates `Math.random()`, retry patterns, and loop control

- **`Q5.js`** — Dynamic Test Data Generator
  - Generates structured mock user data for testing
  - Cycles through predefined roles dynamically using modulo operator
  - Implements edge-case rule: every 3rd user marked `INACTIVE`
  - Demonstrates `var`/`let`/`const` scoping, `padStart()`, `padEnd()`, and formatted table output

- **`Q6.js`** — Bug Severity Classifier
  - Nested `if-else` logic to classify bug priority based on frequency and impact
  - Frequency levels: `always`, `often`, `rarely`
  - Impact levels: `blocker`, `major`, `minor`
  - Outputs severity (`P0`–`P4`) with actionable messages
  - Demonstrates nested conditionals and real-world defect triage logic

### Tasks - Live Class Code

**Files:** `Tasks_LiveClass_Code/`

Hands-on tasks and assignments from live classes:

**May 11 Tasks:**
- `11May_Task01_diff_let_var_const.md` - Differences between `let`, `var`, and `const`
- `11May_Task02_hoisting.md` - Hoisting concepts
- `11May_Task03.md` - Practice tasks
- `11May_Task04.md` - Practice tasks
- `11May_Task05.js` - Coding exercise

**May 13 Tasks:**
- `13May_Task_hoisting_tdz_research.js` - Hoisting and TDZ research

**May 18 Tasks:**
- `18May_Task01_MaxNum_Two_Ternary.js` - Find max of two numbers using ternary operator
- `18May_Task02_MaxNumber_Three_Ternary.js` - Find max of three numbers using ternary operator
- `18MAy_Task03_Incre_Decre.js` - Complex increment/decrement expression evaluation

**May 20 Tasks:**
- `20May_Task01_Even_Odd.js` - Check if a number is even or odd using modulus operator
- `20May_Task02_Studeny_Grade_Calc.js` - Student grade calculator based on marks (A/B/C/D/Fail)
- `20May_Task03_LeapYear_Caluculation.js` - Leap year calculation using conditional logic
- `20May_Task04_API_StatusCode.js` - API HTTP status code classification (2xx, 3xx, 4xx, 5xx)
- `20May_Task05_Expected_Actual_Comparison.js` - Test assertion simulation comparing expected vs actual results
- `20May_Task06_Bug_Severity.js` - Bug severity classifier based on impact score (Critical/High/Medium/Low)
- `20May_Task07_Build_Health_Checker.js` - Build health checker using switch cases (Green/Stable/Unstable/Broken)
- `20May_Task08_Login_Locked_After_Failed.js` - Login attempt tracker with account lockout logic

**May 22 Tasks:**
- `22May_Task01_Triangle_Classifier.js` - Classify a triangle based on side lengths (Equilateral/Isosceles/Scalene)
- `22May_Task02_fix_Buzz.js` - Fix the FizzBuzz logic exercise

---

## VS Code Tips

### Recommended Extensions
Install these extensions for the best experience:
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **JavaScript (ES6) code snippets** - Quick code generation
- **Path Intellisense** - Auto-complete file paths
- **GitLens** - Enhanced Git capabilities

### Essential Shortcuts for This Repo

| Shortcut | Action |
|:---|:---|
| `Ctrl + /` | Toggle line comment |
| `Shift + Alt + A` | Toggle block comment |
| `Ctrl + `` ` | Open integrated terminal |
| `F5` | Start debugging |
| `F9` | Toggle breakpoint |
| `Ctrl + Space` | Trigger IntelliSense |
| `Shift + Alt + F` | Format document |
| `F2` | Rename symbol |
| `F12` | Go to definition |
| `Ctrl + D` | Select next occurrence |
| `Ctrl + Shift + L` | Select all occurrences |
| `Alt + Up/Down` | Move line up/down |

---

## Running the Code

### Run a Single File
```bash
node Chapter_01_Basics/01_Basics.js
```

### Run with Debugging
1. Open the file in VS Code
2. Press `F9` on the line where you want to break
3. Press `F5` to start debugging
4. Use `F10` (step over) or `F11` (step into)

### Run All Chapter 03 Files
```bash
node Chapter_03_Identifier_Literals/06_Identifier_Rules.js
node Chapter_03_Identifier_Literals/07_Identifier_Literals_Part02.js
node Chapter_03_Identifier_Literals/08_Comments.js
```

### Run Chapter 04 Files
```bash
node Chapter_04_JavaScript_Concepts/09_Var_Let_Const.js
node Chapter_04_JavaScript_Concepts/10_functions.js
node Chapter_04_JavaScript_Concepts/11_var_explained.js
node Chapter_04_JavaScript_Concepts/12_let_people_love.js
node Chapter_04_JavaScript_Concepts/13_const_explained.js
node Chapter_04_JavaScript_Concepts/14_var_functionscope.js
node Chapter_04_JavaScript_Concepts/15_let_scope.js
node Chapter_04_JavaScript_Concepts/16_Hoisting.js
node Chapter_04_JavaScript_Concepts/17_hoisting_fn.js
node Chapter_04_JavaScript_Concepts/18_let_hoisting.js
node Chapter_04_JavaScript_Concepts/19_let_hoisting_block.js
node Chapter_04_JavaScript_Concepts/20_let_const.js
node Chapter_04_JavaScript_Concepts/21_Jr_QA.js
```

### Run Chapter 05 Files
```bash
node Chapter_05_Literal/22_literal.js
node Chapter_05_Literal/23_null_undefined.js
node Chapter_05_Literal/24_null.js
node Chapter_05_Literal/25_Literal_All.js
node Chapter_05_Literal/26_Literal_Number_all.js
node Chapter_05_Literal/27_String.js
node Chapter_05_Literal/28_Template_Literal.js
node Chapter_05_Literal/29_Backtick_single_double.js
```

### Run Chapter 06 Files
```bash
node Chapter_06_Operator/30_Operator.js
node Chapter_06_Operator/31_Arithmetic_Operator.js
node Chapter_06_Operator/32_Modulus_Operator.js
node Chapter_06_Operator/33_Expo_Operator.js
node Chapter_06_Operator/34_IQ.js
node Chapter_06_Operator/35_Comparison_Operator.js
node Chapter_06_Operator/36_Comparison_Strict_loose.js
node Chapter_06_Operator/37_IQ_Loose_Strict.js
node Chapter_06_Operator/38_Confusing_Comparison.js
node Chapter_06_Operator/39_Logical_Operator.js
node Chapter_06_Operator/40_String_Con_Operator.js
node Chapter_06_Operator/41_Ternary_Operator.js
node Chapter_06_Operator/42_Type_Operator.js
node Chapter_06_Operator/43_Incre_Decre_Operator.js
node Chapter_06_Operator/44_Null_Operator.js
node Chapter_06_Operator/45_Post_Increment.js
node Chapter_06_Operator/46_IQ_INCREMENT_D.js
node Chapter_06_Operator/47_Advance_ID_.js
```

### Run Chapter 07 Files
```bash
node Chapter_07_if_else/48_if_else.js
node Chapter_07_if_else/49_if_elseif_else.js
node Chapter_07_if_else/50_Real_is_else.js
node Chapter_07_if_else/51_API_is_else.js
node Chapter_07_if_else/52_IQ_if_else.js
node Chapter_07_if_else/53_if_else_real.js
node Chapter_07_if_else/54_IQ.js
node Chapter_07_if_else/55_IE.js
node Chapter_07_if_else/56_IQ_even_odd.js
node Chapter_07_if_else/57_Grade_Calc.js
node Chapter_07_if_else/58_leap_year.js
```

### Run Chapter 08 Files
```bash
node Chapter_08_Switch_Statement/59_switch.js
node Chapter_08_Switch_Statement/60_No_Break.js
node Chapter_08_Switch_Statement/61_Default.js
node Chapter_08_Switch_Statement/62_Real_Time_Example.js
node Chapter_08_Switch_Statement/63_Switch_Group.js
node Chapter_08_Switch_Statement/64_IQ.js
node Chapter_08_Switch_Statement/65_IQ2.js
node Chapter_08_Switch_Statement/66_IQ3.js
node Chapter_08_Switch_Statement/67_IQ4.js
```

### Run Chapter 09 Files
```bash
node Chapter_09_User_Input/68_userInput.js
node Chapter_09_User_Input/69_Node_Readline.js
node Chapter_09_User_Input/70_Prompt_Sync.js
```

### Run Chapter 10 Files
```bash
node Chapter_10_Loop/71_For_Loop.js
node Chapter_10_Loop/72_for_Loop.js
node Chapter_10_Loop/73_For_Loop2.js
node Chapter_10_Loop/74_IQ.js
node Chapter_10_Loop/75_for_of_in_each.js
node Chapter_10_Loop/76_while.js
node Chapter_10_Loop/77_do_while.js
node Chapter_10_Loop/78_dowhile.js
node Chapter_10_Loop/79_IQ.js
node Chapter_10_Loop/80_IQ.js
node Chapter_10_Loop/81_IQ.js
node Chapter_10_Loop/82_IQ.js
```

### Run Chapter 11 Files
```bash
node Chapter_11_Array/83_Arrays.js
node Chapter_11_Array/84_Arrays.js
node Chapter_11_Array/85_Access_Arrays.js
node Chapter_11_Array/86_Array_adding_remove.js
node Chapter_11_Array/87_Array_Adding_remove2.js
node Chapter_11_Array/88_Real_Example.js
node Chapter_11_Array/89_Searching.js
node Chapter_11_Array/90_Iterate.js
node Chapter_11_Array/91_Transform_Array.js
```

### Run JavaScript Basics Part 1 Files
```bash
node JavaScript_Basics_Part1_Literals_identifier/Q1.js
node JavaScript_Basics_Part1_Literals_identifier/Q2.js
node JavaScript_Basics_Part1_Literals_identifier/Q3.js
node JavaScript_Basics_Part1_Literals_identifier/Q4.js
node JavaScript_Basics_Part1_Literals_identifier/Q5.js
node JavaScript_Basics_Part1_Literals_identifier/Q6.js
node JavaScript_Basics_Part1_Literals_identifier/Q7.js
node JavaScript_Basics_Part1_Literals_identifier/Q8.js
node JavaScript_Basics_Part1_Literals_identifier/Q9.js
node JavaScript_Basics_Part1_Literals_identifier/Q10.js
node JavaScript_Basics_Part1_Literals_identifier/Q11.js
node JavaScript_Basics_Part1_Literals_identifier/Q12.js
node JavaScript_Basics_Part1_Literals_identifier/Q13.js
node JavaScript_Basics_Part1_Literals_identifier/Q14.js
node JavaScript_Basics_Part1_Literals_identifier/Q15.js
```

### Run Test 2 Files
```bash
node Test2_Java_Script_Coding_Questions.js/Q1.js
node Test2_Java_Script_Coding_Questions.js/Q2.js
node Test2_Java_Script_Coding_Questions.js/Q3.js
node Test2_Java_Script_Coding_Questions.js/Q5.js
node Test2_Java_Script_Coding_Questions.js/Q6.js
```

### Run Tasks Files
```bash
# 11 May Tasks
node Tasks_LiveClass_Code/11May_Task05.js

# 13 May Tasks
node Tasks_LiveClass_Code/13May_Task_hoisting_tdz_research.js

# 18 May Tasks
node Tasks_LiveClass_Code/18May_Task01_MaxNum_Two_Ternary.js
node Tasks_LiveClass_Code/18May_Task02_MaxNumber_Three_Ternary.js
node Tasks_LiveClass_Code/18MAy_Task03_Incre_Decre.js

# 20 May Tasks
node Tasks_LiveClass_Code/20May_Task01_Even_Odd.js
node Tasks_LiveClass_Code/20May_Task02_Studeny_Grade_Calc.js
node Tasks_LiveClass_Code/20May_Task03_LeapYear_Caluculation.js
node Tasks_LiveClass_Code/20May_Task04_API_StatusCode.js
node Tasks_LiveClass_Code/20May_Task05_Expected_Actual_Comparison.js
node Tasks_LiveClass_Code/20May_Task06_Bug_Severity.js
node Tasks_LiveClass_Code/20May_Task07_Build_Health_Checker.js
node Tasks_LiveClass_Code/20May_Task08_Login_Locked_After_Failed.js

# 22 May Tasks
node Tasks_LiveClass_Code/22May_Task01_Triangle_Classifier.js
node Tasks_LiveClass_Code/22May_Task02_fix_Buzz.js
```

---

## Topics Covered Summary

| Category | Topics |
|:---|:---|
| **Basics** | Variables, Data Types, Operators, Console |
| **Concepts** | Scope, Hoisting, Type Coercion, Comparisons |
| **Identifiers** | Rules, Conventions, Reserved Words |
| **Keywords** | 50+ JavaScript keywords with examples |
| **Literals** | String, Number, Boolean, Array, Object, Regex, null, undefined, BigInt, Template Literals |
| **Hoisting & TDZ** | var/let/const hoisting, Temporal Dead Zone, Function/Class hoisting |
| **Variables & Functions** | var/let/const, Function scope, Block scope, Hoisting, TDZ |
| **Operators** | Arithmetic, Comparison, Logical, Ternary, Type, String, Nullish Coalescing |
| **Conditionals** | if/else, else if, nested conditions, switch/case, fall-through |
| **User Input** | prompt, readline, prompt-sync |
| **Loops** | for, for...of, for...in, while, do...while, break, continue |
| **Arrays** | Creation, access, push/pop, splice, indexOf, find, map, filter, reduce |
| **Coding Assessment** | API Status Codes, Test Reporting, Retry Logic, Test Data Generation, Bug Severity Classification |
| **VS Code** | Shortcuts, Debugging, IntelliSense, Snippets |
| **Best Practices** | Naming conventions, Code formatting |

---

## Contributing

Feel free to contribute to this learning repository:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-topic`)
3. Commit your changes (`git commit -am 'Add new topic'`)
4. Push to the branch (`git push origin feature/new-topic`)
5. Open a Pull Request

---

## License

This project is for educational purposes.

---

## Author

Created for learning JavaScript and Playwright automation testing basics.

**Happy Learning!**

---

*Last updated: May 26, 2026*
