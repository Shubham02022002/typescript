var score = 33;
score = 32;
score = "33";
var player = {
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
var databaseId = function (val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 1;
};
var id = databaseId("MONGODB//string");
console.log(id);
// array
var data = [1, 3, 45, 3];
var data2 = ["1", "3", "45", "3"];
// const data3: string[] | number[] = ["1", "3", "45", "3"];
// const data3: string[] | number[] = [1, 3, 45, 3];
var data3 = [1, 3, 45, 3];
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "middle";
// seatAllotment = "crew";
