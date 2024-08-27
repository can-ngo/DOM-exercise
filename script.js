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
