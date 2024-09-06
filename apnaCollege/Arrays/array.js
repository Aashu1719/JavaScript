let marks = [97, 82, 75, 64, 36]

console.log(marks);
// We can also print the length of the array
console.log(marks.length); 


// 2. let create a string array
let heroes = ["Hanuman", "Ram", "Budh", "Vivekanand", "Indr"]
console.log(heroes);

// Change the value of the array
heroes [3] = "parmhansh";
console.log(heroes);


// 3. Loops in arrays
for (let i = 0; i < heroes.length; i++)
{
    console.log(heroes[i]);
}



// Know we print the array with for of
let cities = ["Delhi", "Mumbai", "Noida", "Bihar", "Faridabad"]

// for of
for (const city of cities) {
    
    console.log(city);
}



// Practice question :- For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// find the average marks of the entitre class.

let marks1 = [85, 97, 44, 37, 76, 60]
let sum = 0;

for (const val of marks1) {
    
    sum += val;
}

console.log(sum);

let avg = sum / marks1.length;
console.log(`The average marks is = ${avg}`);



// ************************** **********************

// Array methods
// Push method
let vegges = ["Potato, Apple, Litchi, Tomato, Mango"]
console.log(vegges);

// now we push the method
vegges.push("Chips", "Coldrinks")
console.log(vegges);



// Pop method
vegges.pop(vegges);
console.log(vegges);



// converted array to string   _______ String method
console.log(vegges.toString());


// Conacte method
let marvel_heroes = ["Thor, Spriderman", "Hulk", "ironman"];
let dc_heroes = ["superman", "batman"]

let sc = marvel_heroes.concat(dc_heroes);
console.log(sc);



// Unshift method :- this method can add 
marvel_heroes.unshift("antMan");
console.log(marvel_heroes);


// Shift method :- delete first method
let val = marvel_heroes.shift();
console.log(val);



// Slice mathod
let marvel_heroess = ["Thor, Spriderman", "Hulk", "ironman", "DrStrange"];
console.log(marvel_heroess);
console.log(marvel_heroess.slice(1, 3));



// splice method
let arr = [1,2,3,4,5,6,7];

arr.splice(2, 2, 101, 102);

// add element
arr.splice(2, 0, 101);


// Deelet item 
arr.splice(3, 1);

// Replace item
arr.splice(3, 1, 101);

console.log(arr);