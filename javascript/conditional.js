// let x = 20;

// if (x > 18) {
//   console.log("you are greater than 18");
// }

// if (x > 30) {
//   console.log("you are greater than 30");
// }

//voting program

// let age = 15;

// if (age >= 18) {
//   console.log("you can vote");
// } else {
//   console.log("you can not vote");
// }

//exam grade

// let mark = 700;

// let fullMark = 600;
// if (mark > 600) {
//   console.log("invalid mark");
// } else if (mark > 500) {
//   console.log("you got A grade");
// } else if (mark > 400) {
//   console.log("you got B grade");
// } else if (mark > 250) {
//   console.log("you got C grade");
// } else {
//   console.log("you are faild");
// }

//switch case

//day of weeks

// let day = 4;

// switch (day) {
//   case 0: {
//     console.log("monday");
//     break;
//   }
//   case 1:
//     console.log("tuesday");
//     break;
//   case 2:
//     console.log("wednesday");
//     break;
//   case 3:
//     console.log("thursaday");
//     break;
//   case 4:
//     console.log("friday");
//     break;
//   case 5:
//     console.log("saturday");
//     break;
//   case 6:
//     console.log("sunday");
//     break;
// }

//calculator program

let num1 = prompt();
let num2 = prompt();

num1 = Number(num1);
num2 = Number(num2);

let operation = prompt();

switch (operation) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
}
