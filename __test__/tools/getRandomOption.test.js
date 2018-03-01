// @flow
import getRandomOption from "./../../src/tools/getRandomOption";

describe("getRandomOption Testing", () => {
  it("should return one of the 3 options of an array", () => {
    const options = ["firstValue", "secondValue", "thirdValue"];
    const value = getRandomOption(options);

    expect(options).toContain(value);
  });
  it("should not return a value if options is not an array", () => {
    const options = "firstValue";
    const value = getRandomOption(options);
    expect(value).toBeNull();
  });
});
