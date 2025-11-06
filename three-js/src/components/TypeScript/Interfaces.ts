interface User {
  username: string;
  age: number;
}

interface Person {
  lastname: string;
  firstname: string;
  age: number;
}

function fn3(arg: User | Person) {
  if ("username" in arg) {
    // arg.age || arg.username;
  }

  if ("firstname" in arg) {
    // arg.age || arg.firstname || arg.lastname
  }
}

// instanceof way of types || only works with classes

class BMW {
  bmwDrive() {}
}

class Audi {
  audiDrive() {}
}

const bmw = new BMW();
const audi = new Audi();

function fn4(arg: BMW | Audi) {
  if (arg instanceof BMW) {
    arg.bmwDrive(); // instance of BMW
  } else {
    arg.audiDrive(); // instance of Audi
  }
}
