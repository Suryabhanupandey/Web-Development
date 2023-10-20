
document.getElementById("submitbtn").onclick = function() {

    let temp;
    if (document.getElementById("cbtn").checked){
        temp = document.getElementById("textbox").value;
        temp=Number(temp);
        temp =tocelsius(temp);
        document.getElementById("templabel").innerHTML = temp +"°C"; //alt + 0176 = °c
    }
    else if (document.getElementById("fbtn").checked){
        temp = document.getElementById("textbox").value;
        temp=Number(temp);
        temp =tocelsius(temp);
        document.getElementById("templabel").innerHTML = temp +"°C";
    }
    else {
        document.getElementById("templabel").innerHTML = "Select a unit";
    }

}

// let temp = 32;
// temp = tofahrenheit(temp);

// console.log(temp);

function tocelsius(temp) {
    return (temp - 32) * (5 / 9);
}

function tofahrenheit(temp) {
    return temp * 9 / 5 + 32;

}