class Car{
    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}
const car1 = new Car("mustang",2023,"red",);
const car2 = new Car("BMW",2022,"black");
const car3 = new Car("Lambo",2021,"yellow",);

changeColor(car3 ,"gold");
displayInfo(car3);


function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car3,color){

    car3.color = color;

}


