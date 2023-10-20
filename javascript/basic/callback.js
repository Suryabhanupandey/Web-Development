// callback =a function passed as an argument
//           to another function.

/*
    Ensures that a function is not going
    to run before a task is complete.
    helps us develop asynchronous code
    (when one function has to wait for another function )
    that helps us avoid errors and  potential problems
    Ex.Wait for a file to load 


*/
// let total = sum (2,3); 
// displayDOM(total);

// function sum(x,y){
//     let result = x + y;
//     return result
// }


sum(2,3,displayDOM); 
 
function sum(x,y,callback){
    let result = x+y;
    callback(result);
}


function displayconsole(output){
    console.log(output);
}
function displayDOM(output){
 document.getElementById("mylabel").innerHTML = output;
}