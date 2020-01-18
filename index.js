var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("hello world");
});

app.get("/ivan", function(req, res) {
  res.send("hello Ivan");
});
var server = app.listen(3000, console.log("happy coding!"));
