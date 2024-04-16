/*
! Authetication

! Authentication vs. Authorization
* Authentication is the process of verifying - who a particular user is -.
We typically authenticate with a username/password combo but we can also use security questions, facial recognition, etc.

* Authorization is verifying what a specific user has access to.
Generally, we authorize after a user has been authenticated.
? Now that we know WHO you are, here is WHAT you CAN & CANNOT do.

! Rules for Storing Passwords
* #1. Never Store Passwords in Text!
? Instead, hash the password by running it through a hashing function and storing the result of that in your database.
These are functions that map input data of some arbitrary size to fixed-size output values.

? What are Cryptographic Hash Functions?
  1. One-way function which is infeasible to invert.
  2. Small change in input yields large change in the output.
  3. Deterministic - Same input yields same output.
  4. Unlikely to find 2 outputs with the same value
  5. Password hash functions are delibertly slow.

! Salts - An Extra Safeguard
* A salt is a random value added to the password before we hash it.
It helps ensure unique hashes and mitigate common attacks.
*/