//   Map =object that hold key-value pairs ofd any dat types that

const store = new Map([
    ["t-shirt",20],
    ["jeans",140],
    ["socks",150],
    ["underwear",100],

]);


// store.get("t-shirt");
// store.set("hat",40);
// store.delete("hat");
// console.log(store.has ("underwear"));
console.log(store.size);
store.forEach((value,key) => console.log(key, value));
