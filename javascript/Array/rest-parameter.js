/*
    rest paramiter = represents an indefinite number
                    of parameters
                    (pack arguments into an array)
    
    */


let a=1;
let b=2;
let c=3;
let f=4;
let e=5;
console.log(sum(a,b,c,f,e));

function sum(...numbers){
    let total =0;
    for (let number of numbers){
        total += number
    }
    return total;

}