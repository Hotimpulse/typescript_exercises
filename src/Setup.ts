// npm init -y
// npm i typescript -D
// npx tsc --init
// npx tsc /Setup.ts -> to compile into JS

// npm create vite@latest

type User = {
  id: number;
  email: string;
  password: string;
};

const user: User = {
  id: 1,
  email: "test@test.com",
  password: "test123",
};
