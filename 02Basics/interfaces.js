var user1 = {
    dbID: 123,
    email: "xyz@gmail.com",
    userId: 1234,
    googleID: "ksfdh34hr1hfdsa;1ihr3/1234/",
    startTrial: function () { return "Good to go"; },
    getCoupon: function (name) { return 50; },
};
user1.googleID = "auth/werer";
user1.getCoupon("FLAT50");
// user1.dbID=234;