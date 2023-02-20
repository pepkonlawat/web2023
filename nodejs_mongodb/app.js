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
  const product = db.collection("product");
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
/*   var query = { name: /^T/ };
  var newvalue = { $set: { name: "Test Shirt" } };
  const updateResult = await collection.updateMany(query, newvalue);
  console.log("Updated documents =>", updateResult); */

  //Drop collection
  //const dropResult = await collection.drop()
  //console.log("Drop Collection => ", dropResult)

  var key = { price: 1 };
  var query = { price: { $gt: 15 } };
  const findResult = await product.find(query).sort(key).toArray();
  console.log("this is result: %o", findResult);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
