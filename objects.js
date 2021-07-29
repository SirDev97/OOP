let userOne = {
  email: "mario@mari.com",
  name: "mario",
  login() {
    console.log(this.email, " has logged in.");
  },
  logout() {
    console.log(this.email, " has logged out.");
  },
};

// UPDATING
userOne.name = "yoshi";
console.log(userOne.name);

userOne["name"] = "mario";
console.log(userOne["name"]);

let prop = "name";

userOne[prop];
console.log(userOne[prop]);

prop = "email";
console.log(userOne[prop]);

// CREATING
userOne.age = 25;
console.log(userOne);

userOne.logInfo = function () {
  console.log(`${this.name}'s info.`);
};
console.log(userOne);
