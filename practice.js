class student{

    static count=0;  //static variable to call
   constructor (name,age,ph_no,marks){
       this.name=name;
       this.age=age;
       this.ph_no=ph_no;
       this.marks=marks;
       student.countStudent();
   }
   static countStudent(){
       return(student.count++);     //this is how u access static variable
   }
   setPlacementAge(minPlacementAge){
    return (minMarks)=>{
        if(this.marks>minMarks&&this.age>minPlacementAge){
            console.log(this.name+" is ready for placement")
        }
        else{
            console.log(this.name+" is not ready for placement")
        }
    }
   }
 eligible(){
       if(this.marks >=40){
           console.log(`${this.name} age ${this.age} is eligible`);
       }
       else if(this.marks<40){
           console.log(`${this.name} age ${this.age} is not eligible`);
       }
   }
}
const Rahul=new student('Rahul',28,12234,34);
const Ram=new student('Ram',25,23425,35);
const Devank=new student('Devank',26,43567,60);
const Shyam=new student('Shyam',27,78291,70);
const Ramesh=new student('Ramesh',29,34356,80);
console.log(student.countStudent());
Rahul.eligible();
Ram.eligible();
Devank.eligible();
Shyam.eligible();
Ramesh.eligible();
Rahul.setPlacementAge(18)(40);
Ram.setPlacementAge(18)(40);
Devank.setPlacementAge(18)(40);
Shyam.setPlacementAge(18)(40);
Ramesh.setPlacementAge(18)(40);
