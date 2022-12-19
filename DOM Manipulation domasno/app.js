// Homework 1

let mainHading = document.getElementById("mainHeading");

mainHading.innerText = "This is changed by me in java script";
mainHading.style.backgroundColor = "lime";

let paragraphOne = document.querySelector(".paragraph");

paragraphOne.innerText = "Wow i changed one more thing from java script";
paragraphOne.style.backgroundColor = "pink";

let secondDiv = document.querySelector(".second-div");

let paragraphTwo = secondDiv.children[0];

paragraphTwo.innerText = "i changed it";
paragraphTwo.style.color = "red";

let text = secondDiv.children[1];

text.innerText = "is this changed or what";
text.style.backgroundColor = "gray";
text.style.color = "white";

let headerOne = document.querySelectorAll("div h1");

headerOne[1].textContent = "Changed";

let headerThree = document.querySelector("h3");

headerThree.innerText = "123"
headerThree.style.backgroundColor = "black";
headerThree.style.color = "white";



