// anonymous objects = objects  without a name
//                      not directly referenced
//                       lass syntax,No need for unique names

class Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
}
let cards =[new Card("A","Hearts"),
            new Card("A","spades"),
            new Card("A","diamonds"),
            new Card("A","Club"),
            new Card("2","Hearts"),
            new Card("2","spades"),
            new Card("2","diamonds"),
            new Card("2","Club" )
        ];
        cards.forEach(card => console.log((card.value) ,(card.suit)));