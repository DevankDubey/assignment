class User{
    static count=0;
    constructor(username,email,password)
    {
        this.username=username;
        this.email=email;
        this.password=password;
        User.count++;
    }
    printcountUsers(){
         console.log('value is '+User.count);
    }
    register(){
        console.log(this.username+' is now registered');
    }
}
let bob=new User('bob','bob@gmail.com','12345');
bob.register();
bob.printcountUsers();
let boy=new User('boy','boy@gmail.com','512345');
boy.register();
boy.printcountUsers();
class Member extends User{
    constructor(username,email,password,memberpackage)
  {  super(username,email,password);
    this.package=memberpackage;
}
getPackage(){
    console.log(this.username+' is subscribed to the '+this.package+'package');

}
}
let mike=new Member('mike','mike@gmail.com','3252545','standard');
mike.getPackage();
mike.register();
