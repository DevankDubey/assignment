function Student(firstName,lastName,rollno,sex,dob)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.rollno=rollno;
    this.sex=sex;
    this.dob=dob;
}

let student1=new Student('Abc','Def',2,'Male','17-10-1992');
let student2=new Student('xyz','pqr',3,'Male','01-03-1997');
if(student1.dob>student2.dob)
console.log(`${student1.firstName}${student1.lastName}`);
else
console.log(`${student2.firstName}${student2.lastName}`);

function Students(name, age) {
    this.age = age;
    this.name = name;
  }
  
  Students.prototype.findegligibleOrNot = function findegligibleOrNot(minAge) {
    if (this.age > minAge) {
      console.log(this.name + " is egligible ");
    } else {
      console.log(this.name + " is Not Egligible ");
    }
  };
  
   student1 = new Students("ABC", 15);
   student2 = new Students("DEF", 25);
  
  student1.findegligibleOrNot(18);
  student2.findegligibleOrNot(18);