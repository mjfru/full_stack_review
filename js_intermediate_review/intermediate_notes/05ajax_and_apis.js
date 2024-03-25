/*
! AJAX and APIs
* What is the acronym AJAX? - Asynchronous JavaScript And XML
? Today you might see AJAJ, since JSON has essentially replaced XML.
* This is the act of making requests on the webpage after its been loaded, behind the scenes.
? If you go to the 'network' tab in the dev tools on Chrome, you can view all of the requests you're sending off.
! This varies from the traditional request cycle by making the request behind the scenes and fetching specific pieces of data instead of redirecting us entirely with new HTML/CSS/JS content.

! Intro to APIs
* API - Application Programming Interface - A broad term referring to any interface that allows software to communicate with other software.
* Web APIs - HTML-based, exposing certain endpoints that contain code that other programs can access and consume.
Typically, a hosted API will provide an endpoint in the form of a link.
Going to that link will give us a pretty ugly piece of JSON containing the information available for retrieval.
Since JSON closely resembles an object, we can easily extract key parts of it that we want to display / use / manipulate for our website.

! More on JSON
* Originally, XML was the go-to markup for APIs with language that looked a lot like HTML.
* More recently, JSON (JavaScript Object Notation), has become the go-to method because it's based on JavaScript Object syntax.
? A key difference (pun intended), is that the keys must be in quotations.
Although it has JavaScript in its title, it can also be used with other languages, such as Python and Ruby.

{
  "price": 4.99;
}

* If we wanted to access something like this, we need to ask JS to turn it into a valid JS object.
! JSON.parse(data) accomplishes this for us.
Now someAPIsource.price will display 4.99.

* The reverse also exists too if we need to send information to an API.

const dog = { breed: 'lab', color: 'black', owner: undefined };
* JSON.stringify(dog)

! HTTP Verbs
* GET - Used when trying to get or retrieve information
* POST - Used when trying to send or post data to another place, like a database.

! HTTP Status Codes
* Code that comes back in an HTTP response that carries some kind of meaning.
Typically, codes in the 200 range incidate something positive, like success.
This may vary according to the kind of request you made, resulting in a 200 or 201, for example.
* Codes in the 400 range indicate an error on the user / client side.
* Codes in the 500 range indicate something went wrong on the API or server side of things.
* Finally, codes in the 300 range have to do with redirection.

! Understanding Query Strings
* Often in API endpoints, there's a variable included, such as people/:id <-- the colon : here indicates a variable in a query string.
<> and {{}} are also used to indicate a variable.
?q=variable is a common design pattern to run a query with an API.

! HTTP Headers
* HTTP headers are accessible to us under the network tab in the dev tools.
They are comprised of key-value pairs again that go along with a request and response.
Headers are another way to request specific information, such as how you want your response (in JSON, text, etc.)
* This is something we cannot do in the browser, we need to do this in our code or with a tool like Postman.

! The Cursed XMLHttpRequest (XHRs)
* This was the 'original' way of sending requests via JS, being introduced here to showcase how much has changed and how much easier it is to do now with JSON.
* XML does NOT support promises, lots of callback hell!
It also features weird capitalization and clunky syntax that's hard to remember.
After the below code is run and processed, it'll provide us with an XMLHttpRequest Object that contains a response, responseText, etc.
From here, we have to extract the specific information we want
*/

const req = new XMLHttpRequest();
// This runs when there's no errors:
req.onload = function () {
  console.log("It loaded!");
  const data = JSON.parse(this.responseText);
  // This will finally get the request into workable data in JSON:
  console.log(data);
  console.log(data.name, data.height);
};

// This runs when there is an error:
req.onerror = function () {
  console.log("Error!");
  console.log(this);
};

//        HTTP Action, URL
req.open("GET", "https://swapi.dev/api/people/1");
req.send();
