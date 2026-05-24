/**
 * QA-Friendly Score Classifier for Practice Readiness
 * 
 * Rules:
 * - 90 and above  => EXCELLENT
 * - 75 to 89      => GOOD
 * - 50 to 74      => NEEDS_PRACTICE
 * - Below 50      => REVISIT
 * 
 * Interview focus: operators, strict comparison, null-safe checks,
 * and expression-based QA utilities.
 */

function classifyJsOperatorsScore(score) {
    // ADD YOUR CODE HERE
    // Null-safe check: ensure score is a valid number
    if (score === null || score === undefined || typeof score !== 'number') {
        return "REVISIT";
    }

    // Strict comparison and boundary-based classification
    if (score >= 90) {
        return "EXCELLENT";
    } else if (score >= 75) {
        return "GOOD";
    } else if (score >= 50) {
        return "NEEDS_PRACTICE";
    } else {
        return "REVISIT";
    }
}

// Export for reuse in test suites
module.exports = { classifyJsOperatorsScore };
