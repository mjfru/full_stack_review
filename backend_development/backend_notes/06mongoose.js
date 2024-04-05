/*
! Mongoose
* While it is possible and fairly common to just 'wire up' Mongo DB to a project using a plethora of backend languages, a simpler approach is to use a middleware, like Mongoose.

* Mongoose is an ODM: Object Data Mapper
ODMs like Mongoose map documents coming from a database into usable JavaScript objects.
Mongoose provides ways for us to model out our application data and define a schema.
! It offers easy ways to validate data and build complex queries from the comfort of JS.
? In SQL, ORMs are used (Object Relational Mapper).

* The central thing we need to understand as developers with Mongoose is the concept of models.
? Models are JS classes that we make with the assistance of Mongoose that represent our data in the database.

* Everything in Mongoose starts with a Schema and each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

! Virtuals
Give us the ability to add properties to the schema that don't actually exist in the database itself.
Usually these are something that can be derived from the database.
? i.e. combining a first and last name to make a full name.
*/

