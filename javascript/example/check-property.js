
// document.getElementById("mebtn").onclic = function () {
//     if (document.getElementById("mycheck").checked) {
//         console.log("you are subcribed");
//     }
//     else {
//         console.log("you are not subcribed");
//     }
// }


 document.getElementById("mybtn").onclick = function(){ 
    const mycheckbox = document.getElementById("mycheckbox");
    const visabtn= document.getElementById("viasabtn");
    const mastercardbtn = document.getElementById("Mastercarbtn");
    const paypalbtn= document.getElementById("paypalbtn");
     if ( mycheckbox.checked) {
         console.log("you are subcribed");
     }
     else {
         console.log("you are not subcribed");
     }
     if ( visabtn.checked) {
        console.log("you are paying with visa!");
    }
    else if( Mastercardbtn.checked) {
        console.log("you are paying with a Mastercard!");
    }
    else if(paypalbtn.checked){
            console.log("you are paying with a  paypalcard!");
    }
 }