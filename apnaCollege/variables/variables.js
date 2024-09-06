fullName = "Aashutosh";
console.log(fullName);

age = 24;
price = 99.99;
radius = 14;
a = null;
y = undefined;

console.log(radius);


// Boolean type 
isFalse = true
console.log(isFalse);


// let, var and const

// 1. var

var age = 25;
var age = 35;
console.log(age);
var age = 40;

// Op :- 40 because in this we just re-declare it



// 2. let

let ages = 10;
let agess = 30;
console.log(ages);



// 3. Const
const PI = 3.14;
const un = 5.12;
console.log(PI);
console.log(un);

// OP :- 3.14 and 5.12 
// because we cannot re-declare constant variable.



// let and const are worked in curly braces

{
    let a = 10;
    console.log(a); // 10
    // If again we declare here so we will get error.
    // But we can re-define in another block.
}

{
    let a = 5;
    console.log(a); // 5
}