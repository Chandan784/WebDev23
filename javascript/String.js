console.log("hii");

let name = "chandan";
//string length
console.log(name.length);

let age = 25;
//charAt and indexOf
//string template
console.log(`my name is ${name} and my age ${age}`);

//slpit string

let splitData = name.split("");
console.log(splitData);

//includes method
console.log(name.includes("z"));

//convert string to number
let x = +"12";
x = Number(x);
console.log(typeof x);

//convert number to string

let y = 20 + "";
console.log(typeof y);
y = String(y);

console.log(typeof y);

//concatinate string
let fname = "chandan";
let lname = "samantaray";
console.log(fname + " " + lname + " " + " hiiii");

// let num1 = "a";
// let num2 = 30;

// console.log(num1 + num2);

let myName = "Bijaya";

let name2 = "bijaya";

console.log(myName.endsWith("a"));
// let z = myName.split("");
// console.log(z);
// console.log(z.join("x"));
let edit_text = myName.slice(0, 2);
// console.log(myName.slice(0));
console.log(edit_text);
