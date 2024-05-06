import LuckyN from "./LuckyN"
// import Dice from "./Dice"
import { sum } from "./utils";
import './App.css'
import './index.css'
import Box from "./Box"
import BoxGrid from "./BoxGrid";
// import Die from './Die'

// We want to set components for:
//    - Being able to play a dice game with numDice number of dice
//    - Show a win message when total equals 'goal'.
//    - A 'roll again' button that re-rolls all the dice

//! This shows a common pattern in React:
/*
  - A parent component defines a function
  - The function is passed as a prop to a child component
  - The child component invokes the prop function
  - The parent function is called, usually setting new state
  - The parent component is re-rendered along with its children
*/

//? Adding a function to be passed around as props:
function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((value) => value === dice[0]);
}

function App() {

  return (
    <div>
      {/* <Die val={3}/>
      <Die val={4}/> */}
      {/* <Dice dice={[3, 6, 1]} />
      <Dice dice={[8, 2, 6]} color="lime"/> */}
      {/* <LuckyN /> */}
      {/* <LuckyN winCheck={lessThan4} title="Roll Less than 4"/>
      <LuckyN winCheck={allSameValue} title="Roll the same number"/> */}
      <BoxGrid />
    </div>
  )
}

export default App
