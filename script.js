// Task 1: add <p> with red text that says "Hey I'm red!"
const newPElement = document.createElement('p');
document.querySelector('body').appendChild(newPElement);

newPElement.setAttribute('id','first-p');
newPElement.innerText = "Hey I'm red";
// document.querySelector('#first-p').innerText = "Hey I'm red!";
newPElement.style.color = 'red';

// Task 2: add an <h3> with blue text that says "I'm a blue h3!"
const newH3Element = document.createElement('h3');
document.querySelector('body').appendChild(newH3Element);

newH3Element.innerText = "I'm a blue h3!"
newH3Element.style.color = 'blue';

// Task 3: add <div> with a black border and pink background color
// with the following elements inside of it:
//  - another <h1> that says "I'm in a div"
//  - a <p> that says "ME TOO!"
//  - Hint for this one: after creating the <div> with createElement,
// append the <h1> and <p> to it before adding it to the cointainer
const container = document.createElement('div');
document.querySelector('body').appendChild(container);
container.setAttribute('id','container');

const h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
container.appendChild(h1);

const p = document.createElement('p');
p.innerText = "ME TOO!";
container.appendChild(p);