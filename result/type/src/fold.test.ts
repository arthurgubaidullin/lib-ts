import { pipe } from "@arthurgubaidullin/function";
import * as Result from "./index.js";

it("fold", () => {
  expect(
    pipe(
      Result.ok("test"),
      Result.fold(
        (a) => a,
        () => "ok",
      ),
    ),
  ).toEqual("test");

  expect(
    pipe(
      Result.error<number, Error>(new Error("error")),
      Result.fold(
        (a) => a.toString(),
        (e) => e.message,
      ),
    ),
  ).toEqual("error");
});
