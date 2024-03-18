/*
! Push/Pop/Shift/Unshift Practice

Please help me fix the planets array!
Using the array methods we just learned...

Remove the first element, "The Moon", from the planets array.

Add in "Saturn" at the very end of the planets array

Add "Mercury" as the first element in the planets array.

At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]
*/

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];

planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");
console.log(planets);



