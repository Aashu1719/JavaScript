function myFunction(params) {
    
    console.log("Welcome to apna college");
    console.log("We are learning JS");
}

// to call the function
myFunction();


// use function through params
function myFunction1(msg)
{
    console.log(msg);
}

myFunction1("Print function using params");


// Create a function which we add two numbers





// ******************* ************************ *****************
// Arrow function

const arrowSum = (a, b) => 
{
    a = 5;
    b = 4;
    c = a + b;
    console.log(c + arrowSum);
}


// 2. multiplication function
function mul(a, b)
{
    return a*b;
}

const arrowMul = (a, b) =>
{
    return a*b;
}



// Q-1) create a function using the function keyword that takes a string as an argumnet & returns the numbers of vowels in the string.
function countVowels(str)
{
    let count = 0;
    for (const char of str) {

        if (
            
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        ) 
        {
            count++;
        }
     
        console.log(count);
    }
    
}


// for each loop with array :- we can use that array when we wany to print array elements and do certain task.
let arr = ["pune", "delhi", "mumbai", "gurugram"];

arr.forEach((val) => 
{
    console.log(val.toUpperCase());
});



// Q-2) For a given array of numbers, print the square of each value using the forEach loop.
let nums = [2,3,4,5,6];

nums.forEach((nums)=> 
{
    console.log(nums * nums);
}
)



// ************************* ************************** ***************************
// Filter method
let arrs = [1,2,3,4,5,6,7];

let evenArr = arrs.filter((valss)=> 
{
    return valss % 2 === 0;
}
);

console.log(evenArr);