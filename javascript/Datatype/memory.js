// *****************Memory****************
//  Stack (primitive), heap (non-primitive)


let myName ="Suryabhanu"
let anotherName ="Chandan"

console.log(myName);                //stack (copyied)   
console.log(anotherName);

let userOne ={
    email: "user@example.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "user@google.com"

console.log(userOne.email);       //Heap (reference)
console.log(userTwo.email);




