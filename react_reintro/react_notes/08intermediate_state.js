/*
! Intermediate State Concepts
* See 'State Demo' - Exercise #09
* Working with Objects in State - Exercise #09 Component

* Remember - Both arrays and objects are mutuable things, which means if we change the inside, React doesn't know because it makes comparisons based on -identity- in memory.
! This is why we use things like the spread operator to make a copy of an array or object and make our changes to the newly created copy.
*/

// Common Patterns for Updating Arrays in State

// A basic structure (objects in an array):
const shoppingCart = [
  { id: 1, product: "HDMI Cable", price: 4 },
  { id: 2, product: "1TB External SSD", price: 120 },
  { id: 3, product: "27 Inch Monitor", price: 100}
];

// Adding to an array
// Using the spread operator to spread into a new array and add in whatever you want to your new object.
[...shoppingCart, { id: 4, product: "Coffee", price: 8.99 }]

// Removing an element
// The most common way to remove an element while using React is via the filter method.
//? Filter takes a boolean callback, executes it for every element, and returns a new array for everything that came back as 'true'.

shoppingCart.filter((item) => item.id !== 2)

// So this would give us a new array of all the items except for the product with the id of '2'.


// Updating all elements in an array
// The map method is a good technique to use here, it makes a copy of every element.

shoppingCart.map((item) => {
  return {
    // Copying everything from the original array/item
    ...item,
    // And overwrite the product
    produict: item.product.toLowerCase()
  };
})

// Modifying a particular element in an array:
// We can map over the entire array to specify what to look for, take that value, and give it a new value.
shoppingCart.map((item) => {
  if (item.id === 3) {
    return { ...item, price: 10.99 };
  } else {
    return item;
  }
})

// To sort an array:
// Remember, we can't (shouldn't) change an array in React, so we'll copy it first and then use the method of our choosing
const arr = [1, 4, 2, 6, 8, 3];

const sorted = [...arr].sort();
console.log(arr, sorted)