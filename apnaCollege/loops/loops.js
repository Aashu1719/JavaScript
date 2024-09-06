// 1. for loop
// Print 1 to 5

for(let i = 0; i <=5; i++)
{
    console.log("apna college");
}


// To calculate sum of 1 to n
let sum = 0;
for(let s = 1; s <=5; s++)
{
    sum = sum + s;
}

console.log("Sum =", sum);
console.log("Loop has ended");




// While Loops 
let a = 1;
while (a <= 10)
{
    console.log("Apna college");
    a++;
}



// Do - while loops
let b = 5;
do
{
    console.log("b = ", b);
    b++;
} 
while (b <= 10);




// for-of-loop
let str = "Apna College";

for(let i of str)
{
    console.log("i = ", i);
}




// For -in-loop
// create a object

let student = {
    name : "Rahul Kumar",
    age : 20,
    cgpa : 7.5,
    isPass : true,
};

for (let key in student)
{
    console.log("Key : ", key, ", Value : ", student[key]);
}


// ************************* ************************* *************
// Doing some practice question?

// Q-1 Print all even numbers from 0 to 100

for(let count = 0; count<=100; count++)
{

    if (count % 2 == 0) {
        console.log(count)
    }
}



// Q-2 Create a game where you start with any random game number. And ask the user to keep guessing the game number until the users
// enter correct value?

let gamNum = 25;
let userNum = prompt("Guess the game number : ");

while (userNum != gamNum)
{
    // Game 
    userNum = prompt("You entered wrong number guess again : ");
}

console.log("congratulations you entered right number");
