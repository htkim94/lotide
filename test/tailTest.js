const assert = require("chai").assert;
const tail = require("../tail");

//Test Code
describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });

  it("should return ['is', 'test'] for ['this', 'is', 'test']", () => {
    assert.deepEqual(tail(['this', 'is', 'test']), ['is', 'test']);
  });
});
