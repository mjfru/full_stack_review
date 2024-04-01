/*
! RESTful Routes

! Get vs Post Requests
* Get requests: are used to retrieve information, is sent via a string, that information is visible in the URL, and a limited amount of data can be sent.
* Post requests: are used to post/send data to the server, used to write/create/update, data is sent via request body, not a query string, and you can send any sort of data (like JSON!)

! REST - Representational State Transfer
* "An architectural style for distributed hypermedia systems..."
* So, RESt is basically a set of guidelines for how a client & server should communicate and perform CRUD operations on a given response.

! The main idea of REST is treating data on the server-side as resourced that can then be...CRUD'ed.
? The most common way of apporaching REST is in formatting the URLs and HTTP verbs in your applications.

! Ideas for implementing RESTful routes:
GET /comments - list all comments
GET / comments/:id - get one comment using an id

POST /comments - create a new comment

PUT - updates one comment but totally replacing every aspect of the comment

PATCH /comments/:id - update one comment but only one aspect of it

DELETE /comments/:id - remove one comment

*/
