/*
! Logical AND Mystery Exercise
I've provided you with a conditional statement that uses a variable called mystery.
Please change the value of mystery so that the conditional is true and "YOU GOT IT" is printed to the console.
Do not change anything other than the value of mystery on line 1!
*/

const mystery = 'Pencil7'; 

if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}