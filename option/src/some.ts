import { type Option } from "./option.js";

class Some<A> implements Option<A> {
  readonly _tag = "Some" as const;

  constructor(public readonly value: A) {
    Object.freeze(this);
  }

  isSome(this: this) {
    return true;
  }

  isSomeAnd(this: this, f: (a: A) => boolean) {
    return this.isSome() && f(this.value);
  }

  isNone(this: this) {
    return false;
  }

  isNoneOr(this: this, predicate: (a: A) => boolean) {
    return predicate(this.value);
  }

  map<B>(this: this, f: (a: A) => B) {
    return new Some(f(this.value));
  }

  flatMap<B>(this: this, f: (a: A) => Option<B>) {
    return f(this.value);
  }

  fold<B>(onNone: () => B, onSome: (a: A) => B) {
    return onSome(this.value);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  expect(message: string): A {
    return this.value;
  }
}

export const some = <A>(a: A) => new Some<A>(a);
