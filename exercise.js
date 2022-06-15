// Using call,apply,bind method
let student={
    
    age:20
};
let printDetails=function(firstName,lastname){
    console.log(this.age+","+firstName+" "+lastname);
}
// Using call method
console.log("Using call method");
printDetails.call(student,"Devank","Dubey");
// Using apply method
console.log("Using apply method");
printDetails.apply(student,["Devank","Dubey"]);
//Using bind method
console.log("Using bind method");
let print=printDetails.bind(student,"Devank","Dubey");
console.log(print);
print();
// currying using bind method
let multiply=function(x,y){
    console.log(x*y);
}
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);
let multiplyByThree=multiply.bind(this,3);
multiplyByThree(5);

// currying using closure method
let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo=multiply(2);
multiplyByTwo(5);
let multiplyByThree=multiply(3);
multiplyByThree(5);


    
    