// 6. Write a JavaScript program to sort a list of elements using 
// Insertion sort
function insertionSort(arr) {
 const n = arr.length;
 for (let i = 1; i < n; i++) {
 let current = arr[i];
 let j = i - 1;
 while (j >= 0 && arr[j] > current) {
 arr[j + 1] = arr[j];
 j--;
 }
 
 // Place current at its correct position in sorted part
 arr[j + 1] = current;
 }
 return arr;
}
// Example usage:
const arr = [5, 3, 7, 2, 8, 6, 4];
const sortedArr = insertionSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 6, 7, 8]