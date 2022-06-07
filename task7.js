var itemList=document.querySelector('#items')
/*parent node
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode);*/

/*parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement);*/
/*childNodes
//console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';
//FirstChild
console.log(itemList.firstChild);
//FirstElementCHild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';
//LastChild
console.log(itemList.lastChild);
//lastElementCHild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';*/

/*nextSiblings
console.log(itemList.nextSibling);
//nextElementSiblings
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';*/

//createElement
//creae a div
var newDiv=document.createElement('div');
// add class
newDiv.className='hello';
//add id
newDiv.id='hello1';
//add attribute
newDiv.setAttribute('title','Hello Div');
//create textNode
var newDivText=document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
newDiv.style.color='red';

container.insertBefore(newDiv,h1);