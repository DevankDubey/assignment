const btn= document.querySelector('.btn');
const myForm= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#users');
myForm.addEventListener('submit',savedata);
function savedata(e){
    
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
        localStorage.setItem('nameInput',name);
        localStorage.setItem('emailInput',email);
    }
myForm.addEventListener('submit',onSubmit);    
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value===''|| emailInput.value==='')
    {
        //alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';
        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        li.append(document.createTextNode(`${nameInput.value}:${emailInput.value}`))
    userList.appendChild(li);
    // clear fields
    nameInput.value='';
    emailInput.value='';
    }
    
}
