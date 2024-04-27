/*
! Working with Props - Map, Loops, and Arrays
* We often provide an array of elements that we've generated and want to use.
*/

//? ColorList.jsx
function ColorList({ colors }) {
  // const elements = [<p>Hello</p>, <h1>Bye!</h1>];
  //? For this demo, we want to take all the colors from props and put them in an <li>
  // const lis = colors.map(color => <li>{color}</li>);
  //! More common than the above way is to do this all in-line.
  return (
    <div>
      <p>Color List</p>
      //? This takes every value from the list and renders it in a paragraph; no commas, spaces, etc.
      {/* <p>{ colors }</p>
      <p> { elements } </p> */}
      <ul>
        {colors.map((c) => (
          <li style={{ color: c }}>{c}</li>
        ))}
      </ul>
    </div>
  )
}

// export default ColorList
import ColorList from './ColorList'
//? App.jsx
function App() {
  return (
    <div>
      <ColorList colors={["red,", "pink", "purple", "teal"]}/>
    </div>
  )
}