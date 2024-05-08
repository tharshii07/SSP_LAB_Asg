// 12. Write a JavaScript function to validate whether a given value is 
// RegExp or not.
function isRegExp(value) {
 return value instanceof RegExp;
}
// Example usage:
console.log(isRegExp(/hello/)); // Output: true
console.log(isRegExp(new RegExp('hello'))); // Output: true
console.log(isRegExp("hello")); // Output: false
console.log(isRegExp(null)); // Output: false