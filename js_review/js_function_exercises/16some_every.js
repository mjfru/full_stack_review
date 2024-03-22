/*
! Some/Every Exercise
Define a function called allEvens that accepts a single array of numbers. 
If the array contains all even numbers, return true.
Otherwise, return false. 
*/

const allEvens = array => {
  return array.every(num => {
    return num % 2 === 0;
  })
}

const trialNums = [2, 4, 6, 8, 10]
console.log(allEvens(trialNums))