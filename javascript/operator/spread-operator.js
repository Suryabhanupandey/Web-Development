/*
    spread operator = allows an iterable such as an
... array or string to be expandad
    in places where zero or more
    (unpacks the elements)
*/
// let number = [0, 1, 2,3,4,5,6,7,8,9];
// let max = Math.max(...number);
// console.log(max);
let class1 =["surya","ram","vaibhav"];
let class2 =["suryabhanu","mrram","djvaibhav"];
 class1.push(...class2);
 console.log(...class1);