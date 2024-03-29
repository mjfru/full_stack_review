/*
! Node JS
* What is Node? -- A JavaScript Runtime Environment
Until recently, we could only run JS code in a web browser.
Node is a JavaScript runtime that executes code outside of the browser!
! Therefore, we can use the same JS syntax to write - server-side - code instead of relying on other languages like Python or Ruby.

? What do people build with Node.js?
  - Web Servers! Our primary use-case
  - Command Line Tools
  - Native Apps (Like VSCode)
  - Video Games
  - Drone Software

! The Node REPL (Read, Evaluate, Print, Loop)
While there is no window scope in NodeJS, there is a global scope, where things like setTimeout live.
Node also comes with a bunch of built-in modules that don't exist in the browser!
  - These modules help us do things like interact with the operating system and files/folders
* If running from your terminal, not codeRunner in VSCode, be in the correct directory and type: node fileName.js 
! To exit the Node REPL, ctrl+c (twice) or .exit

! Working with Modules
* We can write some code in one file and, through the magic of JS and Node, we can require it and use it in others.

? In the file you're import TO:
const variable = require('./nameOfFile');
? Or destructure only particular things you want from the origin file:
const { thisFunction, thatFunction } = require('./nameOfFile');

? In the file you're importing FROM:
module.exports.functionName = whateverYouWantToName

* There is an 'exports' shortcut as well.

! Requiring a Directory
* A common pattern is requiring an entire directory as well, many applications do this to make it more robust.
? This is done by require('./directoryName'); Just be careful of the path!

! NPM - Node Package Manager
* NPM is really two things:
  1. A library of THOUSANDS of packages published by other developers that we can use for free.
  2. A command line tool to easily install and manage those packages in our Node projects.

* If you have a package.json in your project or have downloaded one with it, the node_modules will NOT (typically) be included!
! Running npm install (with nothing after it) will look at that package.json and install the correct modules and versions it requires.
*/
