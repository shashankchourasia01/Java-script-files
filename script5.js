//FUNCTION IS MAINLY USED FOR REDUNDANCY

function myFunction(msg) {  //HERE FUNTION VARIABLE OR MSG IS A   PARAMETER.   FUNCTION PARAMETERS ARE LIKE LOCAL VARIABLES. THEY ARE ALIVE TILL BLOCK SCOPE OF FUNCTION .
  console.log(msg);
}

myFunction("I LOVE JS");   //ARGUMENTS  is a value that is passed in FUNCTION CALL.

//FUNCTION   -> 2 NUMBERS , SUM

// function sum(x , y){
//   console.log(x + y);
// }

// function sum(x, y){
//   s = x+y;
//   return s;
// }

// let val = sum(3,4);
// console.log(val);



//ARROW FUNCTION ( => )




//SUM FUNCTION

// function sum(a, b) {
//   return a + b;
// }

// const arrowSum = (a, b) => {
//   return a + b;
// };

// //MULTIPLICATION FUNCTION

// function mul(a, b) {
//   return a * b;
// }

// const arrowMul = (a, b) => {
//   return a * b;
// };

//PRACTICE QUESTION 
//RETURN THE NUMBER OF VOWELS IN THE STRING

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
};


//PRACTICE QUESTION 
//CREATE AN ARROW FUNCTION FOR THE SAME TASK

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}







//forEach LOOP IN ARRAYS





// let arr = ["delhi", "mumbai", "goa"];

// arr.forEach((val, idx, arr) => {

//   console.log(val.toUpperCase(), idx, arr);

// });


//PRACTICE QUESTION
//For a given array of numbers, print the square of each value using the forEach looP

let nums = [1, 2, 3, 4, 5];

nums.forEach((nums) => {
  console.log(nums * nums);
})

//ANOTHER FORM TO SOLVE

let squareNum = [12, 13, 14];

let calcSquare = (squareNum) => {
  console.log(squareNum * squareNum);
};

squareNum.forEach(calcSquare);






//SOME MORE ARRAY MERHODS





//MAP METHOD - VALUE KO USE KARKE KOI NAYA ARRAY CREATE KARNA HO 





let num = [22,33,44];
 let newArr = num.map((val)  =>{
  return val * 2 ;
 });

 console.log(newArr);




 //FILTER METHOD 

 // CREATE A NEW ARRAY OF ELEMENT THAT GIVE TRUE FOR A CONDITION AND FILTER 
 //EG- ALL EVEN ELEMENTS 



 let arr = [1,2,3,4,5,6,7,8];

 let evenArr = arr.filter((val)  =>{
  return val % 2 !== 0;
 });

 console.log(evenArr);





 //REDUCE METHOD 





// let  array1 = [1,2,3,4];

//  const output = array1.reduce((res , curr)  =>{

//  return res + curr ;

//  });

//  console.log(output);






 //FIND OUT THE LARGEST NUMBER IN THE ARRAY

 
//  let array2 = [1,4,7,4,8];

//  const output = array2.reduce((res , curr) =>{
//   return res > curr ? res : curr;
//  });

//  console.log(output);






 //PRACTICE QUESTION

 let array3 = [79,89,91,93,95];

 const marks = array3.filter((val)  =>{
  return val > 90;
 });

 console.log(marks);





 //PRACTICE QUESTION

 let n = prompt("enter a number : ");

 let array4 = [];

 for ( let i = 1 ; i <= n ; i++) {
  array4 [i-1] = i;
 }

 console.log(array4);

 let sum = array4.reduce((res , curr)  =>{
  return res + curr;
 });

 console.log( "sum", sum);

 let factorial = array4.reduce((res , curr)  =>{
  return res * curr;
 });

 console.log( "factorial", factorial);

