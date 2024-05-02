import './App.css'
// import ColorBox from './ColorBox'
import ColorBoxGrid from './ColorBoxGrid'

function App() {
  // Making this array to hold all the possible colors to be used.
  // Will be passed in as 'colors' for props rather than putting the entire array in the prop itself.
  const colors = [
    "red",
    "orangered",
    "yellow",
    "teal",
    "green",
    "violet",
    "goldenrod",
    "grey",
    "blue",
    "darkcyan",
    "darkorange",
    "rebeccapurple",
    "pink",
    "aquamarine",
    "crimson",
    "darkgreen",
    "darkorchid",
    "deepskyblue",
    "deeppink",
    "indigo",
    "lavender",
    "lightcoral",
    "lime",
    "maroon",
    "mediumspringgreen",
    "midnightblue",
    "navy",
    "plum",
    "powderblue",
    "seagreen",
    "silver",
    "steelblue",
    "tomato",
    "turquoise",
    "whitesmoke"
  ]

  return (
    <div>
      {/* Passing the 'colors' array in as props rather than polluting the component with all the individual colors in the array. */}
      {/* <ColorBox colors={colors}/> */}
      {/* The ColorBoxGrid contains 25 ColorBox components rather than rendering each individually. */}
      <ColorBoxGrid colors={colors} />
    </div>
  )
}

export default App
