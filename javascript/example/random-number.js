let x ;
let y ;
let z ;
document.getElementById("rollbtn").onclick = function(){
    x =Math.floor(Math.random()*6) +1;
    y =Math.floor(Math.random()*6) +2;
    z =Math.floor(Math.random()*6) +3;

    document.getElementById("xlabel").innerHTML =x;
    document.getElementById("ylabel").innerHTML =y;
    document.getElementById("zlabel").innerHTML =z;

}