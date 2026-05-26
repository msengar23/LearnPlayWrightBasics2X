function validateName(name) {
  // 1. Trim whitespace and check if it's a non-empty string
  if (typeof name !== 'string' || name.trim() === '') {
    return false;
  }

  const cleanedName = name.trim();

  // 2. Reject specific reserved words
  const reservedWords = ['typeof', 'delete', 'void', 'in', 'instanceof', 'new'];
  if (reservedWords.includes(cleanedName)) {
    return false;
  }

  // 3. Regex: Start with letter, _ or $; remaining can be letters, digits, _, or $
  // Validates structure based on standard identifier rules
  const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return regex.test(cleanedName);
}

// --- Test Cases ---
console.log(validateName("userName"));       // true
console.log(validateName("_privateVar"));    // true
console.log(validateName("$div"));           // true
console.log(validateName("test_data_1"));    // true
console.log(validateName("  "));             // false (empty after trim)
console.log(validateName("123variable"));    // false (starts with digit)
console.log(validateName("typeof"));         // false (reserved word)
console.log(validateName("new"));            // false (reserved word)
console.log(validateName("my-variable"));