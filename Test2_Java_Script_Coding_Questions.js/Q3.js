function apiCallWithRetries() 
{
  const MAX_ATTEMPTS = 5;
  let attempts = 0;
  let isSuccess = false;

  console.log("=== Starting API Call Retry Simulation ===");

  // The do...while loop runs at least once
  do {
    attempts++;
    
    // Generate a random number between 0 and 1
    const randomValue = Math.random();
    
    // Condition: 40% chance of success (randomValue > 0.6)
    if (randomValue > 0.6) {
      isSuccess = true;
      console.log(`Attempt ${attempts}: ✅ SUCCESS (Response 200 OK)`);
    } else {
      console.log(`Attempt ${attempts}: ❌ FAILED (Timeout/Error)`);
    }

  } 
  while (!isSuccess && attempts < MAX_ATTEMPTS);

  // Results
  console.log("-------------------------");
  if (isSuccess) {
    console.log(`Result: API call PASSED after ${attempts} attempt(s).`);
  } else {
    console.log(`Result: API call FAILED after reaching max ${MAX_ATTEMPTS} attempts.`);
  }
  console.log("=================================");
}

apiCallWithRetries();