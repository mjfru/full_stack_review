/*
! DOM Events Notes
* The missing piece of JS and DOM manipulation-- listening and responding to user inputs and actions.

* There are three different ways, each with advantages and disadvantages, to listen and respond to events.

! 1. Inline Events
? As the name implies, this type of events are coded inline with the HTML file and is generally not recommended these days.

Example:
<button onClick="alert('You clicked me!')">Click Me!</button>

This way makes our markup longer, annoying need for quotation marks, hard to chain, doesn't carry over to any other elements, etc.

! 2. OnClick Property (and Friends)
? The second and more viable option is using the onclick property in a seperate JS file.

btn.onclick = function(){}

* The same applies for other events as well, such as:
  - onmouseenter
  - ondrag
  - oncopy

function yell() {
  console.log("Ahhhh!")
}

btn.onmouseenter = scream;


! 3. The Best Option - addEventListener
* Specify the event type and then a callback function to run! That's it!

const button = document.querySelector('h1');
?                       Event     Function
button.addEventListener('click', () => {
  alert('I've been clicked!');
})

? So, why is this better despite being quite a bit bulkier than the past two options?
* We can have multiple events occur for the same event listener; not possible with the other options as its simply overwritten instead.
* It also has greater flexibility, such as being able to add how many times it's able to fire, the frequency, etc.


! The Event Object
* An event object is automatically passed into our callback function when we use event listeners.
? Often, it's passed in as (event) or, more commonly, (e), but you can name it whatever you wish.
* This contains information about the event itself and we often need to rely on this when using keyboard events rather than simple mouse clicks, etc.

const input = document.querySelector('input');
input.addEventListener('keydown', () => {
  console.log('Key down!');
})

input.addEventListener('keyup', () => {
  console.log('Key up!');
})

* We can find out what key was pressed by using the event object, opening it up, and looking at key and keyCode.
? The position of the key is the keyCode, the actual letter (language-dependent) is the key.

! Form Events
? What happens when we submit a form? - It gets sent to wherever its action is pointing.
? Our browser window also typically ends up on that new page as well.
* To prevent this redirect / refresh of the page, we can use preventDefault()!

? Without Prevent Default:
const form = document.querySelector('#firstForm');
form.addEventListener('submit', (e) => {
  console.log('Submitted!')
})

! With Prevent Default:
const form = document.querySelector('#firstForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Submitted!')
})

! Input & Change Events
* If you want something to happen live as you're typing / clicking, we can add these events.
? 'Change' is a bit misleading, it doesn't refer to typing in more characters necessarily but when you leave the input and it's different than when you found it.

const input = document.querySelector('input');
input.addEventListener('change', (e) => {
  console.log('Changes...!?')
})

* The input type that more directly reflects a 'live change' is the input event.
? This fires whenever anything in the input is changed / altered / deleted.

const h1 = document.querySelector('h1');
h1.addEventListener('input', (e) => {
  h1.innerText = input.value; 
  console.log(e)
})

* Above, whenever the value changes in the input, the H1 will update with your typing as well.

! Event Bubbling
* This is an issue that occurs when you have nested elements within other elements...and a couple of layers of events.
? For example, if you click a button inside of a paragraph that has an event too, you'll get the button event and then the paragraph event.

! To prevent this, we can add .stopPropagation(); to the event (e) object.

! Event Delegation
* Newly added elements, such as items from a form, happen after the page loads and therefore may not function as intended (deleting something from a list, for example).
? To solve this, we can listen for events on the parent container and then do something like: e.target.remove();
*/
