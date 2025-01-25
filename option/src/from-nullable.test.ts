import { fromNullable, None, Some } from "./index.js";

describe("fromNullable()", () => {
  it("returns None for undefined", () => {
    assert.deepStrictEqual(fromNullable(undefined), None.value);
  });

  it("returns None for null", () => {
    assert.deepStrictEqual(fromNullable(null), None.value);
  });

  it("returns Some for non-null value", () => {
    assert.deepStrictEqual(fromNullable(1), Some.of(1));
  });
});
