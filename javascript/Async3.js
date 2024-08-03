async function getPostData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");

  console.log(response);

  let postData = await response.json();
  console.log(postData);

  let myDiv = document.querySelector(".table-parent");
  console.log(myDiv);

  let table = document.createElement("table");
  console.log(table);

  let tableData = "";

  table.innerHTML = "<th>userId</th> <th>title</th><th> body</th><th>id</th>";

  postData.forEach((element) => {
    tableData =
      tableData +
      `<tr><td>${element.userId}</td><td>${element.title}</td><td>${element.body}</td> <td>${element.id}</td></tr>`;
  });
  console.log(tableData);
  table.setAttribute("border", "1");
  table.innerHTML = tableData;
  myDiv.append(table);
}

// getPostData();

async function getPic() {
  let response = await fetch("https://jsonplaceholder.typicode.com/photos", {});

  let data = await response.json();

  let myDiv = document.querySelector(".table-parent");

  for (let index = 0; index < 11; index++) {
    let img = document.createElement("img");
    img.setAttribute("src", `${data[index].thumbnailUrl}`);
    myDiv.append(img);
  }
}

getPic();
