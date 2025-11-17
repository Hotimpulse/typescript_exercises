// typeof ///////////////////////////////

const obj = {
  name: "Lev",
  age: 25,
};

type Person = typeof obj;

let color = "red" as const; // if we were to use const, then we'd get a type error

type RedColor = typeof color;

const green: RedColor = "green";

function getData(user: Person): number {
  return 5;
}

type GetDataFn = typeof getData;

type GetDataReturnValue = ReturnType<typeof getData>; // gets the number return type from getData

type GetDataParamsValue = Parameters<typeof getData>; // gets the number return type from getData

// keyof ///////////////////////////////

type PersonKey = keyof typeof obj;

function getByKey<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const num = getByKey(obj, "age");

// optional ///////////////////////////////

interface Person2 {
  name: string;
  address?: {
    street: string;
  };
  getData?: () => number;
  array?: string[];
}

function prepareUser(user: Person2) {
  console.log(user.address?.street);
  console.log(user.getData?.());
  console.log(user.array?.[0]);
}

// prepareUser(obj);

// non-null assertion ///////////////////////////////

function prepareUser2(user: Person2) {
  console.log(user.address!.street); // not safe
}

prepareUser2(obj);
