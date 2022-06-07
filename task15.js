class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName
        this.dob=dob;
    }
    getBirthYear()
    {
        return this.dob;
    }
    getFullName()
    {
        return `${this.firstName}${this.lastName}`;
    }
}
const person1= new Person('John','Doe','4-3-1980');
const person2= new Person('Mary','Smith','13-3-1980');
console.log(`${person1.getFullName()}${person1.getBirthYear()}`);
console.log(person2.getBirthYear());