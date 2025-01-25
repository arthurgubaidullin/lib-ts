import { pipe } from "@arthurgubaidullin/function";
import * as Result from "./index.js";

const double = (a: number): Result.Result<number, Error> => Result.ok(a * 2);

it("flat-map", () => {
  expect(
    pipe(
      Result.ok("test"),
      Result.flatMap(() => Result.ok("ok")),
    ),
  ).toEqual(Result.ok("ok"));

  expect(
    pipe(
      Result.ok<number, Error>(2),
      Result.flatMap(double),
      Result.flatMap(double),
    ),
  ).toEqual(Result.ok(8));

  expect(
    pipe(
      Result.error<number, Error>(new Error("error")),
      Result.flatMap(double),
      Result.flatMap(double),
    ),
  ).toEqual(Result.error(new Error("error")));
});
