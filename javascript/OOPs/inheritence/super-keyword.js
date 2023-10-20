// super = Refer to the parent class.
//          commonly used to invoke constructor of a perent class     

class Animal{


    constructor(name,age){
        this.name = name;
        this.age =age;
    }
}
class Rabbit extends Animal{

    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{

    constructor(name,age,swinSpeed){
        super(name,age);
        this.swinSpeed = swinSpeed;
    }
}

class Hawk extends Animal{

    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
}
const rabbit =new Rabbit("rabbit",1,40);
const  fish =new Fish("fish",2,60);
const  hawk =new Hawk(" hawk",3,30);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);