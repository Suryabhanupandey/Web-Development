/*
    do while loop =do something,
                    then check the codition,
                    repeat if condition is true
*/

let username ;
do{
username =window.prompt("Enter your name: ");
}
while(username == "")
console.log("Hello", username);
