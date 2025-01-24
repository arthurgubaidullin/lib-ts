import { none, some, type Option } from "./index.js";

describe("none", () => {
  it("creates none", () => {
    const option: Option<number> = none;

    expect(option).toBeTruthy();
  });

  it("equals itself", () => {
    const option: Option<number> = none;

    expect(option).toEqual(option);
  });

  it("does not equal some", () => {
    const option: Option<number> = none;

    expect(option).not.toEqual(some(0));
  });

  it("is none", () => {
    const option: Option<number> = none;

    expect(option.isNone()).toBeTruthy();
  });

  it("is not some", () => {
    const option: Option<number> = none;

    expect(option.isSome()).not.toBeTruthy();
  });

  it("does not map", () => {
    const option: Option<number> = none.map(() => 1);

    expect(option.isNone()).toBeTruthy();
  });

  it("does not flatMap", () => {
    const option: Option<number> = none.flatMap(() => some(1));

    expect(option.isNone()).toBeTruthy();
  });

  it("folds to none handler", () => {
    const result = none.fold(
      () => 1,
      () => 2,
    );

    expect(result).toStrictEqual(1);
  });

  it("throws on expect", () => {
    const f = () => none.expect("Boom!");

    expect(f).toThrowError("Boom!");
  });
});
