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
*/