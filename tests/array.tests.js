import {
  createDupes,
  printArray,
  printAverage,
  printEvenNums,
  printFirstItem,
  printLargestItem,
  printLargestsIndex,
  printLastItem,
  printLength,
  printMessageForSmallestBelow10,
  printNumsMultipliedBy2,
  printSALDifference,
  printSmallestItem,
  printSum,
  splitEvenOdds,
} from "../array.js";

describe("Arrays", () => {
  it("printArray function", () => {
    let output = "";
    let outputFunc = (text) => (output += JSON.stringify(text));
    console.log = outputFunc;
    console.info = outputFunc;
    printArray([1, 2, 3]);
    expect(output).toEqual("[1,2,3]");
  });

  it("printLength function", () => {
    let output = "";
    let outputFunc = (text) => (output += text);
    console.log = outputFunc;
    console.info = outputFunc;
    printLength([1, 2, 3]);
    expect(output).toEqual("3");
  });

  it("printFirstItem function", () => {
    let output = "";
    let outputFunc = (text) => (output += text);
    console.log = outputFunc;
    console.info = outputFunc;
    printFirstItem([1, 2, 3]);
    expect(output).toEqual("1");
  });

  it("printLastItem function", () => {
    let output = "";
    let outputFunc = (text) => (output += text);
    console.log = outputFunc;
    console.info = outputFunc;
    printLastItem([1, 2, 3]);
    expect(output).toEqual("3");
  });

  it("printLargestItem function", () => {
    let output = "";
    let outputFunc = (text) => (output += text);
    console.log = outputFunc;
    console.info = outputFunc;
    printLargestItem([1, 2, 15, 7, 0, 4, 3]);
    expect(output).toEqual("15");
  });

  it("printSmallestItem function", () => {
    let output = "";
    let outputFunc = (text) => (output += text);
    console.log = outputFunc;
    console.info = outputFunc;
    printSmallestItem([1, 2, 15, 7, 0, 4, 3]);
    expect(output).toEqual("0");
  });

  it("printSum function", () => {
    let output = "";
    let outputFunc = (text) => (output += text);
    console.log = outputFunc;
    console.info = outputFunc;
    printSum([1, 2, 15, 7, 0, 4, 3]);
    expect(output).toEqual("32");
  });

  it("printSALDifference function", () => {
    let output = "";
    let outputFunc = (text) => (output += text);
    console.log = outputFunc;
    console.info = outputFunc;
    printSALDifference([1, 2, 15, 7, 0, 4, 3]);
    expect(output).toEqual("15");
  });

  it("printAverage function", () => {
    let output = "";
    let outputFunc = (text) => (output += text);
    console.log = outputFunc;
    console.info = outputFunc;
    printAverage([1, 2, 15, 7, 0, 4, 3]);
    expect(output).toEqual("4.571428571428571");
  });

  it("printAverage function", () => {
    let output = "";
    let outputFunc = (text) => (output += text);
    console.log = outputFunc;
    console.info = outputFunc;
    printAverage([1, 2, 15, 7, 0, 4, 3]);
    expect(output).toEqual("4.571428571428571");
  });

  it("printLargestsIndex function", () => {
    let output = "";
    let outputFunc = (text) => (output += text);
    console.log = outputFunc;
    console.info = outputFunc;
    printLargestsIndex([1, 2, 15, 7, 0, 4, 3]);
    expect(output).toEqual("2");
  });

  it("printEvenNums function", () => {
    let output = "";
    let outputFunc = (text) => {
      text = text.toString().trim();
      text = text.replace(/\s/g, "");
      text = text.replace(/\\r\\n/g, "\n");
      text = text.replace(/\\n\\n/g, "\n");
      output += text;
    };
    console.log = outputFunc;
    console.info = outputFunc;
    printEvenNums([1, 2, 15, 7, 0, 4, 3]);
    expect(output).toEqual("204");

    output = "";
    outputFunc = (text) => (output += text);
    console.log = outputFunc;
    console.info = outputFunc;
    printEvenNums([1, 3, 5, 7]);
    expect(output).toEqual("Even number isn't in array");
  });

  it("printNumsMultipliedBy2 function", () => {
    let output = "";
    let outputFunc = (text) => (output += JSON.stringify(text));
    console.log = outputFunc;
    console.info = outputFunc;
    printNumsMultipliedBy2([1, 2, 3]);
    expect(output).toEqual("[2,4,6]");
  });

  it("printMessageForSmallestBelow10 function", () => {
    let output = "";
    let outputFunc = (text) => (output += text);
    console.log = outputFunc;
    console.info = outputFunc;
    printMessageForSmallestBelow10([1, 2, 3]);
    expect(output).toEqual("Wow, this 1 is very small");
  });

  it("createDupes function", () => {
    expect(createDupes([1, 2, 15, 7, 0, 4, 3])).toStrictEqual([
      1, 1, 2, 2, 15, 15, 7, 7, 0, 0, 4, 4, 3, 3,
    ]);
  });

  it("splitEvenOdds function", () => {
    expect(splitEvenOdds([1, 2, 15, 7, 0, 4, 3])).toStrictEqual([
      [2, 0, 4],
      [1, 15, 7, 3],
    ]);
  });
});
