import { pipe } from "@arthurgubaidullin/function";
import { mapError } from "./map-error.js";
import { error, ok } from "./type.js";

const double = (a: number) => a * 2;

it("map-error", () => {
  expect(
    pipe(
      ok("test"),
      mapError(() => "ok"),
    ),
  ).toEqual(ok("test"));

  expect(pipe(ok(2), mapError(double), mapError(double))).toEqual(ok(2));

  expect(pipe(error(2), mapError(double), mapError(double))).toEqual(error(8));
});
