import * as Result from "./index.js";

it("ok", () => {
  expect(Result.ok("test")).toEqual(Result.ok("test"));
  expect(Result.isOk(Result.ok("test"))).toBeTruthy();
  expect(Result.isError(Result.ok("test"))).not.toBeTruthy();
});

it("error", () => {
  expect(Result.error("test")).toEqual(Result.error("test"));
  expect(Result.isOk(Result.error("test"))).not.toBeTruthy();
  expect(Result.isError(Result.error("test"))).toBeTruthy();
});
