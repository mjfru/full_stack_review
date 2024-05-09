/*
! useEffect
* Rendering & State, a quick recap:
  - A state setter function is called
  - Your code finishes running
  - The component re-renders
  - In this re-render, state will be set to the new value.
? This poses the question -- Can we do something AFTER a render or re-render?
* We can! These are side-effects / effects.
* Effects are for doing something after a render.
? These are useful for different kinds of things:
  - Changing parts of the DOM not covered by React
  - Async operations, like AJAX requests when a component is mounted
  - Doing things like when a component is about to be unmounted
* Remember, effects are used for 'side-effects': doing things unrelated to rendering

* To use an effect, import it and register is with: useEffect(function):
*/

import { useEffect } from 'react';
function MyComponent() {
  function myEffect() {
    // ... do something!
  }

  useEffect(myEffect);
}

//! The myEffect function always runs AFTER the first render and by default, myEffect runs after ALL re-renders.

/*
! The 2nd Argument to useEffect
* useEffect(myCallbackFunc);
?   - This runs myCallbackFunc after -every- render.
* useEffect(myCallbackFunc, [productId, userId])
?    - Now, it runs myCallbackFunc only if productId or userId variables have changed.
* useEffect(myCallbackFunc, [])
?     - This will run myCallbackFunc effect only the first time, aka on mount and never again.

* What's a real-world use-case of this?
* Imagine you have a website that pulls a lot of information from an API.
* You probably only want that big process to happen once, upon a user visiting your site and not when something minor changes!

"When a component renders, fetch data from an API."
  - Data fetching is asynchronous and may take a moment to complete
  - Maybe we want to show the user something, like a loading message, while fetching it.

- To fetch correctly:
  - Have an effect that runs only once
  - Inside effect, when an API call is finishes, will set the state and re-render.
*/