// enum SeatChoice{
//     AISLE=10,
//     MIDDLE,
//     WINDOW=29
// }
// const enum SeatChoice {
//   AISLE = 10,
//   MIDDLE,
//   WINDOW = 29,
// }
// enum SeatChoice {
//   AISLE,
//   MIDDLE,
//   WINDOW,
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice["MIDDLE"] = "middle";
    SeatChoice["WINDOW"] = "window";
})(SeatChoice || (SeatChoice = {}));
var seat = SeatChoice.AISLE;
