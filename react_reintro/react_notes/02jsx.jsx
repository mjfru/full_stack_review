/*
! More on JSX
* You must explicitly close self-closing tags, such as <br/>.
* Components can only return a --single-- top-level element!

? Below, we saw the <form> acting as a wrapping element.
* However, much more common is to use a -fragment-: <> </>

! Evaluating JS in JSX
* Curly braces {} allow us to insert traditional JS into HTML in our JSX.
<p> {1 + 2} </p>

const pet = "Lucky"
return <p>{pet} says 'Woof!'</p>

! Styling in JSX
* 'class' cannot be used for grouping content for styling, it's a reserved keyword in React.
* In JSX, we use className instead.
* From there, in our source (src) directory, we can make a CSS file like normal, choose our styles, etc.
? However, because we're using webpack with React, we import it like:
* import './FileName.css'
*/

// Example Component
// LoginForm.js

function LoginForm() {
  //! <form> is acting as the components sole top-level element.
  // The parens () allow us to simply structure our JSX in a more readable way instead of having the <form> immediately after the return.
  return  (
  // <>
  <form>
    //! Notice the closing 'slash' with the input element.
    <input type="text"/>
    <input type="password"/>
  </form>
  // </>
  );
}

// export default LoginForm;

// Practice Component #1 - Dice
function Die() {
  const roll = Math.floor(Math.random() * 6)
  return <h1>Die Role: {roll}</h1>
}

export default Die;

// in App.jsx
import Die from "./Die";
function App() {
  return (
    <div className="App">
      <Die/>
    </div>
  )
}

// export default App

/* 
? What if you wanted to roll three dice?
? Of course, you could just have three <Dice/> components render, but an even more React-y way to do this is making a component just for that!
 */

// Practice Component #2 - DiceRoll
import Die from "./Die"
function DiceRoll() {
  return (
    <div>
      <h1>Dice Roll</h1>
      <Die/>
      <Die/>
      <Die/>
    </div>
  )
}