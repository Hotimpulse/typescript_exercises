interface Person {
  age: number;
  username: string;
  password: string;
}

const obj = {
  age: 25,
  username: "Lev",
} as Person;

// const obj2 = <Person> {
//   age: 25,
//   username: "Lev",
// } ;

// const str = "123123" as unknown as number;

const obj3 = {
  age: 25,
  username: "Lev",
  password: "123",
} satisfies Person;

// 'as' can be used in configs, webpack, tests, working with html elements; should not be used in prod

// helper, utility parser
function JSONParse<T>(data: string): T {
  return JSON.parse(data) as T;
}
// const parsedJSON = JSONParse<Person>("{age: 25}"); or
const parsedJSON: Person = JSON.parse("{age: 25}");

async function fn() {
  const data = await fetch("");
  const parsedData = await data.json();
}

//

const PersonKeys = {
  age: "age",
  username: "username",
  password: "password",
} as const;

// Array<age | username | password>
// const majorKeys = Object.keys(obj);
// Good case for type assertion below

function keys<T extends object>(data: T): Array<keyof T> {
  return Object.keys(data) as Array<keyof T>;
}

const k = keys(obj);
