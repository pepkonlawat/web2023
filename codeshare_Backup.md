var express = require('express')
var app = express()
var users = require('./user.json')

app.get('/users',function(req,res){
console.log(users)
res.send(users)
})

app.get('/users/:id',function(req,res){
var aUser = users["user"+req.params.id]
console.log(aUser)
res.send(aUser)
})

var user = {
"user4" : { name: 'betty', password: '4444', occupation: 'engineer', id: 4 }
}

app.post('/users',function(req,res){
users["user4"] = user["user4"]

    console.log(users)

res.send(users)
})

app.delete('/users/:index',function(req,res){
delete users["user"+req.params.index]
console.log(users)
res.send(users)
})

var server = app.listen(8081, function(){
var port = server.address().port
console.log("Application is running at http://127.0.0.1:%s", port)
})

//=========================================//
//mongodb
//========================================//

const { MongoClient, Collection } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'ProductDB';

async function main() {

    await client.connect()
    console.log("Database connection is Done")

    const db = client.db(dbName)
    const collection = db.collection('products')

    //Insert one
    //var obj = { name: "Coffee Mug", price: 10}
    //const insertResult = await collection.insertOne(obj)

    //Insert Many Items
    /* var obj = [
        { name: "Book", price: 10 },
        { name: "Pencil", price: 5 },
        { name: "Calculator", price: 40 },
        { name: "Notebook", price: 15 },
        { name: "T-Shirt", price: 20 },
        { name: "Jacket", price: 20 }
      ]
    const insertResult = await collection.insertMany(obj);

    console.log('Inserted documents => ', insertResult) */

     //Find one document
    /* const findResult = await collection.findOne({});
    console.log('Found documents =>', findResult); */

    //Find all documents
    /* const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult); */

    //Query
    //var query = {name: "Pencil"}
    //var query = {price: 10}
    /* var query = {name: /^C/}
    const findResult = await collection.find(query).toArray();
    console.log('Found documents =>', findResult); */

    //Sorting
    /* var key= {name: -1} //descending order: -1, ascending order: 1
    const findResult = await collection.find().sort(key).toArray();
    console.log('Found documents =>', findResult); */

    //Delete one
    /* var query= {name: "Book"}
    const deleteResult = await collection.deleteOne(query);
    console.log('Deleted documents =>', deleteResult); */

    //Delete many
    /* var query= {name: /^C/}
    const deleteResult = await collection.deleteMany(query);
    console.log('Deleted documents =>', deleteResult); */

    //Update one
    /* var query= {name: "Pencil"}
    var newvalue = {$set: {name: "Color Pencil", price: 25}}
    const updateResult = await collection.updateOne(query, newvalue);
    console.log('Updated documents =>', updateResult) */

    //Update many
    var query= {name: /^T/}
    var newvalue = {$set: {name: "Test Shirt"}}
    const updateResult = await collection.updateMany(query, newvalue);
    console.log('Updated documents =>', updateResult)

    //Drop collection
    //const dropResult = await collection.drop()
    //console.log("Drop Collection => ", dropResult)

    return 'done.';

}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());

//===============================================//
Practice

1. Insert these 2 items below.

var obj = [
{ name: "Computer", price: 1000 },
{ name: "Cup", price: 15 }
]

2. Show the items that the price > 15 sorting by price (ascending order)

[{
"name": "Notebook",
"price": 15
},{
"name": "Jacket",
"price": 20
},{
"name": "Book",
"price": 10
},{
"name": "Pencil",
"price": 5
},{
"name": "Calculator",
"price": 40
},{
"name": "T-Shirt",
"price": 20
},{
"name": "Coffee Mug",
"price": 10
}]

//==============================================================//
//-----------Practice II ------------//  
Collection name: "student_records"

[
{ name: "Bob", courseid: "egci111", coursename: "computer programming", mark: 80 },
{ name: "Tom", courseid: "egci111", coursename: "computer programming", mark: 50 },
{ name: "Sue", courseid: "egci427", coursename: "Web programming", mark: 90 },
{ name: "John", courseid: "egci427", coursename: "Web programming", mark: 70 },
{ name: "Jame", courseid: "egci472", coursename: "Web programming", mark: 60 },
]

1. Find who take "Computer Programming"
2. Find who have mark >60
3. Find the student name start with J\*

//=======================================================================//

// REST API + Mongo

// Insert to studio3t
//----- students.json -----//
{
"id" : 1,
"firstname" : "Bob",
"lastname" : "Cat",
"age" : 21,
"major" : "Math"
}
{
"id" : 2,
"firstname" : "Tom",
"lastname" : "Cat",
"age" : 18,
"major" : "Science"
}
{
"id" : 3,
"firstname" : "Marry",
"lastname" : "Lamb",
"age" : 19,
"major" : "Social Study"
}
{
"id" : 4,
"firstname" : "Linda",
"lastname" : "Lamb",
"age" : 21,
"major" : "IT"
}

//-------------------------//
// Insert to mongo compass
[{
"id" : 1,
"firstname" : "Bob",
"lastname" : "Cat",
"age" : 21,
"major" : "Math"
},
{
"id" : 2,
"firstname" : "Tom",
"lastname" : "Cat",
"age" : 18,
"major" : "Science"
},
{
"id" : 3,
"firstname" : "Marry",
"lastname" : "Lamb",
"age" : 19,
"major" : "Social Study"
},
{
"id" : 4,
"firstname" : "Linda",
"lastname" : "Lamb",
"age" : 21,
"major" : "IT"
}]

