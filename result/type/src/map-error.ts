import { type Result, isOk, error } from "./type.js";

export const mapError =
  <A, E, E2>(f: (error: E) => E2) =>
  (result: Result<A, E>): Result<A, E2> => {
    if (isOk(result)) {
      return result;
    } else {
      return error(f(result.value));
    }
  };
