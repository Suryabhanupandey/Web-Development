//nested loop = a loop inside of another loop

let symbol = window.prompt("enter a symbol to use");
let rows = window.prompt('Enter # of rows');
let colums = window.prompt('Enter # of colums');
for (let i = 1; i <= rows; i += 1) {
    for (let j = 1; j <= colums; j += 1) {
        document.getElementById("myrectangle").innerHTML += symbol;

    }
    document.getElementById("myrectangle").innerHTML += "<br>";
}