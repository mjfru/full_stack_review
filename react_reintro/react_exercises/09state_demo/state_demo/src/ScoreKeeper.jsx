import { useState } from "react";
function ScoreKeeper() {
  //! Using an object to hold initial state:
  const [scores, setScores] = useState({
    p1Score: 0, p2Score: 0
  });

  //? If we set the state to the same object, React won't notice / refresh what's visible to the user; it's the same unchanged location in memory...it doesn't look inside the key value pairs.
  //? So, we need to instead copy it to set the state now (usually via the spread operator)'
  //* The new copy via the spread operator has a new address in memory and can now be rendered!
  const increaseP1Score = () => {
    // All the existing scores, the key and value to update
    const newScores = { ...scores, p1Score: scores.p1Score + 1 };
    setScores(newScores);
  }
  const increaseP2Score = () => {
    // All the existing scores, the key and value to update
    const newScores = { ...scores, p2Score: scores.p2Score + 1 };
    setScores(newScores);
  }
  return (
    <div>
      <p>Player 1: {scores.p1Score}</p>
      <p>Player 2: {scores.p2Score}</p>
      <button onClick={increaseP1Score}>Player 1 +1</button>
      <button onClick={increaseP2Score}>Player 2 +1</button>
    </div>
  )
}

export default ScoreKeeper

// Instead of having a piece of state keep track of every player's score, we can simply use an object instead!