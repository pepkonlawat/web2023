const express = require("express");
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
  collection = db.collection("students");
}

//showMajor
async function showMajor(findMajor) {
  var query = { major: findMajor };
  const findResult = await collection.find(query).toArray();
  return findResult;
}
app.get("/showmajor/:major", function (req, res) {
  console.log("Show major : %s", req.params.major);
  showMajor(req.params.major)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});

//showAge
async function showAge(findAge) {
  var key = { age: -1 };
  var query = { age: { $lt: parseInt(findAge) } };
  const findResult = await collection.find(query).sort(key).toArray();
  return findResult;
}
app.get("/showage/:age", function (req, res) {
  console.log("Show age : %s", req.params.age);
  showAge(req.params.age)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});

//updatestudent
async function updateStudent(updateStudent) {
  var query = { id: parseInt(updateStudent.id) };
  var newvalue = { $set: updateStudent };
  const updateResult = await collection.updateOne(query, newvalue);
  return updateResult;
}
app.put("/updateStudent/", function (req, res) {
  console.log("updatestudent : %s", req.body);
  updateStudent(req.body)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});

/* insertstudent */
async function insertStudent(newStudent) {
  //function
  const insertResult = await collection.insertOne(newStudent);
  return insertResult;
}
app.post("/insertStudent", function (req, res) {
  //call api
  console.log("add new student  : %s", req.body);
  insertStudent(req.body)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});
/* deletestudent */
async function deleteStudent(id) {
  //function
  
  var query = { id: parseInt(id) };
  const deleteResult = await collection.deleteOne(query);
  return deleteResult;
}
app.delete("/deleteStudent/:id", function (req, res) {
  //call api
  console.log("Delete student  ID: %s", req.params.id);
  deleteStudent(req.params.id)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch(console.error);
});
dbConnect().catch(console.error);

var server = app.listen(8081, function () {
  const host = "127.0.0.1";
  const port = server.address().port;
  console.log("Application is running at http://%s:%s", host, port);
});

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
