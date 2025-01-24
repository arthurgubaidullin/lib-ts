import { none, some } from "./index.js";

describe("option", () => {
  it("mapOr()", () => {
    expect(none.mapOr(1, () => 2)).toStrictEqual(1);
    expect(some(2).mapOr(1, (a) => a)).toStrictEqual(2);
  });
});
