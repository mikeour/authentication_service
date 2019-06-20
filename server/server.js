const express = require("express");
const app = express();
const createUser = require("../database/helpers/createUser.js");

app.use(express.json());
app.use(express.static("client/dist"));

app.get("/api/home", (req, res) => {
  res.send("Welcome!");
});

app.get("/api/secret", (req, res) => {
  res.send("The secret is potato.");
});

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  console.log("USERNAME ", username);
  console.log("PASSWORD ", password);
  // createUser(username, password).then(() => {
  //   res.status(201).send("Username registered.");
  // });
});

app.listen(3001, () => console.log("Connected on port 3001!"));
