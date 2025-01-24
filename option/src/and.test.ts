import { none, some } from "./index.js";

describe("and()", () => {
  it("returns none when both are none", () => {
    const x = none;
    const y = none;

    expect(x.and(y)).toEqual(none);
  });

  it("returns none when x is some and y is none", () => {
    const x = some(0);
    const y = none;

    expect(x.and(y)).toEqual(none);
  });

  it("returns none when x is none and y is some", () => {
    const x = none;
    const y = some(0);

    expect(x.and(y)).toEqual(none);
  });

  it("returns y when both are some", () => {
    const x = some(0);
    const y = some(1);

    expect(x.and(y)).toEqual(some(1));
  });
});
