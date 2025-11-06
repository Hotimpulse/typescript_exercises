// instanceof way of types || only works with classes

// class BMW {
//   bmwDrive() {}
// }

// class Audi {
//   audiDrive() {}
// }

interface baseCar {
  maxSpeed: number;
  weight: number;
}

interface BMW extends baseCar {
  type: "BMW";
  bmwField: string;
}

interface Audi extends baseCar {
  type: "Audi";
  audiField: string;
}

interface Toyota extends baseCar {
  type: "Toyota";
  toyotaField: string;
}

type TCar = Audi | BMW | Toyota;

function fn5(arg: TCar) {
  switch (arg.type) {
    case "Audi":
      arg.audiField;
      break;
    case "BMW":
      arg.bmwField;
      break;

    default:
      arg.toyotaField;
  }
}
