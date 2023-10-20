// static = belongs to the  Class ,not objects
            // peoperties: useful for caches, fixed-configuration
            // mathods: useful for utillity functions



class car{
    static numberofcars =0;

    constructor(model){
        this.model = model;
        car.numberofcars +=1;
    }
    static startRace(){
        console.log("3...2...1...GO!");

    }

}
const car1 = new car("Musting");
const car2 = new car("TATA");
const car3 = new car("BMW");
const car4 = new car("TOYTA");


car.startRace();
// console.log(car.numberofcars);

