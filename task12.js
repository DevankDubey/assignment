const person={
    firstName:'Devank',
    lastName:'Dubey',
    age:29,
    hobbies:['music','movies','gym'],
    address:{
        street:'ITI Mankapur',
        city:'Gonda',
        state:'UP',
    }
}
console.log(person.hobbies[1]);
console.log(person.address.state);
const {age,address:{state}}=person;
console.log(age,state);
const todos=[
    {
        id:1,
        text:'Take out the trash',
        iscompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        iscompleted:true
    },
    {
        id:3,
        text:'Dentist appt',
        iscompleted:true
    },
];
for(let i=0;i<todos.length;i++)
{
    console.log(todos[i].text);
}
let i=0;
while(i<todos.length)
{
    console.log(todos[i].id);
    i++;
}
