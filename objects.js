class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }

  login() {
    console.log(`${this.email} just logged in!`);
  }

  logout() {
    console.log(`${this.email} just logged out!`);
  }
}

let userOne = new User("mario@mario.com", "mario");
let userTwo = new User("lugi@mansion.com", "luigi");

userOne.login();
userTwo.logout();
