// 1 =================================
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// Your code:
export const arrayOfMultiples = (num, length) => {
  // ... write code ...
};

// 2 =================================
// Change direction of array
// TIP: Check if there is function which can help you https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Example:
// changeDirection([0, 1, 2, 3]) ➞ [3, 2, 1, 0]
// changeDirection([]) ➞ []
// changeDirection([1, 2]) ➞ [2, 1]

// Your code:
export const changeDirection = (array) => {
  // ... write code ...
};

// 3 =================================
// Create function that takes two arrays and return object with two keys - bigger array, sum all numbers
// Examples
// biggerArray([1,2,3,4,5], [50,50]) ➞ { array: [50,50], sum: 100 }
// biggerArray([1,2,3], [2,3,4]) ➞ { array: [2,3,4], sum: 9 }

// Your code:
export const biggerArray = (array1, array2) => {
  // ... write code ...
};

// 4 =================================
// Write a function which will return only the unique numbers from the input array
// TIP: Check if there is function which can help you https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Examples
// returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]
// returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]
// returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]

// Your code:
export const returnUnique = (array) => {
  // ... write code ...
};

// 5 =================================
// Write function which negate all numbers in array
// Example:
// negative([0, 1, 2]) ➞ [0, -1, -2]
// negative([-1, 2, -3]) ➞ [1, -2, 3]

// Your code:
export const negative = (array) => {
  return array.map((num) => (num !== 0 ? num * -1 : 0));
};

// BONUS - You don't need to finish this

// 6 ========== BONUS =======================
// Write function which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

// Your code:
export const buzzIterate = () => {
  let output = "";
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0) {
      output += "Fizz";
    }
    if (num % 5 === 0) {
      output += "Buzz";
    }
  }
  console.log(output);
};

// 7  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
export const drawTriangle = (length = 5) => {
  for (let i = 1; i <= length; i++) {
    console.log("*".repeat(i) + "\n");
  }
};

// 8  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
export const drawJavascriptWord = (word = "javascript") => {
  let output = "";
  word = word.toUpperCase();
  for (let i = word.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      output += j === word.length - 1 ? "*" : "* ";
    }
    let letters = word.substring(i);
    for (let j = 0; j < letters.length; j++) {
      output += letters[j];
      output += j === letters.length - 1 ? "" : " ";
    }
    output += "\n";
  }
  console.log(output);
};
