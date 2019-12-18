'use strict';

a = 5;
console.log(a);
// console.log(leftBorderWidth);
var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
var obj = {};
var leftBorderWidth = "ssd"; 
let first = 1;
{
    let second = 2;
}
const pi = 3.14;

console.log(first);
console.log(leftBorderWidth);

console.log(4/0);
console.log('str'*0);
let somthing;
console.log(somthing);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name);
console.log(persone['name']);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[0]);

// alert("hello world");

// let answer = confirm("Are u here?");

// console.log(answer);

// let answer = +prompt("Есть ли вам 18?", "Да");

// console.log(typeof(answer));

// console.log(typeof(answer));

// console.log(typeof(null));

// console.log("arr" + " - object");
// console.log(4 + +" - object");

let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--);

console.log(5%3);
// console.log("2" === 2);

let isChecked = false,
isClose = true;

console.log(isChecked && isClose); //и
console.log(isChecked || isClose); //или
console.log(!isChecked || isClose);