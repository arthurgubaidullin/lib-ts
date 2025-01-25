import { type Result, isOk } from "./type.js";

export const flatMap =
  <A, B, E>(f: (a: A) => Result<B, E>) =>
  (result: Result<A, E>): Result<B, E> => {
    if (isOk(result)) {
      return f(result.value);
    } else {
      return result;
    }
  };
