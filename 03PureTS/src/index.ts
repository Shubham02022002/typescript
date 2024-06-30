class User {
  id: number;
  email: string;
  name: string;
  constructor(id: number, email: string, name: string) {
    this.id = id;
    this.email = email;
    this.name = name;
  }
}

const user1 = new User(123, "user@gmail.com", "new user");
