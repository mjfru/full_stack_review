/*
! React Props
* Props are like arguments that we can provide our components and then use them within.
* We use props to make configurable, customizable components.
? These look like HTML attribute syntax: <Component color="green"/>
*/

//? In a new component, Greeter.jsx
function Greeter() {
  // Right now, our function isn't expecting any arguments/props!
  return <h1>Hi there!</h1>
}

// export default Greeter

//? In our App.jsx
import Greeter from './Greeter';

function App() {
  return (
    <div>
      {/* So far, this does nothing but a prop is passed into greeter. */}
      <Greeter person="Bill"/>
    </div>
  )
}

//? Updated Greeter.jsx
//* Passing in an argument, props, which anything we declared in the App.jsx
function Greeter(props) {
  // console.log(props);
  //! This will show us an OBJECT, in which we'll see: person: "Bill"
  return <h1>Hi there, {props.person}!</h1>
}

//? It's common to destructure props in your components, especially handy if there's a few passed in and you're only concerned with one or two:
//* function Greeter({ person }) {...}

/*
! Non-String Props
* To add multiple props to a component, you'll simple use a space and declare it!
* To pass props of different types, not just strings, 
*/

//? More Greeter example
<Greeter person="Matt" punctuation="!"/>
function Greeter({ person, punctuation }) {}

//? Die.jsx
function Die({ numSides }) {
  const roll = Math.floor(Math.random() * numSides + 1)
  return <p>{numSides}-sided Die roll: {roll}</p>
}
// export default Die;

//? App.jsx
import Die from "./Die";

function App() {
  return (
    <div>
      //? The prop we're passing is a number, so instead of using quotes, use curly {} braces.
      <Die numSides={20}/>
      <Die numSides={6}/>
      <Die numSides={10}/>
    </div>
  )
}

// export default App;

/* 
! Default Prop Values
* To add a default value, you add a value when you're destructuring your props in your component.
? i.e. - ({ numSides = 6 })
? i.e. - ({ person="everyone", from="anonymous" })

! Passing Arrays & Objects as Props
* We use the same syntax as numbers for arrays and objects.
? With objects specifically, it looks a bit strange because we use double curly braces, one set to declare a non-string value, the other because it's an object.
*/

//? ListPicker.jsx
//* Expects values as its prop
function ListPicker( {values} ) {
//* Picks a random element from values:
  const randIndex = Math.floor(Math.random() * values.length);
  const randElement = values[randIndex];
  return (
    <div>
      <p>The list of values: { values }</p>
      <p>Random Element is { randElement }</p>
    </div>
  )
}

// export default Listpicker

//? App.jsx
import ListPicker from './ListPicker';
function App() {
  return (
    <div>
      //! Notice the curly boys:
      <ListPicker values={[1, 2, 3]}/>
      <ListPicker values={['a', 'b', 'c']}/>
    </div>
  )
}