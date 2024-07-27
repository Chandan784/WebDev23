//dom celector - id class tag

// let heading = document.getElementById("heading")
// let heading = document.getElementsByClassName("heading");

// let heading = document.getElementsByTagName("h1");
// console.log(heading[1]);

// let heading = document.querySelector(".heading");

// console.log(heading);

//css apply

// let myhead = document.querySelector("h1");

// console.log(myhead.innerHTML);

//event

// myhead.addEventListener("click", () => {
//   myhead.style.color = "red";
// });

//element creation
// let h1 = document.createElement("h1");

// h1.innerText = "new text";
// console.log(h1);

// let body = document.querySelector("body");

// body.append(h1);

// let myheading = document.querySelector("#title");
// let myheading1 = document.querySelector("#title1");

// myheading.style.color = "red";
// myheading.style.fontSize = "50px";
// console.log(myheading.style);

// myheading.addEventListener("click", function (e) {
//   console.log(e.target.id);
// });

//blub light on off

//torch on off project
let bulb = document.querySelector(".bulb");
let torchSwitch = document.querySelector("button");

// console.log(bulb);

// console.log(torchSwitch);
// let isLightOf = true;
// torchSwitch.addEventListener("click", (e) => {
//   if (isLightOf) {
//     torchSwitch.innerText = "Off";
//     bulb.style.backgroundColor = "yellow";
//     isLightOf = false;
//   } else {
//     torchSwitch.innerText = "On";
//     bulb.style.backgroundColor = "salmon";
//     isLightOf = true;
//   }
// });

// let data = torchSwitch.getAttribute("name");
// console.log(data);

// torchSwitch.setAttribute("id", "torchBtn");

// console.log(torchSwitch);

//image changer

// let img1 =
//   "https://th.bing.com/th?id=OIP.wm4rELHPdg9bcjbty5emngHaH7&w=241&h=258&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";

// let img2 =
//   " https://th.bing.com/th?id=OIP.0IkdUPJY6a_DGYOV_CrCLgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";

// let img = document.querySelector("img");
// let chnageMe = document.querySelector("#btn");
// console.log(img);
// console.log(chnageMe);

// chnageMe.addEventListener("click", function () {
//   img.setAttribute("src", img1);
// });

let myBox = document.querySelector(".box");

let h1 = document.createElement("h1");

console.log(h1);

h1.innerText = "Applute";

let chnageMe = document.querySelector("#btn");

h1.classList.toggle("myedittext");

myBox.append(h1);
