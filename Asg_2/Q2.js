
// 2. Write a JavaScript program to find the first index of a given 
// element in an array using the linear search algorithm.
function linearSearch(arr, target) {
 for (let i = 0; i < arr.length; i++) {
 if (arr[i] === target) {
 return i; // Return the index if found
 }
 }
 return -1; // Return -1 if the element is not found
}
// Example usage:
const arr = [2, 5, 8, 10, 13];
const target = 8;
const index = linearSearch(arr, target);
console.log(index); // Output: 2 (index of element 8 in the array)

















