// Checkout useful functions at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// Checkout useful functions at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 1 ----
// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
// Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

// Your code:

// 2 ----
// Create a function that takes strings - firstname, lastname, age, and return object with firstname, lastname, age, yearOfBirth
// Examples
// personObject("Obi-wan", "Kenobi", "40") ➞ { firstname: "Obi-wan", lastname: "Kenobi", age: 40, yearOfBirth: 1981 }

// Your code:

// 3 ----
// Create the function that takes an array with objects and returns the sum of people's budgets.
// Example
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

//Your code:

// 4 ----
// Create function that takes array of cars and sort them by price
// Example
// const vehicles = [{name: "Executor Star Dreadnought", price: 999}, {name: "T-47 Airspeeder", 5}, {name: "AT-AT", 20}]
// sortVehiclesByPrice(vehicles) ➞ [{name: "T-47 Airspeeder", 5}, {name: "AT-AT", 20}, {name: "Executor Star Dreadnought", price: 999}]

// Your code:

// 5 ----
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

// 6 ----
// Sort people in array by lastname
// Your code:
const people = [
    { name: "Lillian Conroy" },
    { name: "Lauren Williamson" },
    { name: "Mr. Geraldine Windler" },
    { name: "Alfred Christiansen" },
    { name: "Felicia Pollich" },
    { name: "Harry Zieme" },
    { name: "Gabriel Romaguera" },
    { name: "Kim Herman" },
    { name: "Harriet Raynor" },
    { name: "Cary Walsh" },
];

// 7 ----
// Create function for sold vehicles that creates summary - count type, sum of cars, what color was best in sell?
// output: 
// {
//     types: [{type: "Wagon", count: 5}, {type: "Sedan", count: 3}, ...],
//     colors: [{color: "lime", count: 10}, {color: "green", count: 3}],
//     top3Manufactures: [{manufacture: "Volvo", count: 10}, {manufacture: "Skoda", count: 9},{manufacture: "Fiat", count: 8}],
// }

const vehicles = [
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
    {
        type: "Sedan",
        manufacture: "Rolls Royce",
        name: "Altima",
        color: "ivory",
    },
    {
        type: "Sedan",
        manufacture: "Fiat",
        name: "Countach",
        color: "fuchsia",
    },
    { type: "SUV", manufacture: "Jeep", name: "Corvette", color: "lime" },
    {
        type: "Minivan",
        manufacture: "Fiat",
        name: "Beetle",
        color: "silver",
    },
    {
        type: "Minivan",
        manufacture: "Aston Martin",
        name: "ATS",
        color: "fuchsia",
    },
    {
        type: "Minivan",
        manufacture: "Mercedes Benz",
        name: "Element",
        color: "olive",
    },
    {
        type: "Hatchback",
        manufacture: "Mercedes Benz",
        name: "Colorado",
        color: "orchid",
    },
    {
        type: "Extended Cab Pickup",
        manufacture: "Mercedes Benz",
        name: "Spyder",
        color: "violet",
    },
    {
        type: "SUV",
        manufacture: "Jaguar",
        name: "F-150",
        color: "magenta",
    },
    {
        type: "Wagon",
        manufacture: "Bugatti",
        name: "Cruze",
        color: "silver",
    },
    {
        type: "Cargo Van",
        manufacture: "Ford",
        name: "Beetle",
        color: "white",
    },
    {
        type: "Cargo Van",
        manufacture: "Audi",
        name: "911",
        color: "gold",
    },
    {
        type: "SUV",
        manufacture: "Maserati",
        name: "Escalade",
        color: "blue",
    },
    {
        type: "Crew Cab Pickup",
        manufacture: "Tesla",
        name: "Alpine",
        color: "sky blue",
    },
    {
        type: "Convertible",
        manufacture: "Maserati",
        name: "1",
        color: "maroon",
    },
    {
        type: "Hatchback",
        manufacture: "Hyundai",
        name: "XC90",
        color: "fuchsia",
    },
    {
        type: "Coupe",
        manufacture: "Nissan",
        name: "Sentra",
        color: "lime",
    },
];

// Your code: (use array vehicles)
