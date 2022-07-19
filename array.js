// this block generates array with random length with values between 1-100
export let numbers = [];
const length = Math.ceil(Math.random() * 10) + 5;
for (let i = 0; i < length; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100));
}

// EXERCISE:
// You can write all the code natively (for cycles and such) or you can use some advanced functions which JS arrays provides in case you see them fit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// There can be multiple solutions to each task, solve it as you see fit.
// You will work with array `numbers` which will be generated by code (code below) in every task.
// Write these functions:

// a) Function which will print to console a whole array
export const printArray = (numbers) => {
  // Your code:
  console.log(numbers);
};

// b) Function which will print to console the length of array
export const printLength = (numbers) => {
  // Your code:
  console.log(numbers.length);
};

// c) Function which will print to console the first element of array
export const printFirstItem = (numbers) => {
  // Your code:
  console.log(numbers[0]);
};

// d) Function which will print to console the last element
export const printLastItem = (numbers) => {
  // Your code:
  console.log(numbers[numbers.length - 1]);
};

// e) Function which will print to console the largest number (You can check Math functions)
export const printLargestItem = (numbers) => {
  // Your code:
  console.log(Math.max.apply(null, numbers));
};

// f) Function which will print to console the smallest number (You can check Math functions)
export const printSmallestItem = (numbers) => {
  // Your code:
  console.log(Math.min.apply(null, numbers));
};

// g) Function which will print to console the sum of all numbers in array (You can check reduce function)
export const printSum = (numbers) => {
  // Your code:
  console.log(numbers.reduce((total, item) => total + item, 0));
};

// h) Function which will print to console the difference between the largest and the smallest number (You can check Math functions)
export const printSALDifference = (numbers) => {
  // Your code:
  let largest = Math.max.apply(null, numbers);
  let smallest = Math.min.apply(null, numbers);
  console.log(largest - smallest);
};

// i) Function which will print to console the average of all numbers (You can check reduce function)
export const printAverage = (numbers) => {
  // Your code:
  let sum = numbers.reduce((total, item) => total + item, 0);
  console.log(sum / numbers.length);
};

// j) Function which will print to console the index of largest number (You can check Math functions)
export const printLargestsIndex = (numbers) => {
  // Your code:
  let largest = Math.max.apply(null, numbers);
  console.log(numbers.indexOf(largest));
};

// k) Function which will print to console the even numbers (not the array of even numbers), if array doesn't contain any even number, show text "Even number isn't in array"
export const printEvenNums = (numbers) => {
  // Your code:
  let printed = false;
  numbers.forEach((num) => {
    if (num % 2 === 0) {
      console.log(num);
      printed = true;
    }
  });
  if (!printed) {
    console.log("Even number isn't in array");
  }
};

// l) Function which will multiple by 2 every number in array and print the array to console
// Example ->  [1,2,3] -> [2,4,6]
export const printNumsMultipliedBy2 = (numbers) => {
  // Your code:
  console.log(numbers.map((num) => num * 2));
};

// m) Function which will print to console "Wow, this {smallest number} is very small if array contains number smaller than 10"
export const printMessageForSmallestBelow10 = (numbers) => {
  // Your code:
  let smallest = Math.min.apply(null, numbers);
  if (smallest < 10) {
    console.log(`Wow, this ${smallest} is very small.`);
  }
};

// n) Function which will return an array with duplicities of `numbers`
// Example: createDupes([1,2,3]) -> [1,1,2,2,3,3]
export const createDupes = (numbers) => {
  // Your code:
  let duplicated = [];
  numbers.forEach((num) => {
    duplicated.push(num);
    duplicated.push(num);
  });
  return duplicated;
};

// o) Function which will received an array of numbers and will return an array of two other arrays (in this order) - one with even numbers, second with odd numbers
// Example: splitEvenOdds([1,2,3,4]) -> [[2, 4], [1, 3]]
export const splitEvenOdds = (numbers) => {
  // Your code:
  return [
    numbers.filter((num) => num % 2 === 0),
    numbers.filter((num) => num % 2 === 1),
  ];
};
