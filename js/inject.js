console.log("hello world");

document.getElementById("slogan").innerHTML = "we hate our customers";

document.getElementById("all").style.color = "#c7c3c3";
document.getElementById("all").style.fontFamily = "Impact";

// document.getElementsByClassName("box py-4").style.margin = "10px 20px";
// document.getElementsByClassName("box py-4").style.boxShadow = "2px 2px 10px";

// document.getElementsByClassName("container").style.margin = "10px 20px";
// document.getElementsByClassName("container").style.boxShadow = "2px 2px 10px";


const navBar= document.querySelector('ul.navbar-nav')

const liItem= document.createElement('li')
const aTag= document.createElement('a')
const text= document.createTextNode('Newsletter')

liItem.classList.add('nav-item', 'menu-large')
aTag.classList.add('nav-link')


aTag.append(text)
liItem.append(aTag)
navBar.append(liItem)