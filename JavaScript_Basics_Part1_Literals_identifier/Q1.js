function normalizeOperatorLabel(label){
    if (typeof label !== 'string') {
        throw new TypeError('Expected a string label');
    }

    return (
        'js-operator-' +
        label
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
    );
}

const operatorLabels = [
    'Assignment Operator',
    '  Comparison Operator  ',
    'Strict Equality (===)',
    'Logical AND',
    'String Concatenation',
    'Ternary Operator',
    'typeof',
    'Optional Chaining',
    'Nullish Coalescing (??)',
    '  Post-Increment  ',
];

console.log('=== JavaScript Operator Label Normalizer ===\n');
operatorLabels.forEach((label) => {
    console.log(`${label.padEnd(30)} -> ${normalizeOperatorLabel(label)}`);
});

{ normalizeOperatorLabel };

