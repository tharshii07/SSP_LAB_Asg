// 5. Write a JavaScript program to sort a list of elements using Heap
// sort.
function heapSort(arr) {
 buildMaxHeap(arr);
 for (let i = arr.length - 1; i > 0; i--) {
 swap(arr, 0, i);
 heapify(arr, 0, i);
 }
 return arr;
}
function buildMaxHeap(arr) {
 const n = arr.length;
 for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
 heapify(arr, i, n);
 }
}
function heapify(arr, i, size) {
 let largest = i; // Initialize largest as root
 const left = 2 * i + 1;
 const right = 2 * i + 2;
 if (left < size && arr[left] > arr[largest]) {
 largest = left;
 }
 // Check if right child is larger than largest so far
 if (right < size && arr[right] > arr[largest]) {
 largest = right;
 }
 if (largest !== i) {
 swap(arr, i, largest);
 heapify(arr, largest, size);
 }
}
function swap(arr, i, j) {
 const temp = arr[i];
 arr[i] = arr[j];
 arr[j] = temp;
}
// Example usage:
const arr = [5, 3, 7, 2, 8, 6, 4];
const sortedArr = heapSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 6, 7, 8]