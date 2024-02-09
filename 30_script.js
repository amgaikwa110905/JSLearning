const elementTitle = document.getElementById('title');
console.log(elementTitle.innerHTML);


const elementH2 = document.getElementsByTagName('h2');
console.log(elementH2[0].innerHTML);
console.log(elementH2[1].innerHTML);

const myProfile = document.querySelector('#profile');
myProfile.setAttribute('href','https://www.google.co.in/');

const listHeadingElement = document.querySelector('#listHeading');
listHeadingElement.style.color = 'Red';


console.log('------Create Node--------');

const nodeElement = document.createElement('li');
const nodeElementText = document.createTextNode('Angular or Element');
nodeElement.appendChild(nodeElementText);
const listElement = document.querySelector('#list');
listElement.appendChild(nodeElement);