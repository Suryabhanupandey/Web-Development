/*
    nested function = funtion inside other function
                      outer function have access to inner function
                      inner function are 'hidden' from outside functionthe outer function
                      used in closures (future code program)
*/
let userName ="sury";
let userInbox =0;

// displayUserName();
// displayUserInbox();

login();


function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log("welcome",userName);

    }
    function displayUserInbox(){
        console.log("You have",userInbox,"new massege");

    }
}
