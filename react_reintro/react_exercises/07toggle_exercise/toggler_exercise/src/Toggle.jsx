import { useState } from "react";
import "./Toggler.css"

function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  return (
    <p className="Toggler" onClick={toggleIsHappy}>
      {isHappy ? '😁' : '🤐'}
    </p>
  )
}

export default Toggler