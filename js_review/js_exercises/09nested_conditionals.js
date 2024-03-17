/*
! Nested Conditional Practice
I've given you a nested conditional that uses a variable called num.
I would like for you to change the value of num to another number, so that "YOU GOT ME!" is printed out.
*/

const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}