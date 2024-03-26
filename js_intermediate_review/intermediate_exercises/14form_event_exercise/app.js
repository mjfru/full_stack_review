/*
! Form Events Exercise

Time to get some practice working with forms and form events!
index.html already has a form element that contains two <input> elements, one for quantity and one for a product name.
index.html also contains an empty <ul> where you will append new <li>'s.Your task is to follow these steps:

Listen for the form submission

When the form is submitted, prevent the default behavior

Grab the quantity input value and the product input value

Create a new <li> element.
Set the text on the new <li> to include the quantity and product name from the form.

Append the new <li> to the <ul> on the page

Reset the inputs
*/

const form = document.querySelector('form');
const productInput = document.querySelector('#product');
const quantityInput = document.querySelector('#qty');
const shoppingList = document.querySelector('#list');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = productInput.value;
  // console.log(product);
  const quantity = quantityInput.value;
  console.log(quantity);
  const listItem = document.createElement('li');
  listItem.innerText = `${quantity} ${product}`;
  // console.log(listItem);
  // shoppingList.appendChild(listItem);
  shoppingList.append(listItem);
  productInput.value = '';
  quantityInput.value = '';
})