"use strict";
// const user = {
//   name: "Shubham",
//   email: "mail@gmail.com",
//   isLoggedIn: true,
// };
Object.defineProperty(exports, "__esModule", { value: true });
var createUser = function (user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
};
var newUser = createUser({ name: 'shubham', email: 'mail@gmail.com', isActive: true });
console.log(newUser);
