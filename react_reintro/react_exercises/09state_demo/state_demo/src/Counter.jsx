import { useState } from "react";

function Counter() {
  const [ count, setCount ] = useState(0);
  const addOne = () => {
    // This is NOT the correct way to update state when the new state depends on the old state.
    setCount(count + 1)
  }

  const addThree = () => {
    // This syntax allows us to update state based on existing values.
    // (Current value, current value + numerical value)
    setCount(currentCount => currentCount + 1)
    setCount(currentCount => currentCount + 1)
    setCount(currentCount => currentCount + 1)
  }

  return (
    <div>
      <p>Count: { count } </p>
      <button onClick={ addOne }>+1</button>
      <button onClick={ addThree }>+3</button>
    </div>
  )
}

export default Counter;