/*
! Express - Putting the 'E' in MERN.
* A node package that is a framework for Node.js that helps us build webapps.
Simply put, it's an NPM package which comes with a bunch of methods and optional plugins that we can use to build web applications and APIs.
~~~ npm install express ~~~

* Express helps us with listening for incoming requests, figuring out what the user is searching for, and what to respond with.
  - Starts up a server to listen for requests
  - Parse incoming requests
  - Matches those requests to particular routes (i.e. '/', '/about', '/login')
  - Crafts our HTTP respone and associated content

* The difference between Libraries and Frameworks:
  ? A library - You control the flow of the application code and you decide when to use the library.
    You integrate it when you want, on your terms.
  ? A framework - The framework is in charge and you are merely a participant; it tells you where to plug in the code. 
    You choose to use a framework but it provides the structure and you have to adhere to its rules to use it properly.
! See Express Demo for lots more information.

! Templating with Express
* Templating allows us to define a preset 'pattern' for a webpage that we can dynamically modify.
For example, we could define a single 'Search' template that displays all the results for a given search term.
We don't know what the search term is or how many results there are ahead of time; the page is created on the fly.
? Think about mad libs! This is essentially the idea.
! This course will be using EJS to embed JavaScript into our HTML to make descisions and format our pages for us.

* EJS uses tags to include JS in an HTML page, all of them having some variation of: <%= %>

* To implement JavaScript and NOT include the results, just the logic, we use the tags <% %>.

! Serving Static Files (like CSS) in Templates
? See examples

! EJS & Partials
* Partials are EJS' way to include components in templates, such as a navbar you'd like to have on each page of your website.
*/
