// Conditional statement

let age = 16;

if(age >= 18)
{
        console.log("you can vote");
}

if (age < 18)
{
    console.log("You cannot vote");
}



// Color example 
let mode = "dark";
let color;

if(mode === "dark")
{
    color = "black";
}

if (mode === "light")
{
    color = "White";
}

console.log(color);


// Just for check
{
 const a = 4;
 const b = "4";
 console.log(a==b); 
}



// *************** *******
// odd or even

let num = 15;

if(num%2 === 0)
{
    console.log( num, "is even");
}
else
{
    console.log(num, "is odd");
}



// Else If
let modes = "dark";
let colors;

if(mode === "dark")
{
    colors = "black";
}

else if(modes === "blue")
{
    colors = "blue";
}

else if(modes === "pink")
{
    colors = "pink";
}

else
{
    colors = "white";
}

console.log(color);



// condition ? true output : false output

let ages = 24;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);



// Let's practice :- 
// Q-1 :- Get user to input a number using prompt(Enter a number:). Check if the number is a multiple of 5 or not?

let number = prompt("Enter a number:")

if(number%5 === 0)
{
    console.log(number, "is a multiple of 5");
}

else
{
    console.log(number, "is not a multiple of 5");
}



// Practice question :- 
// Write a code which can gives grades to students according to their scores:
/*
 1. 90-100, A
 2. 70-89, B
 3. 60-69, C
 4. 50-59, D
 5. 0-49, F
*/


let grades = 90
let student;

if(grades >= 90 && grades<100)
{
    console.log(student = "A grade");
}

else if(grades >= 70 && grades < 89)
{
    console.log(student = "B grade");
}

else if(grades >= 60 && grades < 69)
{
    console.log(student = "C grade");
}

else if(grades >= 50 && grades < 59)
{
    console.log(student = "D grade");
}

else
{
    console.log(student = "Fail");
}


// Another way of doing same example 
let grade = 80;
let students;

if(grade >= 90 && grades<100)
{
    students = "A Grade student";
}

else if(grade >= 70 && grade < 89)
{
    students = "B grade student";
}


else if(grade >= 60 && grade < 69)
{
    students = "C grade student";
}


else if(grade >= 50 && grade < 59)
{
    students = "D grade student";
}

else(grade > 50)
{
    students = "Student fail";
}

console.log("According to your score your result was : ", students);