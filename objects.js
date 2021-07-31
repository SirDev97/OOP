function User(email, name) {
  this.email = email;
  this.name = name;
  this.isOnline = false;
  this.login = function () {
    console.log(this.email, "has logged in.");
  };
}

let userOne = new User("mario@mario.com", "mario");
let userTwo = new User("lugi@mansion.com", "luigi");

console.log(userOne);
userTwo.login();
