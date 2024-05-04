import { useState } from "react";

function AdvScoreKeeper({ numPlayers, target }) {
  
  //? Setting state to begin with an array to match the number of players, populated with zeroes.
  const [ scores, setScores ] = useState(new Array(numPlayers).fill(0));
  // const players = new Array(numPlayers).fill(0);
  // console.log(players);

  // This function needs to know which player it's being called on...
  // const incrementScore = (idx) => {
      //* Intuitive Way:
  //   setScores(prevScores => {
  //     const copy = [...prevScores];
  //     copy[idx] += 1;
  //     return copy;
  //   })
  // }

  //* The more 'Reacty' Way:
  const incrementScore = (idx) => {
    setScores((prevScores) => {
      return prevScores.map((score, i) => {
        if (i === idx) return score + 1;
        return score;
      })
    });
  }

  const reset = () => {
    setScores(new Array(numPlayers).fill(0))
  }

  return (
    <>
      <div>
        <h1>Custom Score Keeper</h1>
        <p>Number of players: {numPlayers}</p>
        <p>Target Score: {target}</p>
        <ul>
          {scores.map((score, idx) => {
            return (
              <li key={idx}>
                Player {idx + 1}: {score} point(s)
                <button onClick={() => incrementScore(idx)}> +1 </button>
                {/* Adding a 'win' message */}
                {score >= target && "Winner!"}
              </li>
            )
          })}
        </ul>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default AdvScoreKeeper;