// error = object with a description of
//          something went wrong

//      throw = executes a user-defined error
try {
    let x = window.prompt("Enter a #");
    x = Number(x);

    if (isNaN(x)) throw "that wasn't a number";
    if (x == "") throw "that was empty!";

    console.log(x, 'is a number');
}
catch (error) {
    console.log(error);
}
finally {
    console.log("This always executes");
}

