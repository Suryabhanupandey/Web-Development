// setTimeout() = invokes a function after a number of milliseconds
//                 asynchronous function dosn't pausde execution

let timer1 = setTimeout(firstMassage,3000);
let timer2 = setTimeout(secondMassage,6000);
let timer3 = setTimeout(thridMassage,9000);


function firstMassage(){
    alert('buy this copy for $10');
}

function secondMassage(){
    alert("This is a not a scam!");
}

function thridMassage(){
    alert(" DO ITT!");
}


document.getElementById("mybtn").onclick =function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert('Thanks for buying <3');
}