/*
! Forms in React
* HTML form elements work differently than other DOM elements in React.
? Form elements naturally keep some internal state.

* Therefore, it's convenient to have a JS function that: handles the submission of the form AND has access to the data the user entered.
! The technique to get this is 'controlled components'.
? We make React state be 'the single source of truth'.
? React controls:
  - What is shown (the value of the component)
  - What happens when user types (this gets kept in state).
* Input elements controlled in this way are called controlled components.


! Labeling Inputs in React
* Normally, on a standard HTML page, we'd be using 'for' on a label to match an id on the actual input.
? However, the 'for' word is reserved in JS because we use it for things such as 'for loops'!
* Instead, we use htmlFor to connect our labels to inputs in React.

! Handling Multiple Inputs
? Instead of using a new line of useState for every input we have on a form, we can use an object to hold all of them together!
{firstName: "", lastName: ""}

? And we figure out what fields changed like this:
const fieldName = e.target.name;

* To handle multiple controlled inputs:
? - Instead of making a seperate onChange handler for every single input, we can make one generic function for multiple inputs!
? - Add HTML name attribute to each JSX input element
? - Then the handler function can determine the key in state to update based on event.target.name
! Using this method, keys in state must match input name attributes.
*/

const [formData, setFormData] = useState({
  firstName: "",
  lastName: ""
});

function handleChange(event) {
  const fieldName = event.target.name;
  const value = event.target.value;

  setFormData(currentData => {
    currentData[fieldName] = value;
    return {...currentData};
  });
}

/*
* The Shopping List demo demonstrated passing data UP to a parent component.
* Remember, we generally have downward data flow: 'smart' parent components with simpler child components.
* However, it's common for form components specifically to manage their own state and 'smart' parent components usually have a 'doSomethingOnSubmit' method to update its state after the form submission...
! So: parent passes its doSomethingOnSubmit method as a prop to child.
! The child component calls this method, updating the parents state.
? The child is 'dumber' -- all it knows is to invoke that function with its data.
*/