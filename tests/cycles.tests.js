import {
  arrayOfMultiples,
  biggerArray,
  buzzIterate,
  changeDirection,
  drawJavascriptWord,
  drawTriangle,
  negative,
  returnUnique,
} from "../cycles.js";

describe("Cycles", () => {
  it("arrayOfMultiples function", () => {
    expect(arrayOfMultiples(7, 5)).toStrictEqual([7, 14, 21, 28, 35]);
    expect(arrayOfMultiples(12, 10)).toStrictEqual([
      12, 24, 36, 48, 60, 72, 84, 96, 108, 120,
    ]);
    expect(arrayOfMultiples(17, 6)).toStrictEqual([17, 34, 51, 68, 85, 102]);
  });

  it("changeDirection function", () => {
    expect(changeDirection([0, 1, 2, 3])).toStrictEqual([3, 2, 1, 0]);
    expect(changeDirection([])).toStrictEqual([]);
    expect(changeDirection([1, 2])).toStrictEqual([2, 1]);
  });

  it("biggerArray function", () => {
    expect(biggerArray([1, 2, 3, 4, 5], [50, 50])).toStrictEqual({
      array: [50, 50],
      sum: 100,
    });
    expect(biggerArray([1, 2, 3], [2, 3, 4])).toStrictEqual({
      array: [2, 3, 4],
      sum: 9,
    });
  });

  it("returnUnique function", () => {
    expect(returnUnique([1, 9, 8, 8, 7, 6, 1, 6])).toStrictEqual([9, 7]);
    expect(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1])).toStrictEqual([2, 1]);
    expect(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8])).toStrictEqual(
      [5, 6],
    );
  });

  it("buzzIterate function", () => {
    let result =
      "FizzBuzzFizzFizzBuzzFizzFizzBuzzFizzBuzzFizzFizzBuzzFizzFizzBuzzFizzBuzzFizzFizzBuzzFizzFizzBuzzFizzBuzzFizzFizzBuzzFizzFizzBuzzFizzBuzzFizzFizzBuzzFizzFizzBuzzFizzBuzzFizzFizzBuzzFizzFizzBuzzFizzBuzzFizzFizzBuzz";
    let output = "";
    let outputFunc = (text) => {
      text = text.toString().trim();
      text = text.replace("/\s/g", "");
      text = text.replace("/\\r\\n/g", "");
      text = text.replace("/\\n\\n/g", "");
      output += text;
    };
    console.log = outputFunc;
    console.info = outputFunc;
    buzzIterate();
    expect(output).toStrictEqual(result);
  });

  it("drawTriangle function", () => {
    let result = "*\n**\n***\n****\n*****\n";
    let output = "";
    let outputFunc = (text) => {
      text = text.toString().trim();
      text = text.replace("/\\r\\n/g", "\n");
      text = text.replace("/\\n\\n/g", "\n");
      output += text + "\n";
    };
    console.log = outputFunc;
    console.info = outputFunc;
    drawTriangle();
    expect(output).toStrictEqual(result);
  });

  it("drawJavascriptWord function", () => {
    let result =
      "* * * * * * * * * *\n* * * * * * * * * T\n* * * * * * * * P T\n* * * * * * * I P T\n* * * * * * R I P T\n* * * * * C R I P T\n* * * * S C R I P T\n* * * A S C R I P T\n* * V A S C R I P T\n* A V A S C R I P T\nJ A V A S C R I P T\n";
    let output = "";
    let outputFunc = (text) => {
      text = text.toString().trim();
      text = text.replace("/\\r\\n/g", "\n");
      text = text.replace("/\\n\\n/g", "\n");
      output += text + "\n";
    };
    console.log = outputFunc;
    console.info = outputFunc;
    drawJavascriptWord();
    expect(output).toStrictEqual(result);
  });

  it("negative function", () => {
    expect(negative([0, 1, 2])).toEqual([0, -1, -2]);
    expect(negative([-1, 2, -3])).toEqual([1, -2, 3]);
  });
});
