// Ex 1 :- isma hum dekhta hain ki for each loop jo hai wo value kya return karta hai kuch karta bhi hai ye nahi karta.

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => 
// {
//     console.log(item);
// })

// console.log(values);

// ue human retun mai undefined mil rha hai iska matlab forEach kuch bhi values ko return nhi karta. 



// ############################################# ############################ ###########################
// Filter Step 1 :- 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4);
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// Isma kya hota hai hum use karta hai call back function and uska baad huma likhni hoti hai condition, and according to our condition wo humari value ko return karega. 


// step 1.2:- create a empty array name is newnums
// Do same work like above one but in a different format
const newNums = [] 
myNums.forEach( (num) => 
{
    if(num>4)
    {
        newNums.push(num)
    }
})
// console.log(newNums); 
// Op :- [5, 6, 7, 8, 9, 10]



// step 2 :- another example of filter 
const books = [
    {
        title : 'Book One', genre: 'Fiction', publish : 1981, edition: 2004
    },
    
    {
        title : 'Book Two', genre: 'Non-Fiction', publish : 1984, edition: 2007
    },

    {
        title : 'Book Three', genre: 'Fiction', publish : 1987, edition: 2010
    },

    {
        title : 'Book Four', genre: 'History', publish : 1991, edition: 2014
    },

    {
        title : 'Book Five', genre: 'Science', publish : 1995, edition: 2018
    },

    {
        title : 'Book Six', genre: 'Science', publish : 2005, edition: 2022
    },
]

// const userBooks = books.filter( (bk) => bk.genre === 'Science' )
// console.log(userBooks);

// OP :- whose genre is science
// [
//     {
//       title: 'Book Five',
//       genre: 'Science',
//       publish: 1995,
//       edition: 2018
//     },

//     { title: 'Book Six',
//       genre: 'Science', 
//       publish: 2005, 
//       edition: 2022 
//     }
//   ]



//   step 2.1 :- taking output whose publish date is after 2000
// const userBooks = books.filter( (bk) => bk.publish >= 2000 )
// console.log(userBooks);
// [
//     { title: 'Book Six', genre: 'Science', publish: 2005, edition: 2022 }
//   ]

// step 2.2 :- jiska publish date 1995 sa jyda ho aur genre uski history ho
// const userBooks = books.filter( (bk) => bk.publish >= 1990 && bk.genre === "History" )
// console.log(userBooks);

// Op :- 
// [
//     {
//       title: 'Book Four',
//       genre: 'History',
//       publish: 1991,
//       edition: 2014
//     }
//   ]




// ################################# ###################3 ############################## ########
// map

// Ex :- 1 isma hum sab ka ander 10 ko add karta jayenga
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumbs =  myNumbers.map( (num) => num + 10) 
// console.log(newNumbs); 
// Op :- Here we get
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
// ]



// Chaining example 
// step 1 :- apply two num value togetther and sriet their output
const newNumbs = myNumbers
.map( (num) => num * 10 )
.map( (num) => num + 1)
// step 1.2 :- apply filter also and write their output
.filter ( (num) => num >= 40)
// console.log(newNumbs); 

// // step 1 :- output
// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
// ]

// // step 1.2 output
// [
//     41, 51,  61, 71,
//     81, 91, 101
// ]




// ################################################################ ##############################
// Reduce method

// Ex :- 1
const reduceNums = [1, 2, 3]

// const myTotal = reduceNums.reduce( function (acc, currval) {

//     return acc + currval
// }, 0)
// console.log(myTotal);

// Ex :- 1.1
// same example with different approach with arrow function

const myTotal = reduceNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);
6


// Ex :- 2 (suppose karo ki shopping kar maijo bhi item hai usa hum add kar rha hain)
const shoppingCart = [

    {
        itemName: "js course", 
        price : 2999
    }, 
    {
        itemName: "pythin course", 
        price : 999
    }, 
    {
        itemName: "mobile dev course", 
        price : 5999
    }, 
    {
        itemName: "data science course", 
        price : 12999
    }, 
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(priceToPay);
// Op :- 22996

