import {
  getBudgets,
  getVehiclesAndTopSpeed,
  personObject,
  sortPeopleByLastname,
  sortVehiclesByPrice,
  summarizeVehicles,
  volumeOfBox,
} from "../objects.js";

describe("Objects", () => {
  it("volumeOfBox function", () => {
    expect(volumeOfBox({ width: 2, length: 5, height: 1 })).toBe(10);
    expect(volumeOfBox({ width: 4, length: 2, height: 2 })).toBe(16);
    expect(volumeOfBox({ width: 2, length: 3, height: 5 })).toBe(30);
  });

  it("personObject function", () => {
    let person = {
      firstname: "Obi-wan",
      lastname: "Kenobi",
      age: 40,
    };
    expect(
      personObject(person.firstname, person.lastname, person.age),
    ).toStrictEqual({
      firstname: "Obi-wan",
      lastname: "Kenobi",
      age: 40,
      yearOfBirth: new Date().getFullYear() - person.age,
    });
  });

  it("getBudgets function", () => {
    expect(
      getBudgets([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
      ]),
    ).toBe(65700);
  });

  it("sortVehiclesByPrice function", () => {
    expect(
      sortVehiclesByPrice([
        { name: "Executor Star Dreadnought", price: 999 },
        { name: "T-47 Airspeeder", price: 5 },
        { name: "AT-AT", price: 20 },
      ]),
    ).toStrictEqual([
      { name: "T-47 Airspeeder", price: 5 },
      { name: "AT-AT", price: 20 },
      { name: "Executor Star Dreadnought", price: 999 },
    ]);
  });

  it("getVehiclesAndTopSpeed function", () => {
    expect(
      getVehiclesAndTopSpeed([
        {
          name: "Executor Star Dreadnought",
          measuredSpeeds: [555, 545, 577, 600],
        },
        {
          name: "T-47 Airspeeder",
          measuredSpeeds: [300, 311, 299, 350],
        },
        {
          name: "AT-AT",
          measuredSpeeds: [20, 21, 20, 19],
        },
      ]),
    ).toStrictEqual([
      { name: "Executor Star Dreadnought", topSpeed: 600 },
      { name: "T-47 Airspeeder", topSpeed: 350 },
      { name: "AT-AT", topSpeed: 21 },
    ]);
  });

  it("sortPeopleByLastname function", () => {
    expect(
      sortPeopleByLastname([
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
      ]),
    ).toStrictEqual([
      { name: "Alfred Christiansen" },
      { name: "Lillian Conroy" },
      { name: "Kim Herman" },
      { name: "Felicia Pollich" },
      { name: "Harriet Raynor" },
      { name: "Gabriel Romaguera" },
      { name: "Cary Walsh" },
      { name: "Lauren Williamson" },
      { name: "Mr. Geraldine Windler" },
      { name: "Harry Zieme" },
    ]);
  });

  it("summarizeVehicles function", () => {
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
    const result = {
      types: [
        { type: "Hatchback", count: 3 },
        { type: "SUV", count: 3 },
        { type: "Minivan", count: 3 },
        { type: "Convertible", count: 2 },
        { type: "Wagon", count: 2 },
        { type: "Sedan", count: 2 },
        { type: "Cargo Van", count: 2 },
        { type: "Extended Cab Pickup", count: 1 },
        { type: "Crew Cab Pickup", count: 1 },
        { type: "Coupe", count: 1 },
      ],
      colors: [
        { color: "lime", count: 3 },
        { color: "fuchsia", count: 3 },
        { color: "silver", count: 2 },
        { color: "green", count: 1 },
        { color: "lavender", count: 1 },
        { color: "ivory", count: 1 },
        { color: "olive", count: 1 },
        { color: "orchid", count: 1 },
        { color: "violet", count: 1 },
        { color: "magenta", count: 1 },
        { color: "white", count: 1 },
        { color: "gold", count: 1 },
        { color: "blue", count: 1 },
        { color: "sky blue", count: 1 },
        { color: "maroon", count: 1 },
      ],
      top3Manufactures: [
        { manufacture: "Mercedes Benz", count: 3 },
        { manufacture: "Bugatti", count: 2 },
        { manufacture: "Tesla", count: 2 },
      ],
    };
    expect(summarizeVehicles(vehicles)).toStrictEqual(result);
  });
});
