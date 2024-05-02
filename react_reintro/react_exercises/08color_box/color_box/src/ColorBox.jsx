import { useState } from "react";
import './ColorBox.css';

// Creating a helper function to be used to get a random color.
// Takes in an array, which in this case will be our props 'colors' array and gives us a random index to access a color in that array.
const getRandomColor = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function ColorBox({ colors }) {
  // Initializing our state, calling the above function to give it an initial random color
  const [color, setColor] = useState(getRandomColor(colors));
  // Providing a function for the onClick event to change the color of the clicked box.
  const changeColor = () => {
    // Calling the above function to get a random color
    const randomColor = getRandomColor(colors);
    // Sets the color to whatever random color is produced.
    setColor(randomColor);
  };

  return (
    <div 
      className="ColorBox"
      // {{}} enables the backgroundColor to accept a JS variable, color, in this case, which has a random color assigned to it because of the code above.
      style={{backgroundColor: color}} 
      onClick={changeColor}>
      </div>
  )
}

export default ColorBox;