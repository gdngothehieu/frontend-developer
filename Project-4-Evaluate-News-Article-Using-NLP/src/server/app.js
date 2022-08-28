const path = require("path");
const express = require("express");
const app = express();
const mockAPIResponse = require("./mockAPI.js");
const bodyParser = require("body-parser");
const requestHandler = require("./requestHandler");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to evaluating news article app", status: 200 });
  res.status(200);
});

app.get("/test", (req, res) => {
  res.send(mockAPIResponse);
});

app.post(
  "/article",
  requestHandler.validateRequest,
  requestHandler.postHandler
);

app.listen(3000, function () {
  console.log("Server starts on port 3000");
});

module.exports = app;
