const env = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const apiRouter = require("./routes/apiRouter.js");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("client/dist"));
app.use("/api", apiRouter);

app.listen(port, () => console.log(`Connected on port ${port}!`));
