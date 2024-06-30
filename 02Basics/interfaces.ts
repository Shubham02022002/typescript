interface User {
  readonly dbID: number;
  email: string;
  userId: number;
  googleID?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string): number;
}

// Also know as reopening of an interface !
interface User {
  gitHubToken: string;
}

interface Admin extends User {
  role: "Admin" | "T.A" | "Learner";
}

const Admin1: Admin = {
  dbID: 123,
  role: "Admin",
  email: "xyz@gmail.com",
  userId: 1234,
  gitHubToken: "user/github.com",
  googleID: "ksfdh34hr1hfdsa;1ihr3/1234/",
  startTrial: () => "Good to go",
  getCoupon: (name: "FIRST50") => 50,
};

const user1: User = {
  dbID: 123,
  email: "xyz@gmail.com",
  userId: 1234,
  gitHubToken: "user/github.com",
  googleID: "ksfdh34hr1hfdsa;1ihr3/1234/",
  startTrial: () => "Good to go",
  getCoupon: (name: "FIRST50") => 50,
};

user1.googleID = "auth/werer";
user1.getCoupon("FLAT50");
// user1.dbID=234;
