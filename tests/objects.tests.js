import {
  getBudgets,
  personObject,
  sortVehiclesByPrice,
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
});
