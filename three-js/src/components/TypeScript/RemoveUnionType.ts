/* eslint-disable @typescript-eslint/no-unused-vars */
export type Letters = "a" | "b" | "c";

type RemoveC<TType> = TType extends "c" ? never : TType;

type SomeWithoutC = RemoveC<Letters>;
