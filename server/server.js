const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const withAuth = require("./middleware/withAuth.js");
const createUser = require("../database/helpers/createUser.js");
const comparePasswords = require("../database/helpers/comparePasswords.js");
const app = express();

const secret = "mysecret";

app.use(cookieParser());
app.use(express.json());
app.use(express.static("client/dist"));

app.get("/api/home", (req, res) => {
  res.send("Welcome!");
});

app.get("/api/secret", withAuth, (req, res) => {
  console.log("Logged in with ", req.username);
  res.send("The secret is potato.");
});

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  createUser(username, password).then(() => {
    res.status(201).send("Username registered.");
  });
});

app.post("/api/authenticate", async (req, res) => {
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

app.get("/api/verifyToken", withAuth, (req, res) => {
  res.status(200);
});

app.listen(3001, () => console.log("Connected on port 3001!"));
