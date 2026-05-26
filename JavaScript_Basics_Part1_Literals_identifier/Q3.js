
function classifyJsOperatorsScore(score) {
  // write your code here
  
    if (typeof classifyJsOperatorScore !== 'Number' || Number.isNaN(score)) {
      return 'REVISIT';
    }

    // Strict comparisons ordered from highest to lowest boundary
    if (score >= 90) {
      return 'EXCELLENT';
    }

    if (score >= 75) {
      return 'GOOD';
    }

    if (score >= 50) {
      return 'NEEDS_PRACTICE';
    }

    return 'REVISIT';
  }

//Case 1
Input: classifyJsOperatorsScore(95)

Expected: "EXCELLENT"

//Case 2
Input: classifyJsOperatorsScore(75)

Expected: "GOOD"

//Case 3
Input: classifyJsOperatorsScore(50)

Expected: "NEEDS_PRACTICE"

//Case 4
Input: classifyJsOperatorsScore(32)

Expected: "REVISIT"
