const User = require("../index.js");

module.exports = (username, password) => {
  return User.create({
    username,
    password
  });
};
