const coding = ["js", "ruby", "java", "python", "cpp"]

// Step 1:- jab hum for each loop ko use karta hain to wo huma kehta hai ki aap huma callbackfunction do,,,,,, and call back function ka nam nhi hota hai.. 
// ######### ab hum isma parameter pass karenga and that parameter humare liya values leka ayega. 

// coding.forEach(function (arrVal) {
//     console.log(arrVal);
// //     js
// // ruby
// // java
// // python
// // cpp
// })

// step :- 1.1 same process with arrow function
coding.forEach((item) => 
{
    // console.log(item);
    
    // Op :- same output
//     js
// ruby
// java
// python
// cpp
})


// step 1.2 same process jahan hum function kahin aur bnayenga and usa yahan pe call karna wala hai
// function printMe(items) {
//     console.log(items);
// }

// coding.forEach(printMe)
// // Op
// // js
// // ruby
// // java
// // python
// // cpp


// step 1.3 array and uska ander objects
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Pyhton",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
// Op :-  
// Javascript
// Java
// Pyhton
})