function calculateJsOperatorsWeightedScore(passed, failed, skipped) {
  // Null-safe checks: Treat missing, null, or invalid values as 0
  const safePassed = typeof passed === 'number' && !Number.isNaN(passed) ? passed : 0;
  const safeFailed = typeof failed === 'number' && !Number.isNaN(failed) ? failed : 0;

  // Calculate points: passed items earn 2 points, failed items lose 1 point
  // Skipped items yield 0 points, so they are excluded from the equation
  return (safePassed * 2) - (safeFailed * 1);
}

console.log(calculateJsOperatorsWeightedScore(5, 2, 1));