//object =A group of properties and methods
// properties = what an object has
// method= what an object can do
// use .to access properties/method

const car ={
    model:"Mustang",
    color :"red",
    year :2000,
    drive : function() {
        console.log("you drive th car");
    },
    brake : function() {
        console.log("you stop on the brake");
    }
}
 console.log(car.model);
 console.log(car.color);
 console.log(car.year);

 const car1 ={
    model:"Mustang",
    color :"blue",
    year :2023,
    drive : function() {
        console.log("you drive th car1");
    },
    brake : function() {
        console.log("you stop on the brake");
    }
}
 console.log(car1.model);
 console.log(car1.color);
 console.log(car1.year);