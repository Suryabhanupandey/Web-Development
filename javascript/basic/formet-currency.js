/*
    tolocalestring() =returns a string with a language
    sensitive representation of this number

    .tolocalestring(locale,{option});
'local'=specify that language (underfined = default set in)
'option'= object with formatging option

*/
// let mynum = 123456.879
// mynum= mynum.toLocaleString("en-US"); //US English
//  mynum = mynum.toLocaleString("hi-IN"); //Hindi
//  mynum = mynum.toLocaleString("de-DE"); //standard german
//  mynum = mynum.toLocaleString("en-US", {style: "currency",currency :"USD"});  
//  mynum = mynum.toLocaleString("hi-IN", {style: "currency",currency :"INR"});  
//  mynum = mynum.toLocaleString("de-DE", {style: "currency",currency :"EUR"});  

let mynum = 100;
mynum = mynum.toLocaleString(undefined, {style: "unit",unit:"calsius"});  

console.log(mynum);