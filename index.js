/*
  Function imports - Don't mind them and scroll down
*/
import { giveSentenceForPerson, parametrize, replace } from "./strings.js";
import {
  getBudgets,
  getVehiclesAndTopSpeed,
  personObject,
  sortPeopleByLastname,
  sortVehiclesByPrice,
  summarizeVehicles,
  volumeOfBox,
} from "./objects.js";
import {
  arrayOfMultiples,
  biggerArray,
  buzzIterate,
  changeDirection,
  drawJavascriptWord,
  drawTriangle,
  negative,
  returnUnique,
} from "./cycles.js";
import {
  printArray,
  printAverage,
  printEvenNums,
  printFirstItem,
  printLargestItem,
  printLargestsIndex,
  printLastItem,
  printLength,
  printSALDifference,
  printSmallestItem,
  printSum,
} from "./array.js";

/*
    Here's the place for your debugging. :-)
    Uncomment below function calls as you implement them.
    Printing their output to console may help you.
*/

/*
    String functions
*/

//parametrize("Javascript is the best");
/*
giveSentenceForPerson({
  name: "Obi-wan",
  position: "Jedi",
  age: 40,
  location: "Starwars universe",
});
*/
// replace("Hello Javascript");

/*
    Cycle functions
*/

// arrayOfMultiples(7, 5);
// changeDirection([0, 1, 2, 3]);
// biggerArray([1,2,3,4,5], [50,50]);
// returnUnique([1, 9, 8, 8, 7, 6, 1, 6]);
// buzzIterate();
// drawTriangle();
// drawJavascriptWord();
// negative([0, 1, 2]);

/*
    Array functions
*/

// printArray([1,2,3]);
// printLength([1,2,3]);
// printFirstItem([1,2,3]);
// printLastItem([1,2,3]);
// printLargestItem([1,2,5,0,3]);
// printSmallestItem([1,2,5,0,3]);
// printSum([1,2,5,0,3]);
// printSALDifference([1,2,5,0,3]);
// printAverage([1,2,5,0,3]);
// printLargestsIndex([1,2,5,0,3]);
// printEvenNums([1,2,5,0,3]);
// printNumsMultipliedBy2([1,2,5,0,3]);
// printMessageForSmallestBelow10([1,2,5,0,3]);
// createDupes([1,2,3]);
// splitEvenOdds([1,2,3,4])

/*
    Object functions
*/

/*
volumeOfBox({
  width: 2,
  length: 5,
  height: 1
});
*/

//personObject("Obi-wan", "Kenobi", "40");

/*
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
]);
*/
/*
sortVehiclesByPrice([
  { name: "T-47 Airspeeder", price: 5 },
  { name: "AT-AT", price: 20 },
]);
*/
/*
getVehiclesAndTopSpeed([
  { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
]);
*/
/*
sortPeopleByLastname([
  { name: "Lauren Williamson" },
  { name: "Lillian Conroy" },
  { name: "Felicia Pollich" },
]);
*/
/*
summarizeVehicles([
  {
    type: "Convertible",
    manufacture: "Volvo",
    name: "Colorado",
    color: "lime",
  },
  {
    type: "Hatchback",
    manufacture: "Bugatti",
    name: "V90",
    color: "green",
  },
  {
    type: "Wagon",
    manufacture: "Tesla",
    name: "Element",
    color: "lavender",
  },
]);
*/
