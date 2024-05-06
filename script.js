// console.log('Hello World');

// OPERATORS IN JS
// Arithmetic Operators

let a = 5;
let b = 2;

console.log('a=',a, 'b=',b);
console.log('a+b',a+b);
console.log('a-b',a-b);
console.log('a*b',a*b);
console.log('a/b',a/b);
// THIS IS MODULUS OPERATOR ( % )
console.log('a%b',a%b); 

// THIS IS EXPONENTIATION MODULUS  ( ** )

console.log('a**b',a**b);

// UNARY OPERATOR ARE TWO TYPE INCREAMENT (++) AND DECREAMENT (--)

console.log('a=',a,'b',b);
a++;
console.log('a=',a);

console.log('a=',a,'b',b);
a--;
console.log('a=',a);

// ASSIGNMENT OPERATOR

a *= 4  // a = a*4
console.log("a =", a);

//COMPARISION OPERATOR 

console.log("5==2", a == b);  //FALSE
console.log(" 5!=2 ",a!=b);   //TRUE

//STRICTER COMPARISION OPERATOR 

// IF a=5 (number) and b= "5" (string)

// console.log("5===5", a === b);  //FALSE
// console.log("5!==5", a !== b);  //TRUE

// EQUAL TO - ==, NOT EQUAL TO - !=
// EQUAL TO TYPE - ====, NOT EQUAL TO TYPE - !==

// OTHER OPERATORS ARE 
// >, >=, <, <=


//LOGICAL OPERATORS


console.log("cond1 && cond2 = ", a>b && a===5);   //LOGICAL AND (IF BOTH CONDITON TRUE THEN TRUE)

console.log("cond1 || cond2 =", a>b || a===5);    //LOGICAL OR  (IF ONE CONDITION TRUE THEN TRUE)

// console.log("!(5<2) =", !(a ==== 5));     // LOGICAL NOT (CHANGE THE CONDITION IF IT IS TRUE THEN FALSE OR IF IT IS FALSE THEN TRUE)


//CONDITIONAL STATEMENT

//IF STATEMENT

 let age = 17;

 if (age>=18) {
     console.log("YOU CAN VOTE");
 }

 if (age< 18) {
     console.log("YOU CAN NOT VOTE");
 }

// let mode= "light";
// let color;

// if (mode=== 'dark'){
//     color ="black";
// }

// if(mode==='light'){
//     color='white';
// }

// console.log(color);


//IF-ELSE STATEMENT

//odd and even check

// let num=19;

// if (num %2 ===0){
//     console.log(num, "is even");
// } else{
//     console.log(num,"is odd");
// }


//ELSE-IF STATEMENT

let mode="red";
let color;

if(mode=== "dark"){
    color = "black";
} else if (mode=== "blue"){
    color = "blue";
} else if (mode==="pink"){
    color = "pink";
} else {
    color = "white";
}

console.log(color);

//TERNARY OPERATORS

// let result = age>= 18 ? "adult" : "not adult";
// console.log(result); 

// ANOTHER TYPE 

age>= 18 ? console.log('adult') : console.log("not adult");


//USING OF PROMPT

//  let name = prompt('hi'); 
//  console.log(name);


// let num = prompt("enter a number");

// if (num % 5 ===0){
//     console.log(num,"is a multiple of 5");
// } else {
//     console.log("is not a multiple of 5");
// }

//PRACTICE QUESTION 2 

let score = prompt("enter your score (0-100):");
let grade;

if ( score >=90 && score <=100){
    grade = "A";
} else if ( score>=70 && score<+89){
    grade = "B";
} else if( score >=60 && score<=69){
    grade = "C";
} else if ( score >=50 && score <=59) {
    grade = "D";
} else if (score >= 0 && score <=49) {
    grade = "F"
}

console.log("according to your scores , your grade was: ",grade);