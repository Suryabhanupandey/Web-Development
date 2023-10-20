let cards =["A","2","3","4","5","6","7","8","9","10","J","K","Q"];
shuffle(cards);

// console.log(cards[0]);
cards.forEach(card => console.log(card));

function shuffle(array){
    let currentIndex = array.lenght;

    while (currentIndex != 0){
            let randomIndex  =Math.floor(Math.random() *array.lenght);
            currentIndex-=1;

            let temp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temp;

        }
        return array;

}