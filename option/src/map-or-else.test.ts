import { none, some } from "./index.js";

describe("option", () => {
  it("mapOrElse()", () => {
    expect(
      none.mapOrElse(
        () => 1,
        () => 2,
      ),
    ).toStrictEqual(1);
    expect(
      some(2).mapOrElse(
        () => 1,
        (a) => a,
      ),
    ).toStrictEqual(2);
  });
});
