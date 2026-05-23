function classifyBugSeverity(bugTitle, frequency, impact) {
  let priority = "";
  let actionMessage = "";

  // Outer if-else checks the Frequency
  if (frequency === "always") {
    // Inner if-else checks the Impact
    if (impact === "blocker") {
      priority = "P0";
      actionMessage = "Critical: Stop release immediately.";
    } else if (impact === "major") {
      priority = "P1";
      actionMessage = "High: Must fix before the next build deployment.";
    } else if (impact === "minor") {
      priority = "P2";
      actionMessage = "Medium: Fix during the current sprint cycle.";
    } else {
      priority = "UNKNOWN";
      actionMessage = "Invalid impact value provided.";
    }
  } 
  else if (frequency === "often") {
    if (impact === "blocker") {
      priority = "P1";
      actionMessage = "High: Must fix before the next build deployment.";
    } else if (impact === "major") {
      priority = "P2";
      actionMessage = "Medium: Fix during the current sprint cycle.";
    } else if (impact === "minor") {
      priority = "P3";
      actionMessage = "Low: Add to product backlog for future consideration.";
    } else {
      priority = "UNKNOWN";
      actionMessage = "Invalid impact value provided.";
    }
  } 
  else if (frequency === "rarely") {
    if (impact === "blocker") {
      priority = "P2";
      actionMessage = "Medium: Fix during the current sprint cycle.";
    } else if (impact === "major") {
      priority = "P3";
      actionMessage = "Low: Add to product backlog for future consideration.";
    } else if (impact === "minor") {
      priority = "P4";
      actionMessage = "Trivial: Cosmetic issue. Lower priority.";
    } else {
      priority = "UNKNOWN";
      actionMessage = "Invalid impact value provided.";
    }
  } 
  // Handle unknown frequency values
  else {
    priority = "UNKNOWN";
    actionMessage = "Error: Invalid frequency value provided.";
  }

  // Print the formatted Bug Severity Report
  console.log("================= BUG SEVERITY REPORT =================");
  console.log(`Bug Title : ${bugTitle}`);
  console.log(`Frequency : ${frequency}`);
  console.log(`Impact    : ${impact}`);
  console.log(`Severity  : ${priority}`);
  console.log(`Action    : ${actionMessage}`);
  console.log("=======================================================\n");
}

// --- Test Case Execution ---

// Test Case 1: Always + Blocker (P0)
classifyBugSeverity(
  "Checkout page crashes on applying coupon", 
  "always", 
  "blocker"
);

// Test Case 2: Often + Minor (P3)
classifyBugSeverity(
  "Profile image shifts 2px to the left on hover", 
  "often", 
  "minor"
);

// Test Case 3: Error handling example
classifyBugSeverity(
  "Broken image link in footer", 
  "sometimes", 
  "minor"
);
