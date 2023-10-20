//  get = bind an object property to a function
//            when the property is accessed

class car{
    constructor(power) {
            this._power = power;
            this._gas =25;
    }
    get power(){
        return(this._power,'hp');
    }
    get gas(){
        return(this._gas,'L'(this._power/50 *100),'%');
    }
}
let car = new car(400);
console.log(car.power);