import { giveSentenceForPerson, parametrize, replace } from "../strings.js";

describe("Strings", () => {
  it("parametrize function", () => {
    let result = parametrize("Javascript is the best");
    expect(result).toBe("javascript-is-the-best");
  });

  it("giveSentenceForPerson function", () => {
    let result = giveSentenceForPerson({
      name: "Obi-wan",
      position: "Jedi",
      age: 40,
      location: "Starwars universe",
    });
    expect(result).toBe(
      "Hello Obi-wan from Starwars universe! It is nice to meet you! You look awesome for your 40, young Jedi!",
    );
  });

  it("replace function", () => {
    let result = replace("Hello Javascript");
    expect(result).toBe("H*ll* J*v*scr*pt");
  });
});
