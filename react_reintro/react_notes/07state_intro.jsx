/*
! Introduction to State in React
* State is data that is specific to an instance of a component and, crucially, it can change and is an essential concept in React.

? What goes into State?
* - Data fetched from an API
* - Form information
* - A variable that 'decides' whether something is showing or hidden
! - Ask yourself: 'Will this ever change?'-- If so, it should go in state somewhere!
*/

// WrongCounter.jsx
//? This is how you might approach this component without knowing about State but, as we'll find, it does not work as expected.
function WrongCounter() {
  //! This approach DOES NOT work, it has to do with how React renders and re-renders components. How does it know when to call the function again to update the view?
  //? This is changing behind the scenes but not rendering how we'd expect in our <p> tag below.
  let num = 0;
  const incrementNum = () => {
    num += 1;
    console.log(num);
  }
  return (
    <div>
      <p>The count is: {num}</p>
      {/* We want this button to increase the number. */}
      <button onClick={incrementNum}>Increment!</button>
    </div>
  )
}

// export default WrongCounter;

/*
! Using State
* We create state by using the very common useState hook:
? const [thing, setThing] = useState(0);
          1         2                - What state is initialized with
* This returns an array containing two elements:
*   - 1. The piece of state itself
*   - 2. A function to change the piece of state
! You must call useState INSIDE a component!
* useState is almost always used via destructuring.
*/

//* useState Counter.jsx
import { useState } from 'react';

function Counter() {
  // useState must be placed inside the component
  const [num, setNum] = useState(5);

  // Utilizing setNum in this changeNum function to set a new value
  const changeNum = () => {
    setNum(num + 1);
  }
  return (
    <div>
      <p>The count is: {num}</p> 
      {/* Set to 5 as an initial value now */}
      <button onClick={changeNum}>Increment</button>
    </div>
  )
}

// export default Counter

/*
* React is smart enough to know that the initial value in useState() should only be initialized once, it will remember it and adjust accordingly.
* One common pitfall is that the only way we change the value is by running the actual const [num, setNum] = useState(initialValue) runs.
*/