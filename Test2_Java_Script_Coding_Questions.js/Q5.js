// Predefined roles array to cycle through
const ROLES = ["admin", "editor", "viewer", "tester", "manager"];
const TOTAL_USERS_TO_GENERATE = 8;

// Use 'var' for a global tracker/counter across multiple execution blocks if needed
var globalGeneratedCount = 0;

function generateTestData(count) {
  console.log("==================== GENERATED TEST DATA ====================");
  console.log("ID       | Name       | Email                        | Role    | Status");
  console.log("-------------------------------------------------------------");

  // Use 'let' for the loop variable because it changes with every iteration
  for (let i = 1; i <= count; i++) {
    
    // Use 'const' for fixed values or calculations unique to this specific block iteration
    const paddedId = "USR-" + String(i).padStart(4, '0');
    const userName = `TestUser_${i}`;
    const userEmail = `testuser${i}@testingacademy.com`;
    
    // Cycle through roles dynamically using the remainder/modulo operator (%)
    const roleIndex = (i - 1) % ROLES.length;
    const userRole = ROLES[roleIndex];
    
    // Edge Case Rule: Every 3rd user is INACTIVE
    const userStatus = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

    // Format output with padding for a clean simulated table view
    console.log(
      `${paddedId.padEnd(8)} | ` +
      `${userName.padEnd(10)} | ` +
      `${userEmail.padEnd(28)} | ` +
      `${userRole.padEnd(7)} | ` +
      `${userStatus}`
    );

    // Increment our global var counter
    globalGeneratedCount++;
  }
  
  console.log("=============================================================");
  console.log(`Global Counter (var summary): Total ${globalGeneratedCount} users added to pool.`);
}

// Execute the test data generation
generateTestData(TOTAL_USERS_TO_GENERATE);