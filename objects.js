function User(email, name) {
  this.email = email;
  this.name = name;
  this.isOnline = false;
}

User.prototype.login = function () {
  this.isOnline = true;
  console.log(this.email, "has logged in.");
};

User.prototype.logout = function () {
  this.isOnline = false;
  console.log(this.email, "has logged out.");
};

let userOne = new User("mario@mario.com", "mario");
let userTwo = new User("lugi@mansion.com", "luigi");

console.log(userOne);
userTwo.login();
