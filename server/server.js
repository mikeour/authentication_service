const express = require("express");
const app = express();

app.use(express.static("client/dist"));

app.get("/api/home", (req, res) => {
  res.send("Welcome!");
});

app.get("/api/secret", (req, res) => {
  res.send("The secret is potato.");
});

app.listen(3001, () => console.log("Connected on port 3001!"));
