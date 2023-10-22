// This Date object is used to work with date & times 

let date = new Date();
// let date = new Date(0);
// let date = new Date(2023,0,1,2,3,4,5);
// let date = new Date("january 1,2023 00:00:00");

let Year =date.getFullYear();
let dayofMonth = date.getDate();
let dayofWeek =date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let millisecond = date.getMilliseconds();

date=date.toLocaleString();
document.getElementById("mylabel").innerHTML= minute;