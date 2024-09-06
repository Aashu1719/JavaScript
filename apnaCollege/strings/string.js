// Strings 
// In that example we just find the particular alphabet by passing the string value

let str = "Aashutosh"
console.log(str[3]); //h


// Templates 

let obj = 
{
    item : "pen",
    price : 10,
};

// Normal print 
console.log("The cost of ", obj.item, "is", obj.price, "rupees");

// Template print
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);



// *********************** **************************** **************
// Template literals
let specialString = `This is a template literal`;
console.log(specialString);


// In template literals we can use string interpolation
let interpolation = `This is kust an example of ${1+2+3}`
console.log(interpolation);



// String method


// 1. UPPERCASE METHOD
let str1 = "Apna College";
let str2 = str1.toUpperCase();

console.log(str2);
// OP :- APNA COLLEGE


// 2. lowercase method
let str3 = "Apna College";
let str4 = str3.toLowerCase();

console.log(str4);
// OP :- apna college



// 3. trim method
let str5 = "A pn a C oll       eg   e";
let str6 = str5.trim();

console.log(str6);
// OP :-


// 4. Slice method
let str7 = "01234567"
console.log(str7.slice(1, 6));


// 5 concat method
let str8 = "Apna";
let str9 = "College";

// apply the method and we have str8 and str9 together
let str10 = str8.concat(str9);
console.log(str10);
// OP :- ApnaCollege



// 6 replace method
let str11 = "hello";
console.log(str11.replace("h", "y"));
// Op :- yellow


// 7 char at method throught this method we know that which character we wqant to add
let str12 = "Aashutosh";
console.log(str12.charAt(5));
// op :- t




// Practice question :- Prompt the user to enter the full name, Generate a username for them based on the input. 
//                         Start username with @, followed by their fullname and ending with fullname length.

// eg :- user name = "shradhakhapra", username should be "@shradhakhapra13"  

let str13 = prompt ("Enter the fullName");
let str14 = "@";
let str15 = str13.length;

let str16 = str14.concat(str13 + str15);
console.log("The new username according to value is : ", str16);