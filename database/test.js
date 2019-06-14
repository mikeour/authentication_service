const { User, compare } = require("./index.js");

(async () => {
  const isAuthenticated = await compare("mike", "wtfkitsune");
  if (isAuthenticated) {
    console.log("---- good ----");
  } else {
    console.log("---- bad ----");
  }
})();
