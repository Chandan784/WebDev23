let student1 = {
  name: "chandan",
  age: 27,
  roll: 1010,
};

student1.age = 30;
student1.subject = "math";
console.log(student1);

//compued properties

// let xname = "name";

// let student2 = {
//   [xname]: "chandan",
// };

// console.log(student1["name"]);

//object destructure

// let x = {
//   fname: "chandan",
//   lname: "samantaray",
// };

// // let fname = x.fname;
// // let lname = x.lname;

// let { fname: firstName, lname: lastname } = x;

// console.log(lastname);

let products = [
  {
    name: "iphone",
    price: 100000,
  },
  {
    name: "iphone2",
    price: 300000,
  },
  {
    name: "iphone3",
    price: 200000,
  },
  {
    name: "iphone4",
    price: 10000,
  },
];

let data = products.filter((e) => {
  return e.price > 200000;
});

let totalPrice = 0;
products.forEach((e) => {
  totalPrice = totalPrice + e.price;
});

console.log(totalPrice);
