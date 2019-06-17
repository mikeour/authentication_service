module.exports = (sequelize, Sequelize) => {
  const AuthToken = sequelize.define(
    "AuthToken",
    {
      token: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {}
  );

  AuthToken.associate = ({ User }) => {
    AuthToken.belongsTo(User);
  };

  AuthToken.generate = async UserId => {
    if (!UserId) {
      throw new Error("AuthToken requires a user ID");
    }

    let token = "";

    const possibleCharacters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 15; i++) {
      token += possibleCharacters.charAt(
        Math.floor(Math.random() * possibleCharacters.length)
      );
    }

    return AuthToken.create({ token, UserId });
  };

  return AuthToken;
};
