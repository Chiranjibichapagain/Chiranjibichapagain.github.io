console.log("hello world");

document.getElementById("slogan").innerHTML = "we hate our customers";

document.getElementById("all").style.color = "#c7c3c3";
document.getElementById("all").style.fontFamily = "Impact";

// document.getElementsByClassName("box py-4").style.margin = "10px 20px";
// document.getElementsByClassName("box py-4").style.boxShadow = "2px 2px 10px";

// document.getElementsByClassName("container").style.margin = "10px 20px";
// document.getElementsByClassName("container").style.boxShadow = "2px 2px 10px";

const newNavitem = document.createElement("li");
newNavitem.className = "list-inline-item";

const atag = document.createElement("a");
atag.innerHTML = "News Letter";
newNavitem.appendChild(atag);

document
  .getElementsByClassName("menu list-inline mb-0")
  .appendChild(newNavitem);
