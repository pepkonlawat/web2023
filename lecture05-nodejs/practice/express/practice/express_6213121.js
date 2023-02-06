var crypto = require("crypto");
var fs = require("fs");
var express = require("express");
var routing = express();
const user = require("./users.json");
routing.get("/profile/:number", function (req, res) {
  const num = req.params.number;
  const username = user.users[num].username;
  const fullname = user.users[num].fullname;
  const password = crypto
    .createHash("sha1")
    .update("user.users[num].password")
    .digest("hex");
  const id = user.users[num].id;
  res.send(
    "<p>" +
      "id: " +
      id +
      "<br/>" +
      "username: " +
      username +
      "<br/>" +
      "password: " +
      password +
      "<br/>" +
      "fullname: " +
      fullname +
      "</p>"
  );
});
routing.listen(8081);
