interface Car {
  maxSpeed: number;
  width: number;
}

interface BMW extends Car {
  type: "BMW";
}

interface Audi extends Car {
  type: "Audi";
}

interface Person {
  age: number;
  name: string;
}

function isCar(value: BMW | Audi): value is BMW {
  return value.type === "BMW";
}

function isPerson(value: Car | Person): value is Audi {
  return "age" in value && "name" in value;
}

function fn(data: Car | Person) {
  if (isCar(data)) {
    // data.type;
  }
}
