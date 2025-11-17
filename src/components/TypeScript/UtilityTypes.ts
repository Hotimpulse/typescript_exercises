interface User {
  name: string;
  age: number;
  type: string;
  friends: Array<string>;
}

// Required<Type>
// Readonly<Type>

// Pick<Type> && Omit<Type>

type NewUser = Pick<User, "name" | "friends">;
type NewUser2 = Omit<User, "name" | "friends">;

// Exclude && Extract

type Color = "red" | "green" | "blue" | "yellow";

type ExcludeColor = Exclude<Color, "blue" | "yellow">;

type ExtractColor2 = Extract<Color, "blue">;

function fn(arg: number): string {
  return "";
}

type ReturnTypeFn = ReturnType<typeof fn>;
type Parameters = Parameters<typeof fn>;

// Record<Type> && Partial<Type>

type Color2 = "red" | "green" | "blue";
type Status = "success" | "error" | "warning";

const colorsArray: Record<Color2, string[]> = {
  red: ["123"],
  green: ["123"],
  blue: ["123"],
};

const colorsArray2: Partial<Record<Color2, string[]>> = {
  red: ["123"],
  // blue? red? green?
};
