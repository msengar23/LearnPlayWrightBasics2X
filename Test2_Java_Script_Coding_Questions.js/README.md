# Test 2: JavaScript Coding Questions

A practical JavaScript coding assessment focused on real-world automation testing scenarios.

## Files

| File | Description |
|:---|:---|
| `Q1.js` | API HTTP Status Code Switch Case |
| `Q2.js` | Test Report Generator |
| `Q3.js` | API Call Retry Simulation |
| `Q5.js` | Dynamic Test Data Generator |
| `Q6.js` | Bug Severity Classifier |

## Questions Overview

### Q1.js — API HTTP Status Code Switch Case
Simulates HTTP response status code handling using `switch(true)`. Covers codes: 200, 201, 301, 400, 401, 403, 404, 500.

### Q2.js — Test Report Generator
Accepts an array of test results (`pass`, `fail`, `skip`), calculates totals, pass rate, and determines release verdict.

### Q3.js — API Call Retry Simulation
Simulates flaky API calls using `do...while` loop with retry logic. Configurable max attempts with random success probability.

### Q5.js — Dynamic Test Data Generator
Generates structured mock user data for testing. Cycles through roles and implements edge-case rules.

### Q6.js — Bug Severity Classifier
Nested `if-else` logic to classify bug priority based on frequency and impact levels.

## How to Run

```bash
node Q1.js
node Q2.js
node Q3.js
node Q5.js
node Q6.js
```

---

*Part of [LearnPlaywrightBasics2X](../README.md)*
