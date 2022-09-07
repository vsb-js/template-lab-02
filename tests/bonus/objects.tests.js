import {
  getBudgets,
  getVehiclesAndTopSpeed,
  sortVehiclesByPrice,
} from "../../objects.js";

describe("Objects", () => {
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

});
