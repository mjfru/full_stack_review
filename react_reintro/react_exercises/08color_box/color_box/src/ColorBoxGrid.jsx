import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css";

// The purpose of this component is to be able to declare a number of ColorBox(es) to be made instead of repeatedly listing them as components.
function ColorBoxGrid({ colors }) {
  // This will start as an empty array...
  const boxes = [];

  // And the above array will be populated by this loop, giving us 25 boxes.
  for (let i = 0; i < 25; i++) {
    // Each iteration pushes a new ColorBox into the array
    boxes.push(<ColorBox colors={colors}/>)
  }
  return (
    <div className="ColorBoxGrid">
      {/* The content of that array, all of the ColorBoxes, will be displayed here in {boxes} */}
      {boxes}
    </div>
  )
}

export default ColorBoxGrid;