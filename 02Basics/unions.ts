let score: number | string = 33;
score = 32;
score = "33";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let player: Admin | User = {
  name: "shubham",
  id: 1,
};

player = {
  username: "shubham",
  id: 1,
};

// const databaseId = (val: number | string): number | string => {
//   return `Database id: ${val}`;
// };

// const id = databaseId("mongodb//:dflsjaf");
// console.log(id);

const databaseId = (val: number | string): number | string => {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 1;
};

const id = databaseId("MONGODB//string");
console.log(id);

// array

const data: number[] = [1, 3, 45, 3];
const data2: string[] = ["1", "3", "45", "3"];
// const data3: string[] | number[] = ["1", "3", "45", "3"];
// const data3: string[] | number[] = [1, 3, 45, 3];
const data3: (string | number)[] = [1, 3, 45, 3];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "middle";
// seatAllotment = "crew";
