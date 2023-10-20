const answer =Math.floor(Math.random() *  10+1);
let guesses = 0;

document.getElementById('btn').onclick = function(){
guesses += 1;

if (guesses == answer){
    alert(' ${answer} is the #. it took you ${guesses} guesses');

}
else if (guesses < answer){
    alert("too smaal");

}
else{
    alert("Too large!");
}

}