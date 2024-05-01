import { useState } from "react";
import "./Toggler.css"

function TogglerCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const incrementCount = () => setCount(count + 2);
  return (
    <>
      <p className="Toggler" onClick={toggleIsHappy}>
        {isHappy ? '😁' : '🤐'}
      </p>
      <p>{count}</p>
      <button onClick={incrementCount}>+ Increase Count +</button>
    </>
  )
}

export default TogglerCounter