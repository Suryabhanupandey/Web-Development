/*
    Template literal = delimited with(')
                       insted of double or single quotes
                       allows embedded variables and expressions
*/
let username ="surya";
let items =3;
let total =75;
// console .log("hello",username);
// console .log("'you have ",items,"items in your cart");
// console .log("your total is $",total);

// console.log('hello  ${username}');
// console.log('you have ${items} items in your cart');
// console.log('your total is $${total}');

let text=
'hello  ${username}
you have ${items} items in your cart
your total is $${total}';
console.log(text);

