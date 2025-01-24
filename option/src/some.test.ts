import { none, some, type Option } from "./index.js";

describe("some", () => {
  it("creates a none option", () => {
    const option: Option<number> = some(0);

    expect(option).toBeTruthy();
  });

  it("equals itself", () => {
    const option: Option<number> = some(0);

    expect(option).toEqual(option);
  });

  it("does not equal none", () => {
    const option: Option<number> = some(0);

    expect(option).not.toEqual(none);
  });

  it("is some", () => {
    const option: Option<number> = some(0);

    expect(option.isSome()).toBeTruthy();
  });

  it("is some and", () => {
    const option: Option<number> = some(0);

    expect(option.isSomeAnd((n) => n === 0)).toBeTruthy();
  });

  it("is not none", () => {
    const option: Option<number> = some(0);

    expect(option.isNone()).not.toBeTruthy();
  });

  it("is not none or", () => {
    const option: Option<number> = some(0);

    expect(option.isNoneOr(() => true)).toBeTruthy();
  });

  it("maps", () => {
    const option: Option<number> = some(0).map(() => 1);

    expect(option).toEqual(some(1));
  });

  it("flatMaps", () => {
    const option: Option<number> = some(0).flatMap(() => some(1));

    expect(option).toEqual(some(1));
  });

  it("folds to some handler", () => {
    const result = some(0).fold(
      () => 1,
      () => 2,
    );

    expect(result).toStrictEqual(2);
  });

  it("return on expect", () => {
    const result = some(0).expect("Boom!");

    expect(result).toStrictEqual(0);
  });

  it("inspect value", () => {
    let proof: number | null = null;

    some(0).inspect((a) => {
      proof = a;
    });

    expect(proof).toStrictEqual(0);
  });
});
