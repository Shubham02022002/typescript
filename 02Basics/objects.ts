// const user = {
//   name: "Shubham",
//   email: "mail@gmail.com",
//   isLoggedIn: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "cheeta", isPaid: false, email: "xyz@gmail.com" };

// createUser(newUser);

// function createCourse(): { couseName: string; price: number } {
//   return { couseName: "ai course", price: 4000 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// const createUser = (user: User): User => {
//   return { name: user.name, email: user.email, isActive:user.isActive };
// };

// const newUser = createUser({ name: 'shubham', email: 'mail@gmail.com', isActive: true });
// console.log(newUser);

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "123",
  name: "shubham",
  email: "mail@gmail.com",
  isActive: true,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let myCardDetails: cardDetails = {
  cardnumber: "1234",
  cardDate: "12/12",
  cvv: 123,
};



myUser.email = "mail2@gmail.com";
// myUser._id="23424";

export {};
