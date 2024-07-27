// hoisting

// console.log(fun1);

// const x = 2;

// function fun1() {
//   console.log("fun1");
// }

// var fun1 = () => {
//   console.log("fun1");
// };

//clousers

// function funA() {
//   let a = 20;

//   function funB() {
//     return a;
//   }

//   return funB();
// }

// console.log(funA());

// function addA(x) {
//   function addB(y, z) {
//     return x + y + z;
//   }

//   return addB(20, 40);
// }

// console.log(addA(30));

// let a = 4;

// function foo() {
//   return a;
// }

// console.log(foo());

// new Promise((res,rej)=>{

// }).then((data)=>{

// }).catch((err)=>{

// })

/////api call
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);

    return response.json();
  })
  .then((data) => {
    let body = document.querySelector("body");
    console.log(data);
    let table = document.createElement("table");
    let tablehead = "<th>id</th><th>phone</th><th>name</th>";
    table.innerHTML = tablehead;
    body.append(table);

    let finaldata = " ";
    data.forEach((element) => {
      let tabledata = `<tr><td>${element.name}</td><td>${element.id}</td><td>${element.phone}</td> </tr>`;

      finaldata = finaldata + tabledata;

      console.log(finaldata);

      table.innerHTML = finaldata;
      body.append(table);
    });
  });

// async function getData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");

//   let data = await response.json();

//   console.log(data);
// }

// getData();
