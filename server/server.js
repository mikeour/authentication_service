const express = require("express");
const app = express();

app.use(express.static("client/dist"));

app.listen(3001, () => console.log("Connected on port 3001!"));
