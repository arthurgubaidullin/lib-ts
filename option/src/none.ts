import { type Option } from "./option.js";

class None implements Option<unknown> {
  readonly _tag = "None" as const;

  constructor() {
    Object.freeze(this);
  }

  isSome(this: this) {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isSomeAnd<A>(this: this, f: (a: A) => boolean) {
    return false;
  }

  isNone(this: this) {
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isNoneOr<A>(this: this, predicate: (a: A) => boolean) {
    return this.isNone();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  map<A, B>(this: this, f: (a: A) => B) {
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  flatMap<A, B>(this: this, f: (a: A) => Option<B>) {
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fold<A, B>(this: this, onNone: () => B, onSome: (a: A) => B) {
    return onNone();
  }

  expect<A>(this: this, message: string): A {
    throw new Error(message);
  }

  unwrapOr<A>(this: this, defaultValue: A) {
    return defaultValue;
  }

  unwrapOrElse<A>(this: this, f: () => A) {
    return f();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  inspect<A>(this: this, f: (a: A) => void) {
    return this;
  }
}

export const none = new None();
