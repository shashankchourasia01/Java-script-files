//FOR LOOP

// for ( let count = 1; count<=3; count++ ){
//     console.log("shashank");
// }

// console.log("loop has been ended");

//CALCULATE THE SUM OF 1 TO 10

// let sum = 0;
// for (let i = 1; i<=10; i++) {
//     sum = sum +i;
// }

// console.log("sum=",sum);


//CALCULATE 1 TO 100

//  let sum = 0;
//  let n = 100;
//  for (let i = 1; i<=n; i++) {
//      sum = sum +i;
//  }

//  console.log("sum=",sum);
//  console.log("loop has been ended");


//WHILE LOOP 

//  let i = 1;

//  while (i<=10) {
//     console.log("shashank.s");
//     i++;
//  }


//do-while LOOP

//  let i = 1;
// do {
//     console.log("i=",i);
//     i++;
// } while (i<=10);


//for-of LOOP.  IT IS USED IN STRINGS AND ARRAYS  

// let str = "GGSESTC";
// let size = 0; 

// for (let val of str) {
//     //count= ITERATOR-> CHARACTER
//     console.log("val=",val);
//     size++;
// }

// console.log("size=",size);


//for-in LOOP.    IT IS USED IN OBJECTS AND ARRAYS


// let student = {
//     name:'rahul',
//     age:20,
//     cgpa:8,
//     isPass: true,
// };

// for (let key in student){
//     console.log("key",key, "value",student[key]);
// }


//PRACTICE QUESTION OF LOOP

//Qn -> PRINT ALL EVEN NUMBER FROM 0 TO 100.

// for (let num = 0; num<=100; num++){
//     if( num %2===0){
//         console.log("num=",num);
//     }
// }



//QUESTION 2 
// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.


//  let gameNum = 25;
//  let userNum = prompt("Guess The Game Number :");

//  while ( userNum !=  gameNum) {
//      userNum = prompt("You entered wrong number.Guess again:");
//  }

//  console.log("congratulations, you entered the right number");





//STRINGS
//STRINGS IS A IMMUTABLE    -> IT MEANS WE CAN NOT CHANGE THE VALUE OF STRINGS

// let str = 'SHASHANKCHOURASIA'; 

//  console.log("str [3]");


//TEMPLATE LITERALS

// let obj = {
//     item: "pen",
//     price: 10,
// };

// console.log("the cost of", obj.item, "is", obj.price, "rupees");

// //ANOTHER FORM USING TEMPLATES

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

//ESCAPE CHARACTER   
//     ->\n means print in next line 
//     ->\t means tab or gap in character


// let str = "shashank\nkumar";

// console.log(str.length);



//STRINGS METHODS IN JS
//METHODS ARE BLOCK OF CODE.

//METHODS AND FUNTIONS MEANING ARE SAME 



//TO UPPER CASE
// let str = "    shashank kumar  JS  ";
// str = str.toUpperCase();
// console.log(str);


// //TO LOWER CASE
// str = str.toLowerCase();
// console.log(str);

// //TRIM MERHOD   -> str.trim() //removes whitespaces 
// console.log(str.trim());

//STRING SLICE METHOD    ->str.slice( start , end? ) 

// let str = "shashank";
// console.log(str.slice(5));

//STRING CONCATINATION   
//str1.concat(str2)    ->JOINS STR2 WITH STR1


// let str1 = "shashank";
// let str2 = "shashank";

// let res = str1.concat(str2);
// console.log(res);

// let res1 = str2.concat(str1);
// console.log(res1);


// //STRING REPLACE 
// //str.replace(searchVal,newVal)

// console.log(str1.replace ("ha", "o"));
// console.log(str2.replaceAll ("ha", "o"));

// //STRING CHARACTER SEARCH METHOD    -> str.charAt()

// console.log(str1.charAt (2));






//PRACTICE QUESTION 1 (STRINGS)


let fullName = prompt ("Enter your full name without spaces");

let username = "@"  +  fullName + fullName.length;
console.log(username);


