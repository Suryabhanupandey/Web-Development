/*
    while loop =repeat some code
                while some condition is true
                potentially infinite 
// */

// while(1==1){
//      console.log("HELP I'M STUCK IN AN INFINITE LOOP!");
// }

let username ="";

while(username == "" || username ==null){
    username =window.prompt("Enter your name:");
}
console.log("hello",username);