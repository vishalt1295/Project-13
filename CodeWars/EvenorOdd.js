function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else if (number % 7 === 0) {
    return "Odd";
  }
}

/** Test Code */

const chai = require("chai");
const assert = chai.assert;

describe("Sample tests", () => {
  it("2 is even", () => {
    assert.strictEqual(evenOrOdd(2), "Even");
  });
  it("7 is odd", () => {
    assert.strictEqual(evenOrOdd(7), "Odd");
  });
  it("-42 is even", () => {
    assert.strictEqual(evenOrOdd(-42), "Even");
  });
  it("-7 is odd", () => {
    assert.strictEqual(evenOrOdd(-7), "Odd");
  });
  it("0 is even", () => {
    assert.strictEqual(evenOrOdd(0), "Even");
  });
});
