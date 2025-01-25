const enum Tag {
  Ok = "Ok",
  Error = "Error",
}

interface Ok<A> {
  readonly _tag: Tag.Ok;
  readonly value: A;
}

interface Error<E> {
  readonly _tag: Tag.Error;
  readonly value: E;
}

export type Result<A, E> = Ok<A> | Error<E>;

export const ok = <A = never, E = never>(value: A): Result<A, E> => ({
  _tag: Tag.Ok,
  value,
});

export const error = <A = never, E = never>(value: E): Result<A, E> => ({
  _tag: Tag.Error,
  value,
});

export const isOk = <A, E>(result: Result<A, E>): result is Ok<A> =>
  result._tag === Tag.Ok;

export const isError = <A, E>(result: Result<A, E>): result is Error<E> =>
  result._tag === Tag.Error;
