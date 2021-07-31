class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

let userOne = new User("mario@mario.com", "mario");
let userTwo = new User("lugi@mansion.com", "luigi");

console.log(userOne);
console.log(userTwo);
