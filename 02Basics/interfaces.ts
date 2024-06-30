interface User {
  readonly dbID: number;
  email: string;
  userId: number;
  googleID?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string): number;
}

const user1: User = {
  dbID: 123,
  email: "xyz@gmail.com",
  userId: 1234,
  googleID: "ksfdh34hr1hfdsa;1ihr3/1234/",
  startTrial: () => "Good to go",
  getCoupon: (name: "FIRST50") => 50,
};

user1.googleID = "auth/werer";
user1.getCoupon("FLAT50");
// user1.dbID=234;
