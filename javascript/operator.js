//Arithmatic operator = + - * / %

let x = 12;
let y = "12";

console.log(x + y);
console.log(x - y);
console.log(y * x);
console.log(x / y);
console.log(x % y);

//Comparison operator = > < >= <= == !=

console.log(x > y);
console.log(x < y);
console.log(x <= y);
console.log(x >= y);
console.log(x === y);

//Asignment operator -> = += -= *= /+

let z = 2;
//    z = z+4 z+=4
// console.log((z += 4));
// console.log((z -= 4));
// console.log((z *= 4));
// console.log((z /= 4));
//post and pre increment
// z++;
console.log(z--);
console.log(z);
// console.log(z++);
// console.log(z);

//Logical opearator && ||

let num1 = 10;
let num2 = 13;

// if (num1 > 8 && num2 > num1 && num2 > 5) {
//   console.log("yes");
// }

// if (num1 < 8 || num2 > num1 ) {
//   console.log("yes");
// }

//ternary perator
num1 > num2 ? console.log("yes") : console.log("no");
