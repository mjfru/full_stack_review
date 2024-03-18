/*
! Object Access Exercise
In index.js, you'll find a restaurant object that contains a name,address, city, state, and zipcode. 

Your task to is to create a variable named fullAddress that points to a string using the information from restaurant. 

fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object.
Make sure to add any necessary commas or spaces between the values as seen in the exact expected output format shown below.
*/

const restaurant = {
  name: 'Ichiran Ramen',
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: 'Brooklyn',
  state: 'NY',
  zipcode: '11206',
}


let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
console.log(fullAddress);