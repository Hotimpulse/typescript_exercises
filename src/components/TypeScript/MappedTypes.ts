interface User {
  name: string;
  age: number;
  friends: Array<string>;
}

// interface User2 {
//   name?: string;
//   age?: number;
//   friends?: Array<string>;
// }

type OptionalType<T> = {
  readonly [key in keyof T]?: T[key] | null;
};

type NewUser = OptionalType<User>;

type EditType<T> = {
  -readonly [key in keyof T]-?: T[key] | null;
};

type NewUser2 = EditType<User>;

type ArrayAnalog<T> = {
  [K in string]: T;
};

// const array: ArrayAnalog<string> = ["123", "123"];
const array: ArrayAnalog<string> = {
  "123": "123",
  5: "123",
};

/////////////////

interface User2 {
  name: string;
  age: number;
  type: string;
  friends: Array<string>;
}

interface Car {
  name: string;
  type: string;
}

interface RandomObj {
  name: string;
  type: string;
}

type WithoutType<T> = {
  [K in keyof T as Exclude<K, "type">]: T[K];
};

const withoutType: WithoutType<Car> = {};

/////

type GetMethods<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: T[K];
};

// const withoutType2: GetMethods<Car> = {
//     // getName
//     // getType
// };

type UpperCase<T> = {
  [K in keyof T as `${Capitalize<string & K>}`]: T[K];
};

const withoutType3: UpperCase<Car> = {
  // Name
  // Type
};

// Exclude works like this:

// type Exclude<T, K> = T extends K ? never : T;
