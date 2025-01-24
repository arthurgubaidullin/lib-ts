import { add } from "./index.js";

describe("index", () => {
  it("add", () => {
    expect(add(2, 2)).toStrictEqual(2 + 2);
  });
});
