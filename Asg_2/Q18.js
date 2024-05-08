// 18. Write a JavaScript function that takes a string with both 
// lowercase and upper case letters as a parameter. It converts upper 
// case letters to lower case, and lower case letters to upper case.
function swapCase(str) {
 // Use a regular expression to match alphabetic characters and replace them with their 
// opposite case
 return str.replace(/[a-zA-Z]/g, function(char) {
 return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
 });
}
// Example usage:
const inputString = "Hello World!";
const swappedString = swapCase(inputString);
console.log(swappedString); // Output: "hELLO wORLD!"