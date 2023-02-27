const express = require("express");
const jwt = require("jsonwebtoken");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { MongoClient, Collection } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "EGCO427";
let db;
let collection;
async function dbConnect() {
  await client.connect();
  console.log("Database connection is successfully");

  db = client.db(dbName);
  collection = db.collection("login");
  student_col = db.collection("students");
}

//public api
app.get("/api", function (req, res) {
  res.json({ description: "API without authetication" });
});

app.get("/api/protected", ensureToken, (req, res) => {
  jwt.verify(req.token, "egci4276272", function (err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
      console.log("Show student");
      showStudents()
        .then((result) => {
          console.log(result);
          res.json(result);
        })
        .catch(console.error);
    }
  });
});

async function showStudents() {
  const findResult = await student_col.find({}).toArray();
  return findResult;
}

app.get("/api/students", ensureToken, (req, res) => {
  jwt.verify(req.token, "egci4276272", function (err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
      console.log("Show student");
      showStudents()
        .then((result) => {
          console.log(result);
          res.json(result);
        })
        .catch(console.error);
    }
  });
});

async function findUser(login_data) {
  var query = login_data;

  const findResult = await collection.find(query).count();
  console.log(findResult);
  return findResult;
}
app.post("/api/login", (req, res) => {
  // then return a token, secret key should be an env variable
  const token = jwt.sign(req.body, "egci4276272"); //secret_key_goes_here ให้ไปตั้งเอง

  findUser(req.body)
    .then((result) => {
      if (result > 0) {
        res.json({
          message:
            'Authenticated! Use this token in the "Authorization" header',
          token: token,
        });
      } else {
        res.json({
          message: "Invalid Username or Password",
          data: req.body,
        });
      }
    })
    .catch((err) => {});
});

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" "); //split เอาคำว่า bearer ออก จาก Authorization: Bearer <token>
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403); //forbiden
  }
}
dbConnect().catch(console.error);

var server = app.listen(3000, function () {
  console.log("Application is running on  http://127.0.0.1:3000");
});
//web api กับ authen แยก port
server.on("close", function (event) {
  console.log("Server is shutdown");
  client.close();
});

process.on("SIGINT", function () {
  console.log("Server is shutdown");
  client.close();
  // if you want to exit then call:
  process.exit();
});
