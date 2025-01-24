import { none, some } from "./index.js";

const isEven = (n: number) => n % 2 === 0;

describe("filter()", () => {
  it("returns none for none", () => {
    expect(none.filter(isEven)).toEqual(none);
  });

  it("returns none for non-matching value", () => {
    expect(some(3).filter(isEven)).toEqual(none);
  });

  it("returns some for matching value", () => {
    expect(some(2).filter(isEven)).toEqual(some(2));
  });
});
