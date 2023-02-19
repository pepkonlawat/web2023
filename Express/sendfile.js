var express = require("express");
var app = express();
var users = require("./user.json");

app.get("/users", function (req, res) {
  console.log(users);
  res.send(users);
});

app.get("/users/:id", function (req, res) {
  var aUser = users["user" + req.params.id];
  console.log(aUser);
  res.send(aUser);
});

var user = {
  user4: { name: "betty", password: "4444", occupation: "engineer", id: 4 },
};

app.post("/users", function (req, res) {
  users["user4"] = user["user4"];

  console.log(users);
  res.send(users);
});

app.delete("/users/:index", function (req, res) {
  delete users["user" + req.params.index];
  console.log(users);
  res.send(users);
});

var server = app.listen(8081, function () {
  var port = server.address().port;
  console.log("Application is running at http://127.0.0.1:%s", port);
});
