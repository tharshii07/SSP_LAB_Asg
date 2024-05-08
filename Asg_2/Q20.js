
// 20. Write a JavaScript program to implement a stack that checks if 
// a given element is present or not in the stack.
class Stack {
 constructor() {
 this.items = [];
 }
 // Push element to the stack
 push(element) {
 this.items.push(element);
 }
 // Pop element from the stack
 pop() {
 if (this.items.length == 0) {
 return "Underflow";
 }
 return this.items.pop();
 }
 // Peek at the top element of the stack
 peek() {
 return this.items[this.items.length - 1];
 }
 // Check if element is present in the stack
 contains(element) {
 return this.items.includes(element);
 }
 // Check if stack is empty
 isEmpty() {
 return this.items.length == 0;
 }
 // Print the stack elements
 printStack() {
 let str = "";
 for (let i = 0; i < this.items.length; i++) {
 str += this.items[i] + " ";
 }
 return str;
 }
}
// Example usage:
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack elements:", stack.printStack()); // Output: 10 20 30
console.log("Is 20 present in the stack?", stack.contains(20)); // Output: true
console.log("Is 40 present in the stack?", stack.contains(40)); // Output: false