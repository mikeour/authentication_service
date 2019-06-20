const User = require("../index.js");
const bcrypt = require("bcrypt");

module.exports = async (username, password) => {
  try {
    const user = await User.findOne({ where: { username } });

    const { password: hashedPassword } = user.dataValues;

    return bcrypt.compareSync(password, hashedPassword);
  } catch (err) {
    throw new Error("Please enter a valid username");
  }
};
