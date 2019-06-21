const router = require("express").Router();
const jwt = require("jsonwebtoken");
const withAuth = require("../middleware/withAuth.js");
const createUser = require("../../database/helpers/createUser.js");
const comparePasswords = require("../../database/helpers/comparePasswords.js");
const secret = process.env.SECRET_TOKEN;

router.get("/home", (req, res) => {
  res.send("Welcome!");
});

router.get("/secret", withAuth, (req, res) => {
  res.send("You have accessed secret content.");
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  createUser(username, password).then(() => {
    res.status(201).send("Username registered.");
  });
});

router.post("/authenticate", async (req, res) => {
  const { username, password } = req.body;
  const correctPassword = await comparePasswords(username, password);
  if (correctPassword) {
    const payload = { username };
    const token = jwt.sign(payload, secret, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true }).sendStatus(200);
  } else {
    res.send("Incorrect password!");
  }
});

router.get("/verifyToken", withAuth, (req, res) => {
  res.status(200).send("Verifed");
});

router.get("/removeToken", withAuth, (req, res) => {
  res.clearCookie("token").sendStatus(200);
});

module.exports = router;
