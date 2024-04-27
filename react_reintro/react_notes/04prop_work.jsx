/*
! Working More w/ Props - Conditionals
* Let's match a random matching game to display how conditionals work in React.
? If num1 === num2, we'll display some message.
*/

//? DoubleDice.jsx

function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3 ) + 1;
  const num2 = Math.floor(Math.random() * 3 ) + 1;
  //* We can have our conditional here:
  const result = num1 === num2 ? "You win!" : "You lose :("
  return (
    <div>
      //* And simply render it here
      <h2>{result}</h2>

      //? Or, we do do it all inline:
      {/* <h2>{num1 === num2 ? "You win!" : You lose :(}</h2> */}

      //! OR! We can restructure and render an HTML tag if we win.
      {/* {num1 === num2 ? <h3>You win!</h3> : null */}
      //! A fourth and final way, to eliminate needing the 'null'...
      //? If the left side is false, the right side won't even bother being read.
      {/* {num1 === num2 && <h3>You win!</h3>} */}
      <p>Number 1: {num1}</p>
      <p>Number 2: {num2}</p>
    </div>
  )
}

// export default DoubleDice

//? App.jsx
import DoubleDice from './DoubleDice'

function App() {
  return (
    <div>
      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/>
    </div>
  )
}

/*
! Styling Components Dynamically
* We can provide styles directly inline to our element and provide a JS object to do it.
? Inline styles here break CSS convention, they are camelCased.
* If styles are NOT dynamic, it's best practice to simply have them in their own CSS stylesheet.
*/

const styles = { color: 'purple' };

function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3 ) + 1;
  const num2 = Math.floor(Math.random() * 3 ) + 1;
  const isWinner = num1 === num2;
  // const styles = { color: 'green', fontSize: "40px" };
  const styles = { color: isWinner ? "green" : "red" };
  return (
    <div className="DoubleDice" style={styles}>
      <h2>Double Dice</h2>
      {isWinner && <h3>You win!</h3>}
      <p>Number 1: {num1}</p>
      <p>Number 2: {num2}</p>
    </div>
  )
}


//? New Example- Heading.jsx
function Heading({ color = 'teal', text }) {
  return <h1 style={{ color: color }}>{text}</h1>
}

// export default Heading

//? App.jsx
import Heading from './Heading'
function App() {
  return (
    <div>
      <Heading color="magenta" text="welcome"/>
    </div>
  )
}