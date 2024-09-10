// Variables are containers for storing data
// js variables are 4 types 
// 1. Automatically
// 2. var
// 3. let
// 4. const

// Some cases :- 

// Case 1 
// Ex :- In this they all are undeclared variables 
// x = 5;
// y = 6; 
// z = x+y;

// console.log(z); // 11

// but the best programming practice is we have to declare the variable before we use it

// ############################ ################################### ##############################

// Case 2 :- 
// example of var keyword :- 
// var x = 5;
// var y = 6;
// var z = x + y;
// console.log(z); // 11
// Now this time var keyword is not used because when we declare it locally its scope is outside of that scope also or its globally, and it can change the value wherever we decalred it. 


// ######################## ############################ #################################### 

// Case 3 :- 
// Now we used let and const

// let 
// let x = 5;
// let y = 6;
// let z = x + y;
// console.log(z); // 11

// Case 4 :- 
// const 
const a = 5;
const b = 6;
const c = a + b;


// Case 5 :- 
// mixed example of let and const
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total); // 11

// This two variable declared as const because we can't change them, but last total we have to chnaged so we declared as let, because let can be chnage and const can't be changed.


// Note :- Just like an algebra variables hold values(variables are containers for storing values)
// let x = 5;
// let y = 6;


// Case 6 :- undefined variables
let carName; 
console.log(carName); //undefined

// const carType; we cannot undefined a const variable


// Case 7 :- One statement many variables
let person = "Aashu", carType = "Volvo", price = 200;
console.log(` name is : ${person} carType is : ${carType} and the price is : ${price}`);
// Op :- name is : Aashu carType is : Volvo and the price is : 200




// ################################ ###################################### #########################
// Javascript Let Keyword :- 

// Some points on let keyword :- 
// 1. Variables declared with let have Block Scope
// 2. Variables declared with let must be Declared before use.
// 3. Variables declared with let cannot be re-declared in the same scope. 


// Some cases on let keyword :- 

// // Case 1 :- variables declared inside a {} block cannot be accessed from outside of this block
// {
//     let x = 2;
// }
// console.log(x); // OP :- RE


// Case 2 :- varibales declared with let cannot be redeclared 
let name = "Aashu";

// again try to declare the variable
// let name = "Aashu"; here we get CE


