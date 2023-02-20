const { MongoClient, ConnectionCheckedInEvent } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "Product_db";

async function main() {
  await client.connect();
  console.log("database connection successfully");
  const db = client.db(dbName);
  const st_rec = db.collection("student_records");

  var obj = [
    {
      name: "Bob",
      courseid: "egci111",
      coursename: "computer programming",
      mark: 80,
    },
    {
      name: "Tom",
      courseid: "egci111",
      coursename: "computer programming",
      mark: 50,
    },
    {
      name: "Sue",
      courseid: "egci427",
      coursename: "Web programming",
      mark: 90,
    },
    {
      name: "John",
      courseid: "egci427",
      coursename: "Web programming",
      mark: 70,
    },
    {
      name: "Jame",
      courseid: "egci472",
      coursename: "Web programming",
      mark: 60,
    },
  ];
  //   var insert_result = await st_rec.insertMany(obj);
  //   console.log(insert_result);

  // 1) Find who take "Computer Programming"
  var query1 = { coursename: /Computer Programming$/i };
  const findResult1 = await st_rec.find(query1).toArray();
  console.log(' 1) Find who take "Computer Programming \n %o', findResult1);
  // 2) Find who have mark >60
  var query2 = { mark: { $gt: 60 } };
  const findResult2 = await st_rec.find(query2).toArray();
  console.log(" 2) Find who have mark >60  \n %o", findResult2);
  // 3) Find the student name start with J*
  var query3 = { name: /^J/ };
  const findResult3 = await st_rec.find(query3).toArray();
  console.log("3) Find the student name start with J*  \n %o", findResult3);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
