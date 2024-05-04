import { useState } from "react"


function generateGameBoard() {
  console.log("Making new game board...")
  // Makes an array 5000 elements long
  return Array(5000);
}

function InitialState() {
  // Calling a function previous declared to instantiate the state:
  // If we want to only execute the initial state once, get rid of the parens.
  const [board, setBoard] = useState(generateGameBoard());
  return (
    <>
      <button onClick={() => setBoard("hello")}>Click me to change state</button>
    </>
  )
}

export default InitialState