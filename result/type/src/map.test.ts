import { map } from "./map.js";
import { error, ok } from "./type.js";
import { pipe } from "@arthurgubaidullin/function";

const double = (a: number) => a * 2;

it("map", () => {
  expect(
    pipe(
      ok("test"),
      map(() => "ok"),
    ),
  ).toEqual(ok("ok"));

  expect(pipe(ok(2), map(double), map(double))).toEqual(ok(8));

  expect(pipe(error("error"), map(double), map(double))).toEqual(
    error("error"),
  );
});
