// Example string
var str = "Hello, World!";

// String length
var length = str.length;
console.log("Length of the string: " + length); // Output: 13

// Convert to uppercase
var uppercaseStr = str.toUpperCase();
console.log("Uppercase string: " + uppercaseStr); // Output: HELLO, WORLD!

// Convert to lowercase
var lowercaseStr = str.toLowerCase();
console.log("Lowercase string: " + lowercaseStr); // Output: hello, world!

// Substring
var substring = str.substring(0, 5);
console.log("Substring: " + substring); // Output: Hello

// Replace
var replacedStr = str.replace("World", "JavaScript");
console.log("Replaced string: " + replacedStr); // Output: Hello, JavaScript!

// Split
var splitStr = str.split(", ");
console.log("Split string: " + splitStr); // Output: Hello,World!

// Concatenate
var str1 = "Hello";
var str2 = "World";
var concatenatedStr = str1.concat(", ", str2, "!");
console.log("Concatenated string: " + concatenatedStr); // Output: Hello, World!