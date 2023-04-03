"use strict";

module.exports = function (app) {
  var userList = require("../controllers/userListController");

  app
    .route("/users")
    .get(userList.listAllUsers) //Show all users
    .post(userList.createAuser); // Insert a new user

  app
    .route("/users/:userId")
    .get(userList.readAUser) // Show a particular user
    .delete(userList.deleteAuser) // Delete one user
    .post(userList.updateAUser); // Update one user
};
