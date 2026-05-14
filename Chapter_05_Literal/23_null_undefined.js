// null vs undefined in JavaScript
// ======================================

// 1. undefined
// ------------
// - It means a variable has been declared but has not been assigned any value yet.
// - It is automatically given by JavaScript when you forget to give a value.
// - typeof undefined returns "undefined".

let a;
console.log(a);           // undefined (declared but not assigned)
console.log(typeof a);    // "undefined"

// 2. null
// ---------
// - It means an intentional absence of any value. You, the programmer, set it to null.
// - It is like saying "this variable should have nothing" on purpose.
// - typeof null returns "object" (this is a known JavaScript quirk/bug).

let b = null;
console.log(b);           // null
console.log(typeof b);    // "object"  (quirk in JS)

// ======================================
// KEY DIFFERENCES (Simple Explanation)
// ======================================
// | Feature      | undefined                | null                          |
// |--------------|--------------------------|-------------------------------|
// | Meaning      | I don't have a value yet | I intentionally have no value |
// | Set by       | JavaScript automatically | Programmer manually           |
// | typeof       | "undefined"              | "object" (historical bug)     |
// | == check     | undefined == null  → true|                               |
// | === check    | undefined === null → false|                              |
// ======================================

console.log(undefined == null);   // true  (loose equality)
console.log(undefined === null);  // false (strict equality, different types)

// ======================================
// Practical Examples
// ======================================

// Example 1: Function without return
greet();

function greet() {
    // no return statement
}

// Example 2: Object property that doesn't exist
let person = { name: "Alice" };
console.log(person.age);   // undefined (property doesn't exist)

// Example 3: Intentionally clearing a value
let score = 100;
score = null;              // I want to reset/clear the score intentionally
console.log(score);        // null

// Example 4: Arrays
let items = [1, null, undefined, 3];
console.log(items[1]);     // null      (intentionally empty)
console.log(items[2]);     // undefined (slot is empty/not set)

// ======================================
// Quick Tip
// ======================================
// Use undefined when you want to check if something has a value or not.
// Use null when you want to deliberately say "this has no value".
