function addTwo(num: number): number {
  return num + 2;
  //   return "hello";
}

let ans = addTwo(4);

function toUpper(val: string): string {
  return val.toUpperCase();
}

toUpper("any");

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("string", "mail", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("shubham", "email");

// function getVal(myVal: number) {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "superman", "batman", "ironman"];

heros.map((hero): string => {
  return `Hero name is ${hero}`;
});

function consoleErro(err: string): void {
  console.log(err);
}

function handleError(err: string): never {
  throw new Error(err);
}

export {};
