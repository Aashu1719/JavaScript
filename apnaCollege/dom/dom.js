
// // basic 
// console.log("Hello");
// alert("Apna college");

// 30 - 36m

// 2. dom some concept
// document.body.childNodes[3].innerText = "abcd"; not working 
// document.body.style.background = "red";


// *********************************** ********************************************* *********************************** 
// 3. DOM Manipulation



// 3.1 access element using by id
let heading = document.getElementById("heading-1"); // h1
console.dir(heading);
document.getElementById("heading-1")


// 3.2 access element bu using class
let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);


// 3.3 Access elements by using query selector in that we are using tag
let elements = document.querySelector("p")  // only gives single element
console.log(elements);

let elements1 = document.querySelectorAll("p")  // only gives single element
console.log(elements1);


// *********************************** ************************ ******************************* ******
// First practice question
// let h2 = document.querySelector("h2");

// console.div(h2);

// h2.innerText = h2.innerText + "from apna college"; // concentate