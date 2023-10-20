/*
    Class =a blueprint for creating objects
            define what properties and methods they have 
            use aconstructor for unique properties




*/
class Player{
    score =0;

    pause(){
        console.log("you paused the game");

    }
    exit(){ 
    console.log("you exited the game");
    }
}
const player1 =new Player();
const player2 =new Player();
player1.score += 1;

console.log(player1.score);
player1.pause();
player1.exit();
