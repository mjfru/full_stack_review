/*
! The World of the DOM (Review)
* The DOM is a JS representation of a webpage; your window into the contents of a page and allows us to interact with it via JS.
? HTML & CSS go in, JS Objects come out, and we can interact and manipulate them.

! Selecting Elements
? How do we select what we want to change or manipulate using JS? -- Selectors!

! .getElementById() - takes in a string and retrieves the element that has the specified id.
const tableOfContents = document.getElementById('toc');

! .getElementsByTagName & .getElementsByClassName - Note the plural (-s)!
* This returns an HTML collection to us after passing in a string that matches the name of the tag.
const allImages = document.getElementsByTagName('img');
? From here, you can manipulate all the images selected by this using typical JS.
  for (let img of allImages) {
    img.src = '...'
  }
* .getElementsByClassName() does nearly the same thing as ByTagName, but looks at the class elements are assigned instead.
const squareImages = document.getElementsByClassName('square');

! querySelector - A better and newer way to do all of the above!
* This allows you to use css markup when specifying arguments.
document.querySelector('#fancy') // targets an id of 'fancy'.
document.querySelector('.general') // targets anything with the class of 'general'.
document.querySelector('a[title='Java']') // targets the 'a' type and the input type!

! querySelectorAll - Instead it now targets and returns all of something.
let links = document.querySelectorAll('p a') // Returns all anchor tags nested inside p tags.
for (let link of links) {
  console.log(link.href);
}

! Manipulating the DOM - We've learned how to select elements from the DOM...now what do we do with them?
* Many properties and methods are available for us to manipulate HTML and CSS with JS, some are common, some you'll need to lookup!

! .innerText
* .innerText shows us everything between the HTML tags, like all the content inside of a <p>tag</p>
? You cannot use HTML markup when manipulating with innerText. <i></i> will show up on your page instead of being applied!
document.querySelector('p').innerText = 'lolololol'
const allLinks = document.querySelector('a');

for (let link of allLinks) {
  link.innerText = 'I am a link!'
}

! .textContent
* .textContent - Nearly identical but includes all the space and breaks that are taken up by your markup (nested elements, like an <a> tag)

! .innerHTML
* .innerHTML - Gives us the entire markup of your selection, tags included.
document.querySelector('h1').innerHTML = '<b>Title!</b>'
document.querySelector('h1').innerHTML +=  'and more!' - appends to the end

! Working with Attributes (href, src, id, class, input type, etc.)
* Just like any regular old JS object, we can change the attribute of something we've selected with dot . notation.
document.querySelector('#secondaryHeader').id = 'secondary'

* We can also use the getAttribute method to achieve this.
const firstLink = document.querySelector('a');
firstLink.getAttribute('href') // displays the href set to this link

* setAttribute can then change it! (getters and setters, am I right?!)
firstLink.setAttribute('href', 'http://google.com');


! Manipulating Styles
? Quick note - While we use dashes - in CSS, when we interact with styles in the DOM, those become camelCased. (backgroundColor, fontSize)

h1.style.color = 'green'
h1.style.fontSize = '3em'
h1.style.border = '2px solid red'

window.getComputerStyle(elementName) will provide us a massive object of all the styles applied to it via CSS / inline and default.

* While the above works, it creates an inline style...which is not ideal!
! classList - We can use this to show the classes on an element and manipulate them directly.
* use the .add syntax to...add a class!
h2.classList.add('border')
* .remove is available to delete a class, .contains to check if one is present and...
* .toggle will temporarily enable and disable a class (think of a checklist, accordion menus, etc.)

! Navigating Through Parent/Children/Siblings
* We can use .parentElement to move up from the current elements level...and chain this as much as we want, all the way to the window.
* .nextSibling will give us the next -node- of your element...which is not really what we want...
! .nextElementSibling does give us what we want, the next element sibling and access to its content.

! Appending
* We can use document.createElement('tagNameHere') to...make a new element on our webpage.
While we made a new element, it's not added to our page yet!
* We use parentElementToAddTo.appendChild(variableNameYouChose)

const newH3 = document.createElement('h3')
newH3.innerText = "I'm new here."
document.body.appendChild(newH3)

* .append will simply make it the last child of whatever you are appending to.
* .prepend does the opposite and adds to to the beginning.

* .insertAdjacentElement() is useful and confusing to appending something between elements.
const h2 = document.createElement('h2')
h2.append('Are wonderful')
const h1 = document.querySelector('h1')
h1.insertAdjacentElement('afterend', h2) <--- where you want it and what it is you're adding.

! Removing
* The older, original .removeChild() is still available but is clunkier and less direct than the current iteration.
* These days, we have .remove()...and we pass in exactly what we want to delete!
*/
