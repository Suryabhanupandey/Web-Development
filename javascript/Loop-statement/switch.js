/*  Switch =statement that examines a value 
    for a match against many case clauses.
    more efficient that many "else if" statements

*/

// let grade ="A";
// if(grade=="A") {
//     console.log("you did grade");
// }
// else if(grade=="B"){
//     console.log("you did good");
// }
// else if(grade=="C"){
//     console.log ("you did okey");

// }
// else if(grade=="D"){
//     console.log("you passed ........baraly");

// }
// else if(grade =="F"){
//     console,log("you Failed");
// }
// else{
//     console.log(grade,"is not a letter grade");
// }

let grade = 90;
switch (true) {
    case grade >= 90://case "A":
        console.log("you did gread");
        break;
    case grade >= 80://case "B":
        console.log("you did   good");
        break;
    case grade >= 70:// case "C":
        console.log("you did  okay");
        break;
    case grade >= 60://case "D":
        console.log("you  passed .... baraly");
        break;
    case grade > 60://case "F":
        console.log("you  failed");
        break;
    default:
        console.log(grade, " is not a letter grade");
}