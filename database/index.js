const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "users.sqlite3"
});

const bcrypt = require("bcrypt");

const User = require("./models/User.js")(sequelize, Sequelize);

// sequelize
//   .sync()
//   .then(() => {
//     return User.create({
//       username: "emily",
//       password: "yes"
//     });
//   })
//   .catch(err => {
//     console.log("Error! ", err);
//   });

const authenticate = async (username, password) => {
  try {
    const user = await User.findOne({ where: { username } });

    if (bcrypt.compareSync(password, user.password)) {
      console.log("Well I'll be damned!");
    }
  } catch (err) {
    console.log(" -------- Looks like an err ", err);
  }
};

authenticate("emily", "no");
