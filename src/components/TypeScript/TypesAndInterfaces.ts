type Literal = "red" | "green";

type Id = number;

interface Base {
  username: string;
  age: number;
}

// interface User extends Base {
//   password: string;
// }

// type User = Base & { // less efficient
//   password: string;
// };

// every type should have a unique name, while interfaces can extend each other with the same name

interface Base {
  password: string;
}

const user: Base = {};

// tuple example

type Tuple = [number, string, 5];

const someTuple: Tuple = [5, "1", 5];

// type SetState<T> = [T, (newValue: T) => void];

type Fn = (arg: number) => void;

interface Fn2 {
  (arg: number): string;
}

const fn: Fn = (arg: number) => {
  return "123";
};

const fn2: Fn2 = (arg: number) => {
  return "123";
};
