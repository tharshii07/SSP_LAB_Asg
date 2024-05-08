// 3. Write a JavaScript program to sort a list of elements using Quick 
// sort.
function quickSort(arr) {
 if (arr.length <= 1) {
 return arr; // Base case: if array is empty or has only one element, it's already sorted
 }
 const pivot = arr[0]; // Choose the first element as the pivot
 const left = [];
 const right = [];
 for (let i = 1; i < arr.length; i++) {
 if (arr[i] < pivot) {
 left.push(arr[i]);
 } else {
 right.push(arr[i]);
 }
 }
 return [...quickSort(left), pivot, ...quickSort(right)];
}
// Example usage:
const arr = [5, 3, 7, 2, 8, 6, 4];
const sortedArr = quickSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 6, 7, 8]