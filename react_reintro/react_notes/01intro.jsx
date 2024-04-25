/*
! React
* React is a super popular JavaScript frontend tool that helps us build user interfaces from components.
* We can assemble smaller components to build larger applications.
You can think of React as more of an ecosystem than just another individual library.

? What are components?
! Components combine HTML/CSS and logic into a single, reusable function.
* They are essentially functions that 'know' how to render themselves into HTML.

! JSX
* This is possible through JSX, a syntax extension for JavaScript.
* It allows us to write markup that looks like HTML directly inside of our code.
? It's not technically 'legal' JS on its own, so it must be transpiled first (usually by Babel).

! Basic App Structure of React Apps
* Most React apps follow some standard conventions:
  1. Have a component, your highest-level component, named 'app'.
  2. Within 'App', other components are placed within.
  3. The 'App' component is rendered inside the root <div> when the app is loaded.

! Basic Component Syntax
* A component is made up of a function with a name (uppercased) and it returns some JSX content.
? Keep in mind, defining a component is NOT the same as rendering it; it does nothing for us until we put it in our app.
* Each component gets its own file; the example below would not be conventional in a React app.
! To link files together, we must use the ES6 module syntax that allows us to import and export files.

In the component...
export default function FunctionName() {
  ...
}

? Or export it at the bottom:
* export default FunctionName;

Yet another option is (especially useful if exporting two things from one file):
export {FunctionName}

In the App.jsx...
import FunctionNamer from "./FunctionName";

Or, if using the last option
import {FunctionName} from "./FunctionName";
*/

function Header() {
  return <h1>I'm a header component!</h1>
}

// App.jsx

//? Making a very basic component...
function Greeter() {
  return <h1>HELLO!</h1>
}

function Dog() {
  return <p>Woof!</p>
}

export default function App() {
  return (
    <div className="App">
      //? ...And here's our component placed in the App.
      <Greeter/>
      <Dog/>
    </div>
  )
}

