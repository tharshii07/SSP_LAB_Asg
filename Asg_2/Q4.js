// 4. Write a JavaScript program to sort a list of elements using
// Merge sort.
function mergeSort(arr) {
 if (arr.length <= 1) {
 return arr; // Base case: if array is empty or has only one element, it's already sorted
 }
 const middle = Math.floor(arr.length / 2);
 const left = arr.slice(0, middle);
 const right = arr.slice(middle);
 const sortedLeft = mergeSort(left);
 const sortedRight = mergeSort(right);
 return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
 let result = [];
 let leftIndex = 0;
 let rightIndex = 0;
 while (leftIndex < left.length && rightIndex < right.length) {
 if (left[leftIndex] < right[rightIndex]) {
 result.push(left[leftIndex]);
 leftIndex++;
 } else {
 result.push(right[rightIndex]);
 rightIndex++;
 }
 }
 return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
// Example usage:
const arr = [5, 3, 7, 2, 8, 6, 4];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 6, 7, 8]