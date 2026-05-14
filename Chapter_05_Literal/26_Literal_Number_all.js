// ============================================================
// Lab Exercise: All Number Types in JavaScript
// File: 26_Literal_Number_all.js
// ============================================================

// -----------------------------------------------------------
// 1. INTEGER LITERALS (Whole Numbers)
// -----------------------------------------------------------

let decimal = 42;            // Base 10 (most common)
let hex = 0x2A;              // Base 16 (starts with 0x) → 42
let octal = 0o52;            // Base 8  (starts with 0o) → 42
let binary = 0b101010;       // Base 2  (starts with 0b) → 42

console.log("Decimal :", decimal);   // 42
console.log("Hex     :", hex);       // 42
console.log("Octal   :", octal);     // 42
console.log("Binary  :", binary);    // 42

// -----------------------------------------------------------
// 2. FLOATING-POINT LITERALS (Decimals)
// -----------------------------------------------------------

let price = 19.99;
let pi = 3.14159;
let small = 0.001;
let big = 1.0;               // Treated as integer 1

console.log("\nFloats  :", price, pi, small, big);

// -----------------------------------------------------------
// 3. SCIENTIFIC / EXPONENTIAL NOTATION
// -----------------------------------------------------------

let million = 1e6;           // 1 × 10^6 = 1,000,000
let tiny = 1e-6;             // 1 × 10^-6 = 0.000001
let science = 3.14e2;        // 3.14 × 10^2 = 314

console.log("\n1e6     :", million);   // 1000000
console.log("1e-6    :", tiny);        // 0.000001
console.log("3.14e2  :", science);     // 314

// -----------------------------------------------------------
// 4. UNDERSCORES IN NUMBERS (ES2021+)
// -----------------------------------------------------------
// Makes large numbers easier to read

let billion = 1_000_000_000;
let binaryGrouped = 0b1010_1010;
let hexGrouped = 0xFF_FF;

console.log("\n1Billion:", billion);            // 1000000000
console.log("BinaryGrouped:", binaryGrouped);   // 170
console.log("HexGrouped:", hexGrouped);         // 65535

// -----------------------------------------------------------
// 5. BIGINT (Whole numbers larger than (2^53 - 1))
// -----------------------------------------------------------
// Suffix with 'n' to create a BigInt

let huge = 9007199254740993n;
let bigFromNumber = BigInt(123);
let sumBig = huge + 10n;

console.log("\nBigInt  :", huge);
console.log("BigSum  :", sumBig);
console.log("typeof huge:", typeof huge);    // "bigint"

// NOTE: You cannot mix BigInt and Number directly
// let bad = huge + 10;  // ❌ TypeError

// -----------------------------------------------------------
// 6. SPECIAL NUMERIC VALUES
// -----------------------------------------------------------

console.log("\n--- Special Values ---");

// Infinity: result of dividing by zero or overflow
console.log("1 / 0   :", 1 / 0);           // Infinity
console.log("-1 / 0  :", -1 / 0);          // -Infinity
console.log("typeof Infinity:", typeof Infinity); // "number"

// NaN: Not-a-Number (invalid numeric operation)
console.log("0 / 0   :", 0 / 0);           // NaN
console.log("'abc'/2 :", "abc" / 2);       // NaN
console.log("typeof NaN:", typeof NaN);    // "number"  (quirky!)

// -----------------------------------------------------------
// 7. NUMBER PROPERTIES
// -----------------------------------------------------------

console.log("\n--- Number Constants ---");
console.log("MAX_VALUE:", Number.MAX_VALUE);         // ~1.79e+308
console.log("MIN_VALUE:", Number.MIN_VALUE);         // ~5e-324
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("NaN constant:", Number.NaN);
console.log("EPSILON:", Number.EPSILON);             // smallest difference between 2 numbers

// -----------------------------------------------------------
// 8. NUMBER vs PRIMITIVE
// -----------------------------------------------------------

let primitiveNum = 100;          // primitive
let objectNum = new Number(100); // Number object (rarely used)

console.log("\nPrimitive:", typeof primitiveNum);   // "number"
console.log("Object   :", typeof objectNum);        // "object"
console.log("Value    :", objectNum.valueOf());      // 100

// -----------------------------------------------------------
// 9. typeof CHECK
// -----------------------------------------------------------

console.log("\n--- typeof checks ---");
console.log("typeof 42     :", typeof 42);          // "number"
console.log("typeof 3.14   :", typeof 3.14);        // "number"
console.log("typeof 1n     :", typeof 1n);          // "bigint"
console.log("typeof NaN    :", typeof NaN);         // "number"
console.log("typeof Infinity:", typeof Infinity);   // "number"

// -----------------------------------------------------------
// 10. isNaN() vs Number.isNaN()
// -----------------------------------------------------------

console.log("\n--- NaN Checks ---");
console.log("isNaN('abc')      :", isNaN("abc"));        // true (converts first)
console.log("Number.isNaN('abc'):", Number.isNaN("abc")); // false (strict, no conversion)
console.log("Number.isNaN(NaN) :", Number.isNaN(NaN));   // true

// -----------------------------------------------------------
// 11. PARSING STRINGS TO NUMBERS
// -----------------------------------------------------------

console.log("\n--- Parsing ---");
console.log("parseInt('42')    :", parseInt("42"));         // 42
console.log("parseInt('0x2A')  :", parseInt("0x2A", 16));   // 42 (base 16)
console.log("parseFloat('3.14'):", parseFloat("3.14"));     // 3.14
console.log("Number('99')      :", Number("99"));           // 99

// -----------------------------------------------------------
// 12. HEX / OCTAL / BINARY CONVERSION
// -----------------------------------------------------------

let num = 255;
console.log("\n--- Conversions ---");
console.log("255 → Hex   :", num.toString(16));     // "ff"
console.log("255 → Octal :", num.toString(8));      // "377"
console.log("255 → Binary:", num.toString(2));      // "11111111"

// ============================================================
// SUMMARY
// ============================================================
// 1. JavaScript has ONE number type: "number" (double-precision 64-bit float)
// 2. BigInt is a SEPARATE type for arbitrarily large integers
// 3. Special values: Infinity, -Infinity, NaN
// 4. Notation styles: decimal, hex (0x), octal (0o), binary (0b), scientific (e)
// 5. Underscores (1_000_000) improve readability in modern JS
// ============================================================
