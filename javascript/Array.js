// let sudent1 = "chandan";

// let student2 = "khirod";

// let students = ["chandan", "giri", "deepa"];

// console.log(students[0]);

// console.log(students.length - 1);

// for (let index = 0; index < students.length ; index++) {
//   console.log(students[index]);
// }

// for (let value of students) {
//   console.log(value);
// }

// for (let index in students) {
//   console.log(index);
// }

// students.forEach((e, i) => {
//   console.log(e, i);
// });

// let data = students.slice(1, 3);
// console.log(data);

// students.splice(0, 2);

// console.log(students);

// console.log(students);

// students.push("xyzy");
// console.log(students);

// console.log(students.pop());

// students.unshift("hiii");
// students.shift();
// console.log(students);
// console.log("hii");

//array get and set push pop shift unshift slice splice   forOf forIn forEach

//map

// let nums = [2, 4, 6, 8];

// let data = nums.map((element, index, arr) => {
//   return element + 10;
// });

// console.log(data);

//filer

// let nums = [2, 5, 7, 9];

// let ans = nums.filter((element) => {
//   return element % 2 == 0;
// });

// console.log(ans);

//reduce

// let arr = [3, 4, 7, 9];

// let total = 0;
// for (let value of arr) {
//   total = total + value;
// }
// console.log(total);

// let result = arr.reduce((a, e) => {
//   return a + e;
// }, 200);
// console.log(result);

//find

// let arr = [3, 6, 9, 2];

// let data = arr.find((element) => {
//   return element > 3;
// });

// console.log(data);

// every and some

// let arr = [2, 4, 6, 1];

// let ans = arr.some((e) => {
//   return e > 2;
// });

// console.log(ans);

//array destructure

// let arr = [4, 6, 7, 3];

// let num1 = arr[0];
// let num2 = arr[1];

// console.log(num1);

// let [num1, num2, x, y] = arr;

// console.log(num2);

//how to clone an array

// let x = 30;

// let y = x;

// console.log(x, y);
// x = x + 40;
// console.log(x, y);

// let arr = [20, 30, 40];

// let arr2 = arr;

// console.log(arr);
// console.log(arr2);

// arr.push(90);

// console.log(arr);
// console.log(arr2);

// let arr2 = arr.slice(0);
// let arr2 = [].concat(arr);
// let arr2 = [...arr];

// console.log(arr);
// console.log(arr2);

// arr.push(90);

// console.log(arr);
// console.log(arr2);
