const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "users.sqlite3"
});

const bcrypt = require("bcrypt");

const User = require("./models/User.js")(sequelize, Sequelize);

module.exports.User = User;

module.exports.compare = async (username, password) => {
  const user = await User.findOne({ where: { username } });

  const { password: pass } = user.dataValues;

  return bcrypt.compareSync(password, pass);
};
