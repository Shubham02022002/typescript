const user = {
  name: "Shubham",
  email: "mail@gmail.com",
  isLoggedIn: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "cheeta", isPaid: false, email: "xyz@gmail.com" };

createUser(newUser);

function createCourse(): { couseName: string; price: number } {
  return { couseName: "ai course", price: 4000 };
}
export {};
