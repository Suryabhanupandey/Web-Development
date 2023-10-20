/*
ternary operator =shortcut for an 'if/else statement'
                  takes 3 operands 

                  1.a condition with ?
                  2. expression if true:
                  3. expression if false

    condition ? expriftrue:expiffalse

*/
// let adult = checkage(21);
// console.log(adult);
// function checkage(age) {
//     if(age>=18){
//         return true;

//     }
//     else{
//         return false;
//     }
// }

// let adult = checkage(21);
// console.log(adult);
// function checkage(age)
// {
    // return age >=18? true : false;
// }
checkwinner(false);

function checkwinner(win){
    win ? console.log("YOU WIN!") : console.log("you lose!");
}