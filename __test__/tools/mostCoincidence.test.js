// @flow
import mostCoincidence from "./../../src/tools/mostCoincidence";

describe.skip("mostCoincidence Function", () => {
  it("should return the most repeated object options in an array", () => {
    const options = [
      { _id: 1, option: "firstValue" },
      { _id: 3, option: "thirdValue" },
      { _id: 1, option: "firstValue" },
      { _id: 1, option: "firstValue" }
    ];

    expect(mostCoincidence(options)).toEqual(options[0]);
  });
  it("should return the last most repeated object options in an array if there are the same amount of differents options", () => {
    const options = [
      { _id: 1, option: "firstValue" },
      { _id: 3, option: "thirdValue" },
      { _id: 2, option: "secondValue" },
      { _id: 1, option: "firstValue" },
      { _id: 2, option: "secondValue" }
    ];

    expect(mostCoincidence(options)).toEqual(options[4]);
  });
  it("should return null if pass in a empty array", () => {
    const options = [];

    expect(mostCoincidence(options)).toBeNull();
  });
});
