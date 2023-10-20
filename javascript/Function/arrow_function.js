// arrow function = conpact alternative to a traditional function
// =>
//  const greeting =(userName) => console.log('Hello $',{userName});
 
//     greeting("surya");

// const percent = (x,y) => x/y * 100;
// console.log('$',percent(55,66),'%');

// let grades =[100,50,60,40];
// grades.sort( descending);
// grades.forEach(print);

// function   descending(x,y)
// {
//     return y-x;
// }
//  function print(element){
//     console.log(element);
//  }


 let grades =[100,50,60,40];
 grades.sort((x,y)=> y-x);
 grades.forEach(( element) =>console.log(element) );