//------------------------------------//
const express = require('express')
var app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

const { MongoClient, Collection } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'egco427';
let db
let collection

async function dbConnect(){
await client.connect()
console.log("Database connection is successfully")

    db = client.db(dbName)
    collection = db.collection('students')

}

async function showMajor(findMajor) {
var query = {major : findMajor}
const findResult = await collection.find(query).toArray()
return findResult
}

async function insertStudent(newStudent){

    const insertResult = await collection.insertOne(newStudent)
    return insertResult

}

async function updateStudent(updateStudent){
var query = {id: updateStudent.id}
var newvalue = {$set: updateStudent}
const updateResult = await collection.updateOne(query, newvalue)
return updateResult
}

async function deleteStudent(studentId) {
var query = {id : Number(studentId)}
const deleteResult = await collection.deleteOne(query)
return deleteResult
}

dbConnect().catch(console.error)

app.get('/showmajor/:major', function(req,res){
console.log("Show major : %s", req.params.major)
showMajor(req.params.major).then((result)=>{
console.log(result)
res.json(result)
})
.catch(console.error)
})

app.post('/insertstudent', function(req,res){
console.log("Add new student : %s", req.body)
insertStudent(req.body).then((result)=>{
console.log(result)
res.json(result)
})
.catch(console.error)
})

app.put('/updatestudent', function(req,res){
console.log("Update student : %s", req.body)
updateStudent(req.body).then((result)=>{
console.log(result)
res.json(result)
})
.catch(console.error)
})

app.delete('/deletestudent/:id', function(req,res){
console.log("Deleted Student ID : %s", req.params.id)
deleteStudent(req.params.id).then((result)=>{
console.log(result)
res.json(result)
})
.catch(console.error)
})

var server = app.listen(8081, function(){
const host = "127.0.0.1"
const port = server.address().port
console.log("Application is running at http://%s:%s", host, port)
})

server.on('close', function (event) {
console.log('Server is shutdown');
client.close()
});

process.on('SIGINT', function () {
console.log('Server is shutdown');
client.close()
// if you want to exit then call:
process.exit();
});

//=============== Practice III======================//

//----------------------------------------------//
Collection: students
id firstname lastname age major
1 Bob Cat 21 Math
2 Tom Cat 18 Science
3 Marry Lamb 19 Social Study
4 Linda Lamb 21 ITa

---

1. Find students who are in the major "Science"
2. Find students that their age < 20 and sort by descending
3. Update the lastname of students "Lamb" to be "Fox"
   {"id" : 3, "lastname": "Fox"}
4. Insert new student {"id": 5, "firstname": "Adam", "lastname": "Zoo", "age": 22, "major": "Math"}
5. Delete student id 2

Output shows the response message (JSON) on Postman by calling the URL.
Example

1. GET Method http://127.0.0.1:8081/showmajor/:major
2. GET Method http://127.0.0.1:8081/showage/:age
3. PUT Method http://127.0.0.1:8081/updatestudent
4. POST Method http://127.0.0.1:8081/insertstudent
5. DELETE Method http://127.0.0.1:8081/deletestudent/:id

//--------------------------------------------------------------//
// GET Method http://127.0.0.1:8081/students
// GET Method http://127.0.0.1:8081/students/:id
// PUT Method http://127.0.0.1:8081/students
// POST Method http://127.0.0.1:8081/students

//==================================================//
reference: jwt.io

npm install jsonwebtoken express
//------------------------------------------------//

const express = require('express')
const jwt = require('jsonwebtoken')
var app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/api',function(req,res){
res.json({
description: "API without authentication"
})
})

app.get('/api/protected', ensureToken, (req, res) => {
jwt.verify(req.token, 'secret_key_goes_here', function(err, data) {
if (err) {
res.sendStatus(403);
} else {
res.json({
description: 'Protected information. Congrats!',
data: data
});
}
});
})

app.post('/api/login', (req, res) => {

// insert code here to actually authenticate, or fake it
const user = { id: 3 };

// then return a token, secret key should be an env variable
const token = jwt.sign({ user: user.id }, 'secret_key_goes_here');
res.json({
message: 'Authenticated! Use this token in the "Authorization" header',
token: token
});
})

app.listen(3000,function(){
console.log('Aplication is running on http://127.0.0.1:3000')
})

function ensureToken(req, res, next) {
const bearerHeader = req.headers["authorization"];
if (typeof bearerHeader !== 'undefined') {
const bearer = bearerHeader.split(" ");
const bearerToken = bearer[1];
req.token = bearerToken;
next();
} else {
res.sendStatus(403);
}
}
//================================//
Practice

1. Set secrete key to be "egci4276272"
2. Set up the input (JSON) of the URL: http://localhost:3000/api/login
   Call POST method: http://localhost:3000/api/login
   Set the body as below in Request message
   {
   "username": "bob",
   "password": "cat"
   }
3. Check whether the username and password are matched with username and password  
   from login collection in the database.
   if they are matched then generate a TOKEN
   {
   "message": "Authenticated! Use this token in the \"Authorization\" header",
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1NTkwMzQ1MjR9.7LhZdwFuxtrlS1mu6Fu1lzlNVEi65cWqB1jzdPzS8GI"
   }
   if they are not matched then show JSON with the message "Invalid Username or Password"
   {
   "message": "Invalid Username or Password",
   "user": {
   "username": "test",
   "password": "134"
   }
   }

4. Create the API : http://localhost:3000/api/students
   if the attached token is valid then list all students from the students collection
   if the attached token is invalid then print "forbidden"
