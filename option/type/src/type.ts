const enum Tag {
  Some = "Some",
  None = "None",
}

interface Some<A> {
  readonly _tag: Tag.Some;
  readonly value: A;
}

interface None {
  readonly _tag: Tag.None;
}

export type Option<A> = Some<A> | None;

export const isSome = <A>(option: Option<A>): option is Some<A> =>
  option._tag === Tag.Some;

export const isNone = <A>(option: Option<A>): option is None =>
  option._tag === Tag.None;

export const some = <A>(value: A): Some<A> =>
  Object.freeze({ _tag: Tag.Some, value });

export const none: Option<never> = Object.freeze({ _tag: Tag.None });
