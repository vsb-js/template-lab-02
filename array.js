// this block generates array with random length with values between 1-100
let numbers = [];
const length = Math.ceil(Math.random() * 10) + 5
for (let i = 0; i < length; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100))
}

// EXERCISE: 
// You can write all the code natively (for cycles and such) or you can use some advanced functions which JS arrays provides in case you see them fit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// There is multiple solutions to each task
// Display (using console.log): 
// a) whole array
// b) length of array 
// c) first element 
// d) last element 
// e) largest number 
// f) smallest number 
// g) sum of all numbers in array, 
// h) difference between the largest and the smallest number 
// i) average of all numbers 
// j) index of largest 
// k) display even numbers, if array doesn't contain even number, show text "Even number isn't in array"  
// l) Multiple by 2 every number in array ->  [1,2,3] -> [2,4,6]  
// m) If array contains number smaller than 10, say "Wow, this {smallest number} is very small."  
// n) Create new array with duplicities of numbers -> [1,2,3] -> [1,1,2,2,3,3]  
// o) Create two arrays - one with even numbers, second with odd numbers 
// p) Display everything with descriptions in terminal - 

// Your code: 

