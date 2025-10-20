const { sum, subtract, multiply } = require('./sum');

console.log('=== CI Pipeline Demo ===\n');

// Example calculations
console.log('Basic Math Operations:');
console.log(`sum(5, 3) = ${sum(5, 3)}`);
console.log(`subtract(10, 4) = ${subtract(10, 4)}`);
console.log(`multiply(6, 7) = ${multiply(6, 7)}`);

console.log('\nEdge Cases:');
console.log(`sum(0, 0) = ${sum(0, 0)}`);
console.log(`subtract(5, 10) = ${subtract(5, 10)}`);
console.log(`multiply(0, 100) = ${multiply(0, 100)}`);

console.log('\nError Handling:');
try {
    sum('5', 3);
} catch (error) {
    console.log(`Error caught: ${error.message}`);
}

console.log('\nDemo completed successfully! 🎉');
