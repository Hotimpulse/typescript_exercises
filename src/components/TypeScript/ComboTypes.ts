/* eslint-disable @typescript-eslint/no-unused-vars */
interface Address {
    firstName: string;
    street: string;
    coords: number[];
}

type User = {
    firstName: string;
    age: number;
    address: Address;
};

// const user: User = {
//     address: {
//         coords: [5, 5],
//         firstName: "",
//         street: "",
//     },
//     firstName: "Lev",
// };
