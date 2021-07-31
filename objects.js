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

function Admin(...args) {
  User.apply(this, args);
  this.role = "super admin";
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email;
  });
};

let userOne = new User("mario@mario.com", "mario");
let userTwo = new User("lugi@mansion.com", "luigi");
let admin = new Admin("admin@mail.com", "fakeAdmin");

let users = [userOne, userTwo, admin];

console.log(admin);
