import { type Result, isOk } from "./type.js";

export const fold =
  <A, B, E>(onOk: (value: A) => B, onError: (error: E) => B) =>
  (result: Result<A, E>): B => {
    if (isOk(result)) {
      return onOk(result.value);
    } else {
      return onError(result.value);
    }
  };
