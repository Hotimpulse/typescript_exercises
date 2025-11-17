interface User {
  name: string;
  age: number;
}

function assertsIsUser(data: any): asserts data is User {
  if (typeof data !== "object" || data === null) {
    throw new Error("Object expected");
  }

  if (typeof data.name !== "string") {
    throw new Error("String expected");
  }

  if (typeof data.age !== "number") {
    throw new Error("Number expected");
  }
}

function assertNotNull(value: unknown): asserts value {
  if (value === null || value === undefined) {
    throw new Error("Value is null or undefined");
  }
}

// try {
//   assertNotNull(null);
// } catch (error) {
//   console.log(error);
// }

function perpareUser(obj: User) {
  console.log(obj);
}

const obj = {
  name: "Lev",
};

// perpareUser(obj);

assertsIsUser(obj);

perpareUser(obj);
