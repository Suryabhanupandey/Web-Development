// array = think of it as a variable
//         that can store multiple values

let fruit =["apple","banana","orange"];
// fruits[0] = "coconuts";
fruit.push("lemon");      //add an element
fruit.pop();              //remove last element
fruit.unshift("orange");  //add element to beginning 
fruit.shift();            //remove element from beginning

let length = fruit.length;
let index =fruit.indexOf("apple");
console.log(index);