const compare = require("./comparePasswords.js");

module.exports = async (username, password) => {
  const isAuthenticated = await compare(username, password);
  if (isAuthenticated) {
    console.log("---- good ----");
  } else {
    console.log("---- bad ----");
  }
};
