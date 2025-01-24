import { none, some } from "./index.js";

describe("or()", () => {
  it("returns none when both are none", () => {
    const x = none;
    const y = none;

    expect(x.or(y)).toEqual(none);
  });

  it("returns x when x is some and y is none", () => {
    const x = some(0);
    const y = none;

    expect(x.or(y)).toEqual(some(0));
  });

  it("returns y when x is none and y is some", () => {
    const x = none;
    const y = some(0);

    expect(x.or(y)).toEqual(some(0));
  });

  it("returns x when both are some", () => {
    const x = some(0);
    const y = some(1);

    expect(x.or(y)).toEqual(some(0));
  });
});
