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
export const getVehiclesAndTopSpeed = (vehicles) => {
  return vehicles.map((vehicle) => {
    return {
      name: vehicle.name,
      topSpeed: Math.max(...vehicle.measuredSpeeds),
    };
  });
};

// 6 ----
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

// 7 ----
// Create function for sold vehicles that creates summary - count type, sum of cars, what color was best in sell?
// Example output:
// {
//   types: [
//     { type: 'Hatchback', count: 3 },
//     { type: 'SUV', count: 3 },
//     { type: 'Minivan', count: 3 },
//     { type: 'Convertible', count: 2 },
//     { type: 'Wagon', count: 2 },
//     { type: 'Sedan', count: 2 },
//     { type: 'Cargo Van', count: 2 },
//     { type: 'Extended Cab Pickup', count: 1 },
//     { type: 'Crew Cab Pickup', count: 1 },
//     { type: 'Coupe', count: 1 }
//   ],
//   colors: [
//     { color: 'lime', count: 3 },
//     { color: 'fuchsia', count: 3 },
//     { color: 'silver', count: 2 },
//     { color: 'green', count: 1 },
//     { color: 'lavender', count: 1 },
//     { color: 'ivory', count: 1 },
//     { color: 'olive', count: 1 },
//     { color: 'orchid', count: 1 },
//     { color: 'violet', count: 1 },
//     { color: 'magenta', count: 1 },
//     { color: 'white', count: 1 },
//     { color: 'gold', count: 1 },
//     { color: 'blue', count: 1 },
//     { color: 'sky blue', count: 1 },
//     { color: 'maroon', count: 1 }
//   ],
//   top3Manufactures: [
//     { manufacture: 'Mercedes Benz', count: 3 },
//     { manufacture: 'Bugatti', count: 2 },
//     { manufacture: 'Tesla', count: 2 }
//   ]
// }
// Example input:
// const vehicles = [
//   {
//     type: "Convertible",
//     manufacture: "Volvo",
//     name: "Colorado",
//     color: "lime",
//   },
//   {
//     type: "Hatchback",
//     manufacture: "Bugatti",
//     name: "V90",
//     color: "green",
//   },
//   {
//     type: "Wagon",
//     manufacture: "Tesla",
//     name: "Element",
//     color: "lavender",
//   },
//   {
//     type: "Sedan",
//     manufacture: "Rolls Royce",
//     name: "Altima",
//     color: "ivory",
//   },
//   {
//     type: "Sedan",
//     manufacture: "Fiat",
//     name: "Countach",
//     color: "fuchsia",
//   },
//   { type: "SUV", manufacture: "Jeep", name: "Corvette", color: "lime" },
//   {
//     type: "Minivan",
//     manufacture: "Fiat",
//     name: "Beetle",
//     color: "silver",
//   },
//   {
//     type: "Minivan",
//     manufacture: "Aston Martin",
//     name: "ATS",
//     color: "fuchsia",
//   },
//   {
//     type: "Minivan",
//     manufacture: "Mercedes Benz",
//     name: "Element",
//     color: "olive",
//   },
//   {
//     type: "Hatchback",
//     manufacture: "Mercedes Benz",
//     name: "Colorado",
//     color: "orchid",
//   },
//   {
//     type: "Extended Cab Pickup",
//     manufacture: "Mercedes Benz",
//     name: "Spyder",
//     color: "violet",
//   },
//   {
//     type: "SUV",
//     manufacture: "Jaguar",
//     name: "F-150",
//     color: "magenta",
//   },
//   {
//     type: "Wagon",
//     manufacture: "Bugatti",
//     name: "Cruze",
//     color: "silver",
//   },
//   {
//     type: "Cargo Van",
//     manufacture: "Ford",
//     name: "Beetle",
//     color: "white",
//   },
//   {
//     type: "Cargo Van",
//     manufacture: "Audi",
//     name: "911",
//     color: "gold",
//   },
//   {
//     type: "SUV",
//     manufacture: "Maserati",
//     name: "Escalade",
//     color: "blue",
//   },
//   {
//     type: "Crew Cab Pickup",
//     manufacture: "Tesla",
//     name: "Alpine",
//     color: "sky blue",
//   },
//   {
//     type: "Convertible",
//     manufacture: "Maserati",
//     name: "1",
//     color: "maroon",
//   },
//   {
//     type: "Hatchback",
//     manufacture: "Hyundai",
//     name: "XC90",
//     color: "fuchsia",
//   },
//   {
//     type: "Coupe",
//     manufacture: "Nissan",
//     name: "Sentra",
//     color: "lime",
//   },
// ];

// Your code:
export const summarizeVehicles = (vehicles) => {
  let types = {};
  let colors = {};
  let manufactures = {};
  vehicles.forEach((vehicle) => {
    types[vehicle.type] = vehicle.type in types ? types[vehicle.type] + 1 : 1;
    colors[vehicle.color] =
      vehicle.color in colors ? colors[vehicle.color] + 1 : 1;
    manufactures[vehicle.manufacture] =
      vehicle.manufacture in manufactures
        ? manufactures[vehicle.manufacture] + 1
        : 1;
  });
  return {
    types: Object.keys(types)
      .map((key) => {
        return {
          type: key,
          count: types[key],
        };
      })
      .sort((a, b) => b.count - a.count),
    colors: Object.keys(colors)
      .map((key) => {
        return {
          color: key,
          count: colors[key],
        };
      })
      .sort((a, b) => b.count - a.count),
    top3Manufactures: Object.keys(manufactures)
      .map((key) => {
        return {
          manufacture: key,
          count: manufactures[key],
        };
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, 3),
  };
};
