/*
! Middleware
* Express middleware are functions that run during the request/response lifecycle.
They are just functions with access to the request / response objects.
Middleware can end the HTTP request by sending back a response with methods like res.send()
OR, middleware can be chained together, one after another, by calling next().

* Morgan, a middleware program, helps us log HTTP request information to our terminal; useful for debugging and getting information.
It'll look like this: GET / 304 - - 0.259 ms
? Included in Backend exercises #10.

! Writing our own Error Handlers
* We can define error-handling middleware functions in the same way as other middleware functions, except now we need four arguments instead of three (err, req, res, next).
*/
