const jwt = require("jsonwebtoken");
const secret = "mysecret";

module.exports = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).send("Unauthorized: No token provided.");
  } else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        req.username = decoded.username;
        next();
      }
    });
  }
};
