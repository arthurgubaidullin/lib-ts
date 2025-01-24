export interface Option<A> {
  readonly isSome: () => boolean;

  readonly isSomeAnd: (f: (a: A) => boolean) => boolean;

  readonly isNone: () => boolean;

  readonly isNoneOr: (predicate: (a: A) => boolean) => boolean;

  readonly map: <B>(f: (a: A) => B) => Option<B>;

  readonly mapOr: <B>(defaultValue: B, f: (a: A) => B) => B;

  readonly mapOrElse: <B>(g: () => B, f: (a: A) => B) => B;

  readonly flatMap: <B>(f: (a: A) => Option<B>) => Option<B>;

  readonly fold: <B>(onNone: () => B, onSome: (a: A) => B) => B;

  readonly expect: (message: string) => A;

  readonly unwrapOr: (defaultValue: A) => A;

  readonly unwrapOrElse: (f: () => A) => A;

  readonly inspect: (f: (a: A) => void) => Option<A>;

  readonly and: <B>(b: Option<B>) => Option<B>;
}
