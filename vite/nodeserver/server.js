var express = require("express");
app = express();

mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// const bodyParser = require("body-parser");
const cors = require("cors");

port = process.env.PORT || 5001;
User = require("./models/userListModel");
mongoose.Promise = global.Promise;
url = "mongodb://127.0.0.1/UserDb";
mongoose.connect(url, function (error) {
  if (error) throw error;
  console.log("Successfully connnected");
});

const { appendFile } = require("fs");
app.use(cors());

var routes = require("./routes/userListRoutes");
routes(app);

app.listen(port);
console.log("UserList started on : " + port);
