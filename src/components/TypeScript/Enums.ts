// const Color = {
//   RED: "red",
//   GREEN: "green",
//   BLUE: "blue",
// } as const;

// // type Color = (typeof Color)[keyof typeof Color];

// type ValueOf<T> = T[keyof T];

// type Color = ValueOf<typeof Color>;

// enum Color2 {
//   RED = "red",
//   GREEN = "green",
//   BLUE = "blue",
// }

// const enum Color2 {
//   RED = "red",
//   GREEN = "green",
//   BLUE = "blue",
// }

// function setColor(color: Color2) {}

// setColor(Color2.BLUE);

enum Color3 {
  RED,
  GREEN,
  BLUE = 5,
  YELLOW,
}

console.log(Color3[0]);
