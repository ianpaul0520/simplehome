// (function () {
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       // Code to be performed.
//       let results = this.responseText;
//       results = JSON.parse(results);

//       let counter = 1;
//       results.forEach((ele) => {
//         createColumns(counter, ele.title, ele.description);
//         counter++;
//       });
//     }
//   };
//   xhttp.open("GET", "https://ghibliapi.herokuapp.com/films", true);
//   xhttp.send();
// })();

// function createColumns(number, title, description) {
//   if (number == 4) {
//     alert(number);
//     return "function done Executing.";
//   }
//   let columns = document.getElementById("root");
//   let column = document.createElement("div");
//   let headTitle = document.createElement("h3");
//   let subtitle = document.createElement("p");

//   // Applying Class list on their respected parent element.
//   headTitle.classList.add("title", "has-text-dark", "has-text-centered");
//   subtitle.classList.add("subtitle", "has-text-grey-light");
//   column.classList.add("column", "is-3");

//   // Adding text content.
//   headTitle.textContent = title;
//   subtitle.textContent = description;

//   // Appending all child elements to it's parent element.
//   column.appendChild(headTitle);
//   column.appendChild(document.createElement("br"));
//   column.appendChild(subtitle);
//   columns.appendChild(column);
// }

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const event = require("event");
const rl = require("readline");
let eventEmitter = new event();

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = http.createServer();
server.on("request", function (req, res) {
  const parsedUrl = new URL(req.url, "https://node-http.glitch.me/");
  let pathName = parsedUrl.pathname;
  let ext = path.extname;

  console.log(pathname);
});
server.listen(5000);
