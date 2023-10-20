//  inhreitence = a childe class can inhrit all the 
// mathods and properties from another class

class animal{

    alive = true;
    eat(){
        console.log('this',name,'is eating');

    }
    sleep(){
        console.log('this',this.name,'is sleep');
    }
}
class Rabbit extends animal{
    name ="rabbit";
    run(){
        console.log('this',this.name,'is running');
    }
}
class Fish extends animal{
    name ="fish";
    swim(){
        console.log('this',this.name,'is swimming');
    }
}
class Hark extends animal{
    name ="hark";
    fly(){
        console.log('this',this.name,'is flying');
    }
}


const rabbit =new Rabbit();
const fish =new Fish();
const hark =new Hark();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();



