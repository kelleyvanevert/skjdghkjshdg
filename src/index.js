
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("handling request");
  res.send("hello world");
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("app running!");
});
