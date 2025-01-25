import { None } from "./none.js";
import type { Option } from "./option.js";
import { some } from "./some.js";

export const fromNullable = <A>(a: A | null | undefined): Option<A> => {
  if (a !== null && a !== undefined) {
    return some<A>(a);
  } else {
    return None.value;
  }
};
