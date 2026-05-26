function filterSupportedJsOperatorsTopics(topics) {
  // Null-safe check: Return an empty array if input is not valid
  if (!Array.isArray(topics)) {
    return [];
  }

  // Map aliases and standard forms to their unified canonical outputs
  const canonicalMap = {
    "===": "===",
    "strict-equality": "===",
    "??": "??",
    "nullish-coalescing": "??",
    "&&": "&&",
    "logical-and": "&&",
    "||": "||",
    "logical-or": "||"
  };

  const uniqueCanonicalList = [];

  for (let i = 0; i < topics.length; i++) {
    const rawItem = topics[i];

    // Null-safe element check: skip null, undefined, or non-strings safely
    if (typeof rawItem !== 'string') {
      continue;
    }

    // Normalize input data pipeline
    const normalizedItem = rawItem.trim().toLowerCase();

    // Check if the normalized item is a supported term or alias
    if (Object.prototype.hasOwnProperty.call(canonicalMap, normalizedItem)) {
      const canonicalKey = canonicalMap[normalizedItem];

      // Maintain deduplicated "first-seen" order using strict array lookups
      if (!uniqueCanonicalList.includes(canonicalKey)) {
        uniqueCanonicalList.push(canonicalKey);
      }
    }
  }

  return uniqueCanonicalList;
}