// array of object
class Car {
    constructor(model,year, color) {
        this.model = model;
        this.year = year;
        this.color = color;

    }
    drive(){
        console.log('You drive the' , this.model);
    }
}


const car1 = new Car("muctang", 2023,"red",);
const car2 = new Car("BMW", 2021,"BLUE");
const car3 = new Car("TOYTA", 2020,"BLACK",);

const cars =[car1,car2,car3];


// console.log(cars[0].model);
// console.log(cars[1].model);
// console.logog(cars[2].model);



// cars[0].drive();
// cars[1].drive();
// cars[2].drive();
 
 starRace(cars);
function starRace(cars) {
    for (const car of cars){
        car.drive();
    }
}

 

 