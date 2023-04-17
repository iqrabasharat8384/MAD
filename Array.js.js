// There are to many array functions but we use few of them
// Example array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array function: map
const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers);

// Array function: filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Array function: reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of numbers:', sum);

// Array function: find
const greaterThanFive = numbers.find(num => num > 5);
console.log('First number greater than five:', greaterThanFive);

// Array function: forEach
console.log('Numbers:');
numbers.forEach(num => console.log(num));

// Array function: some
const hasGreaterThanEight = numbers.some(num => num > 8);
console.log('Has number greater than eight:', hasGreaterThanEight);

// Array function: every
const allGreaterThanZero = numbers.every(num => num > 0);
console.log('Are all numbers greater than zero:', allGreaterThanZero);

// Array function: includes
const includesSeven = numbers.includes(7);
console.log('Does array include number seven:', includesSeven);

// Array function: findIndex
const indexofSix = numbers.findIndex(num => num === 6);
console.log('Index of number six:', indexofSix);

// Array function: sort
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log('Sorted numbers:', sortedNumbers);

// Array function: reverse
const reversedNumbers = numbers.reverse();
console.log('Reversed numbers:', reversedNumbers);

// Array function: slice
const slicedNumbers = numbers.slice(2, 5);
console.log('Sliced numbers:', slicedNumbers);