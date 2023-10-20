/*
 function expression =function without a name (anoymous function)
                    avoid polluting the global scope with names
                    Write it, them forget about it
*/



let count = 0;

document.getElementById("increasebtn").onclick = function(){
    count+=1;
    document.getElementById("mylabel").innerHTML = count;

}
document.getElementById("decreasebtn").onclick = function(){
    count-=1;
    document.getElementById("mylabel").innerHTML = count;
    
}

/* 
function increaseCount(){
    count+=1;
    document.getElementById("mylabel").innerHTML = count;
}
function decreaseCount(){
    count-=1;
    document.getElementById("mylabel").innerHTML = count;
}
*/