const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "users.sqlite3"
});

const User = require("./models/User.js")(sequelize, Sequelize);

module.exports = User;
