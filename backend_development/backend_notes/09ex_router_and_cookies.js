/*
! Express Router & Cookies
* So far, all of our routes have looked like and have lived all in one file:
const app = express();

app.get('/')...
app.post('/thing/', (req, res))...

* We can essentially break up our routes into seperate files and make it more compartmentalized.
? Typically, a directory 'routes' is made, in which different subdirectories of files can live.

! Cookies
* Cookies are little bits of information that are stored in a user's browser when browsing a particular website.

? Once a cookie is set, a user's browsers will send the cookie on every subsequent request to the site and allow HTTP to become - stateful -.

! Signed Cookies
* The idea behind 'signing' something is to verify integrity, to see if something has changed or not.
? Take a cookie that we send to a user and use a signing mechanism to has cookie parser use a secret code and send a weird looking version of the cookie to be able to verify if any of these signed cookies have been tampered with.
* It's about making sure the original data is still the data being sent and used.

! Sessions
? It's not very practical or secure to store a lot of data client-side using cookies; that's where session comes in!

* Sessions are a server-side data store that we can use to make HTTP stateful.
Instead of storing data using cookies, we store the data on the server-side and then send the browser a cookie that can be used to retrieve the data.

{
  (session)id: 11,
  shoppingCart: [
    {item: 'lime', qty: 1}
  ]
}

! Flash
* A place in session to flash a message (i.e. 'Success', 'Failure') and then goes away.
? Generally this is used when creating, editing, or logging into somewhere.
This course will use connect-flash
*/