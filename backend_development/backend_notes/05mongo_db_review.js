/*
! (Re)Introduction to Mongo DB
What is Mongo? - The Database we'll be using from here on out and one of the components of the -M-ERN stack.
* Mongo is a document database, commonly used in combination with Node.js, and allows us to store and retrieve complex data.

? Why use a database in the first place instead of just saving to a file?
  - Databases can handle large amounts of data efficiently and store it compactly.
  - They provide tools for easy insertion, querying, and updating of data.
  - They generally offer security features and control over access to data.
  - They (generally...and hopefully) scale well!

! Databases usually fall under two categories: SQL and NoSQL
* SQL (Structured Query Language) databases are relational databases; we pre-define a schema of tables before we insert anything.
  ? Examples: MySQL, Postgres, SQLite, Oracle, MS SQL
* NoSQL is well, the opposite and include document, key-value, and graph stores databases.
  ? Examples: MongoDB, Couch DB, Neo4j, Cassandra, Redis

! So, why Mongo DB?
  * Very commonly used with Node and Express (MEAN and MERN stacks)
  Easy to get started with
  Plays particularly well with JavaScript
  Its popularity also means there is a strong community of developers using Mongo.

! Mongo Shell
* A REPL, similar to Nodejs for testing, but we can actually change things and settings within it.

* To make a DB while in the Shell, we can use the command 'use DBName'.
? Mongo will wait to display this until there is actually something stored inside.

! BSON - What is it and why should we care?
* BSON is more versatile than JSON, it's stored in binary and is more compact as a result.
It also includes more data types, rather than JSON's strings, booleans, numbers, and arrays.

! Using MongoDB
! Inserting
* To insert documents in Mongo, we insert into a collection, a grouping of data in a database.
? If we try to insert something into a collection that does not exist yet, Mongo will go ahead and simply make it a collection for us.

* Syntax:
  Option #1 - insertOne()
  db.collection.insertOne();
  db.dogs.insertOne({name:"Charlie", age: 3, breed: "corgi", catFriendly: true})

? Note: Unless specified, Mongo will add an _id value for us.

  Option #2 - insertMany();
  db.collection.insertMany();

! Option #3 - insert()
* This format doesn't require any constraints or even consistency.
  db.collection.insert()
  db.dogs.insert([{name: "Wyatt", breed:"Golden Retriever", age: 14, catFriendly: false}, {name: "Tanya", breed: "Chihuahua", age: 17, catFriendly: true}])


! Querying / Reading / Finding Data
So far, we've seen how to use db.collection.find()...in the previous example to verify that we inserted something successfully into a collection.
This returns EVERY document in a collection.
* We can be more specific though, such as passing in a key-value pair:
db.dogs.find({breed: "corgi"}) //! This is case-sensitive.
db.dogs.find({catFriendly: true})


! Updating
Always the most annoying part of CRUD because we have to find it and specify how to  update it.
* Similar to insert, we have several options to go about this.
! Option #1 - db.collection.updateOne() - Updates only the first matching result

* Update requires the use of specific operators in MongoDB, for now we're going to use $set, which replaces the value of a field with another specified value.
?   { $set: { <field1>: <value1>, ... }}
?   db.dogs.updateOne({name: 'Charlie'}, {$set: {age: 4}})

! Option #2 - db.collection.updateMany() - Updates all of the specified items
?   db.dogs.updateMany({catFriendly: true}, {$set: {isAvailable: false}})
    Find all the dogs that are set to catFriendly and add this field (isAvailable)

! Option #3 - db.collection.replaceOne() - Will replace all the information about the specified item except for the ID.


! Deleting
  db.collection.deleteOne()
  Does exactly what it says it does based on what is passed into the parens.

  db.collection.deleteMany()
  Again, finds the specifies items and deletes them.
  db.dogs.deleteMany({isAvailable: false})

  To delete EVERYTHING in a collection, we can also wipe it with:
  db.collection.deleteMany({})
*/
