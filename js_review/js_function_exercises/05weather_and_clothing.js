/*
! isShortsWeather Function
It should accept a single number argument, which we will call temperature. 

If temperature is greater than or equal to 75, return true. 

Otherwise, return false.

This exercise assumes temperature is in Fahrenheit.
isShortsWeather(80) //true
isShortsWeather(48) //false
*/

function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  } else {
    return false;
  }
}

