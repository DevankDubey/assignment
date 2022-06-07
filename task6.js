//query selector
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';
var input=document.querySelector('input');
input.value='Hello World';
var submit=document.querySelector('input[type="submit"]');
submit.value='Send';
var item=document.querySelector('.list-group-item');
item.style.color='red';
var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color='black';
seconditem.style.backgroundColor='green';
var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';
var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.visibility='hidden';
var fourthitem=document.querySelector('.list-group-item:nth-child(4)');
fourthitem.style.color='coral';
// query selectorall
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';
var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
    even[i].style.backgroundColor='#ccc';
}
