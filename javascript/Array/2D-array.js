//2D array = An array of array

let fruits = ["mango","banana","apple"];
let vegetable = ["carrots","onions ","potatos "];
let dryfruite = ["Almond","Raisin ","drydates "];

let grocerylist =[fruits,vegetable,dryfruite];
grocerylist[0][0]="orange"; //replace items 

for(let list of grocerylist){
    for(let food of list){
        console.log(food);
    }
}
