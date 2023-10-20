// return =returns a value back to the place
// where you  invoked a function 

let area;
let height;
let width;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("The area is:", area);
function getArea(width, height) {
    let result = width * height;
    return result;
}
