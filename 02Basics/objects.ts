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

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

const createUser = (user: User): User => {
  return { name: user.name, email: user.email, isActive:user.isActive };
};

const newUser = createUser({ name: 'shubham', email: 'mail@gmail.com', isActive: true });
console.log(newUser);
export {};
