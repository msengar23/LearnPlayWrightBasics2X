function getJsOperatorsKeywordMeaning(term) {
  // write your code here

  if (typeof term !== 'string') {
    return "unknown";
  }

  // Normalize input: Remove whitespace and convert to lowercase
  const normalizedTerm = term.trim().toLowerCase();

  // Keyword dictionary mapping operators to their meanings
  const operatorMap = {
    "===": "strict-equality",
    "??": "nullish-coalescing",
    "&&": "logical-and",
    "||": "logical-or",
    "==": "loose-equality",
    "!=": "loose-inequality",
    "!==": "strict-inequality"
  };

  // if does notexist
  return operatorMap[normalizedTerm] || "unknown";
}