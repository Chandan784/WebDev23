let clickmeBtn = document.querySelector(".navbar button");

console.log(clickmeBtn);

let sidebarDiv = document.querySelector(".sidebar");
console.log(sidebarDiv);

let x = 1;
clickmeBtn.addEventListener("click", function () {
  sidebarDiv.classList.toggle("sidebar2 ");
});
