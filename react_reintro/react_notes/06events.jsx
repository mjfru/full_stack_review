/*
! Events & Event Handlers in React
* Outside of React, we'd be using a lot of querySelectors, eventListeners, etc.
* In React we add attributes set to a function (onClick={functionName}) -- NO PARENS!
? Be careful of using camelCase, which is standard for React and will throw errors if not used.
*/

//? Clicker.jsx
function handleClick() {
  console.log('Clicked the button!')
}

function handleHover() {
  console.log('Hovered over the <p> tag!')
}

function Clicker() {
  return (
    <div>
      <p onMouseOver={handleHover}>Hover Over Me!</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

// export default Clicker

/*
? What if we need access to the event object itself?
Maybe we want to know which key(s) was pressed, getting information from a form, prevent a page from refreshing, etc.
*/

//? Form.jsx

function handleFormSubmit(e) {
  e.preventDefault();
  console.log('Form submitted!');
}

function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  )
}

// export default Form