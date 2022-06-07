const ul= document.querySelector('.items');
//ul.firstElementChild.textContent='Hello';
ul.firstElementChild.innerHTML='<h1 style="color:green;">Hello</h1>';
ul.children[1].innerHTML='<h2 style="color:yellow;">Hello</h2>';
ul.lastElementChild.innerHTML='<h1> Hello</h1>';