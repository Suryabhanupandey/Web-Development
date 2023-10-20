// slice extracts a section of a string
//     and returns it as a new string,
//      without modifying the original string

let fullname = "surybhanu Pandey"
let firstname;
let lastname;

// firstname = fullname.slice(0,4);
// lastname = fullname.slice(4);
firstname = fullname.slice(0,fullname.indexOf(" "));
lastname = fullname.slice(fullname.indexOf(" ") + 1);
console.log(lastname);
console.log(firstname);