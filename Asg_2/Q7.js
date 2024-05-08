// 7. Write a JavaScript program to sort a list of elements using 
// Bubble sort
function bubbleSort(arr) {
 const n = arr.length;
 for (let i = 0; i < n - 1; i++) {
 for (let j = 0; j < n - i - 1; j++) {
 if (arr[j] > arr[j + 1]) {
 // Swap arr[j] and arr[j+1]
 const temp = arr[j];
 arr[j] = arr[j + 1];
 arr[j + 1] = temp;
 }
 }
 }
 return arr;
}
// Example usage:
const arr = [5, 3, 7, 2, 8, 6, 4];
const sortedArr = bubbleSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 6, 7, 8]