// Checkout useful functions at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// Checkout useful functions at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 1 ----
// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
// Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

// Your code:
export const volumeOfBox = (obj) => {
  return obj.width * obj.length * obj.height;
};

// 2 ----
// Create a function that takes strings - firstname, lastname, age, and return object with firstname, lastname, age, yearOfBirth
// Examples
// personObject("Obi-wan", "Kenobi", "40") ➞ { firstname: "Obi-wan", lastname: "Kenobi", age: 40, yearOfBirth: 1981 }

// Your code:
export const personObject = (firstname, lastname, age) => {
  return {
    firstname: firstname,
    lastname: lastname,
    age: parseInt(age),
    yearOfBirth: new Date().getFullYear() - age,
  };
};

// 3 ----
// Create the function that takes an array with objects and returns the sum of people's budgets.
// Example
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

//Your code:
export const getBudgets = (persons) => {
  return persons.reduce((total, person) => total + person.budget, 0);
};

// 4 ----
// Create function that takes array of cars and sort them by price
// Example
// const vehicles = [{name: "Executor Star Dreadnought", price: 999}, {name: "T-47 Airspeeder", price: 5}, {name: "AT-AT", price : 20}]
// sortVehiclesByPrice(vehicles) ➞ [{name: "T-47 Airspeeder", price :5}, {name: "AT-AT", price :20}, {name: "Executor Star Dreadnought", price: 999}]

// Your code:
export const sortVehiclesByPrice = (vehicles) => {
  return vehicles.sort((a, b) => {
    return a.price - b.price;
  });
};

// BONUS - You don't need to finish this

// 5 ---- BONUS
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
export const getVehiclesAndTopSpeed = (vehicles) => {
  return vehicles.map((vehicle) => {
    return {
      name: vehicle.name,
      topSpeed: Math.max(...vehicle.measuredSpeeds),
    };
  });
};

// 6 ---- BONUS
// Create function that takes array of people and returns it sorted by lastname
// Example:
// const people = [
//    { name: "Lillian Conroy" },
//    { name: "Lauren Williamson" },
//    { name: "Mr. Geraldine Windler" },
//    { name: "Alfred Christiansen" },
//    { name: "Felicia Pollich" },
//    { name: "Harry Zieme" },
//    { name: "Gabriel Romaguera" },
//    { name: "Kim Herman" },
//    { name: "Harriet Raynor" },
//    { name: "Cary Walsh" },
// ];
// sortPeopleByLastname(people) ➞ [
//   { name: 'Alfred Christiansen' },
//   { name: 'Lillian Conroy' },
//   { name: 'Kim Herman' },
//   { name: 'Felicia Pollich' },
//   { name: 'Harriet Raynor' },
//   { name: 'Gabriel Romaguera' },
//   { name: 'Cary Walsh' },
//   { name: 'Lauren Williamson' },
//   { name: 'Mr. Geraldine Windler' },
//   { name: 'Harry Zieme' }
// ]

// Your code:
export const sortPeopleByLastname = (people) => {
  return people.sort((a, b) => {
    return a.name
      .split(" ")
      .pop()
      .localeCompare(b.name.split(" ").pop(), "en", { sensitivity: "base" });
  });
};
