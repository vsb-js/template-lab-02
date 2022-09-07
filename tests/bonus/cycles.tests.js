import { buzzIterate, drawJavascriptWord, drawTriangle } from "../../cycles.js";

describe("Cycles", () => {
  it("buzzIterate function", () => {
    let result =
      "FizzBuzzFizzFizzBuzzFizzFizzBuzzFizzBuzzFizzFizzBuzzFizzFizzBuzzFizzBuzzFizzFizzBuzzFizzFizzBuzzFizzBuzzFizzFizzBuzzFizzFizzBuzzFizzBuzzFizzFizzBuzzFizzFizzBuzzFizzBuzzFizzFizzBuzzFizzFizzBuzzFizzBuzzFizzFizzBuzz";
    let output = "";
    let outputFunc = (text) => {
      text = text.toString().trim();
      text = text.replace(/\s/g, "");
      text = text.replace(/\\r\\n/g, "");
      text = text.replace(/\\n\\n/g, "");
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
      text = text.replace(/\\r\\n/g, "\n");
      text = text.replace(/\\n\\n/g, "\n");
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
      text = text.replace(/\\r\\n/g, "\n");
      text = text.replace(/\\n\\n/g, "\n");
      output += text + "\n";
    };
    console.log = outputFunc;
    console.info = outputFunc;
    drawJavascriptWord();
    expect(output).toStrictEqual(result);
  });
});
