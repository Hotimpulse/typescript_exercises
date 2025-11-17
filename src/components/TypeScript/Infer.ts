type IsString<T> = T extends string ? true : false;

function fn(arg1: string, arg2: number): string {
  return "";
}

type MyParameters<T> = T extends (...arg: infer U) => any ? U : never;
type MyReturnType<T> = T extends (...args: any) => infer U ? U : never;

type FnArg = MyParameters<typeof fn>;
type FnArg2 = MyReturnType<typeof fn>;

type GetArrayItem<T extends any[]> = T extends (infer ItemType)[] ? ItemType : never;

const arr: number[] = [];

type ArrayItem = GetArrayItem<typeof arr>;
