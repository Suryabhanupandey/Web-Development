/*
    array.forEach() = excutes a provided callback fuction
                        once for each  array element

*/

let students = ["jain","lavkesh","sachin"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element,index,array){
    array[index] = element[0].toUpperCase() + element.substring(1);


}
function print(element){
    console.log(element);
}
// console.log(students[0]);