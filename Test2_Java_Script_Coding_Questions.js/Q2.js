function generateTestReport(results) {
  // Initialize counters
  let passCount = 0;
  let failCount = 0;
  let skipCount = 0;

  const totalTests = results.length;

  // Handle empty input array
  if (totalTests === 0) {
    console.log("=== TEST REPORT ===");
    console.log("No test results provided.");
    return;
  }

  // Count results using a standard for loop
  for (let i = 0; i < totalTests; i++) {
    const status = results[i];

    if (status === "pass") {
      passCount++;
    } else if (status === "fail") {
      failCount++;
    } else if (status === "skip") {
      skipCount++;
    }
  }

  // Calculate pass rate percentage
  const passRate = ((passCount / totalTests) * 100).toFixed(2);

  // Determine the verdict based on rules
  let verdict = "";
  if (failCount === 0) {
    verdict = "Ready for release";
  } else if (failCount <= 2) {
    verdict = "Review";
  } else {
    verdict = "Block release";
  }

  // Print the formatted test report
  console.log("========== TEST REPORT ==========");
  console.log(`Total Tests : ${totalTests}`);
  console.log(`Passed      : ${passCount}`);
  console.log(`Failed      : ${failCount}`);
  console.log(`Skipped     : ${skipCount}`);
  console.log(`Pass Rate   : ${passRate}%`);
  console.log("---------------------------------");
  console.log(`Verdict     : ${verdict}`);
  console.log("=================================");
}

// --- Test cases execution ---

console.log("Test Case 1 Output:");
const suite1 = ["pass", "pass", "skip", "pass"];
generateTestReport(suite1);

console.log("\nTest Case 2 Output:");
const suite2 = ["pass", "fail", "pass", "skip", "fail", "pass"];
generateTestReport(suite2);

console.log("\nTest Case 3 Output:");
const suite3 = ["fail", "pass", "fail", "fail", "skip", "pass"];
generateTestReport(suite3);