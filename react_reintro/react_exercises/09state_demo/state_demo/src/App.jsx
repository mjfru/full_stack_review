import AdvScoreKeeper from './AdvScoreKeeper'
import './App.css'
// import Counter from './Counter'
// import InitialState from './InitialState'
// import ScoreKeeper from './ScoreKeeper'
// import EmojiClicker from './EmojiClicker'

function App() {

  return (
    <>
      {/* <h1>State Demo</h1> */}
      {/* <Counter />
      <InitialState /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      <AdvScoreKeeper numPlayers={5} target={3} />
    </>
  )
}

export default App
