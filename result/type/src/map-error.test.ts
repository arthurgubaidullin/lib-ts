import { pipe } from "@arthurgubaidullin/function";
import * as Result from "./index.js";

const double = (a: number) => a * 2;

it("map-error", () => {
  expect(
    pipe(
      Result.ok("test"),
      Result.mapError(() => "ok"),
    ),
  ).toEqual(Result.ok("test"));

  expect(
    pipe(Result.ok(2), Result.mapError(double), Result.mapError(double)),
  ).toEqual(Result.ok(2));

  expect(
    pipe(Result.error(2), Result.mapError(double), Result.mapError(double)),
  ).toEqual(Result.error(8));
});
