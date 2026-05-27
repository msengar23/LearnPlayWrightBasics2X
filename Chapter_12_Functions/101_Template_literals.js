function greet(name) {
    return `Hello, ${name}`;
}

let result = greet("Alice");
console.log(result);


function greet(name) {
    return `Hello, ${name}`;
}

// Step 1: A function named greet is declared. It accepts one parameter called name. Inside, it uses a template literal (backticks  ` ) to insert the value of name into the string and returns the result.
// let result = greet("Alice");
// Step 2: The function greet is called (invoked) with the argument "Alice". Inside the function, name becomes "Alice", so it returns "Hello, Alice". This returned value is stored in the variable result.
// console.log(result);
// Step 3: The value of result is printed to the console.
// Output:
// Hello, Alice
// Key takeaway: Functions accept inputs (parameters), process them, and send back a value using return.