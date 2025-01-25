import { isOk, ok, type Result } from "./type.js";

export const map =
  <A, B, E>(f: (a: A) => B) =>
  (result: Result<A, E>): Result<B, E> => {
    if (isOk(result)) {
      return ok(f(result.value));
    } else {
      return result;
    }
  };
