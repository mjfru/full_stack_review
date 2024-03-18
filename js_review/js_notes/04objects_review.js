/*
! JS Objects
! Only new or information I would like to reinforce will be included in these notes.

* Another data structure, objects are collections of properties, key-value pairs.
* To access data, we can use the key name, in quotes, in square [] brackets.
* Another method is to use the dot syntax... object.key --> returns the value.
! All keys, except for the rare symbols, are converted to strings.

? Reminder: Arrays can contain objects and objects can contain arrays, making both more versatile and powerful.
*/

const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  averageGoodSleep: "2:13 hours",
};

const comments = [
  {username: 'Tom', text: 'haha', votes: 9},
  {username: 'Dean', text: 'agreed', votes: 3}
];

// to access:
comments[1].text // the text in the first index