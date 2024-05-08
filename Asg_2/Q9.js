// 9. Write a JavaScript program to check if a numeric array is sorted
// or not
function isSorted(arr) {
 // Check if every element is less than or equal to the next element
 for (let i = 0; i < arr.length - 1; i++) {
 if (arr[i] > arr[i + 1]) {
 return false; 
 }
 }
 return true;
}
// Example usage:
const sortedArr = [1, 2, 3, 4, 5];
const unsortedArr = [5, 3, 7, 2, 8];
console.log(isSorted(sortedArr)); // Output: true
console.log(isSorted(unsortedArr)); // Output: false