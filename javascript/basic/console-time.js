/* 
console.time() = starts a timer you can use to
                 track hoew long an operator takes
                 Give each timer a unique name.

*/

// start
console.time = ("Response time");

//alert ("Click The Ok Button");
setTimeout(() =>console.log("Hello!"),3000);

//end
console.timeEnd("Response time");