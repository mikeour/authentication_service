const User = require("../index.js");

module.exports = (username, password) => {
  return User.sync().then(() => {
    return User.create({
      username,
      password
    });
  });
};
