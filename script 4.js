//ARRAYS IS A COLLECTION OF ITEM AND IT STORE INFORMATION IN A LINEAR WAY. 
//POSITION IS ALSO CALLED INDEX.
//PROPERTY GIVES A SOME VALUE AND METHOD KA MATLAB JO KUCH KAAM KARTA HAI 
//ARRAYS IS A TYPE OF OBJECT.
//ARRAY IS A MUTABLE   -> IT MEANS WE CAN CHANGE THE VALUE OF ARRAYS.

let heroes = ["ironman", "spiderman", "hulk", "thor", "joker", "cartoon"];
console.log(heroes);

let marks = [98, 92, 80, 87, 67, 98, 56, 71];
console.log(marks);

//ARRAYS INDICES   -> INDICES MEANS PLURAL FORM OF INDEX
//IN ARRAY WE CAN CHANGE THE VALUE OF ARRAYS BUT NOT IN STRINGS.

marks[7] = 100;
console.log(marks);
//WE CHANGE THE VALUE IN ARRAYS .WE CHANGE THE MARKS OF 7 IS 71 TO 100.



//LOOPING OVER AN ARRAY

//LOOP IS A ITERABLE.IN ITERABLE ( STRINGS , OBJECT , ARRAYS ) ARE COME.
//STRING IS A COLLECTION OF CHARACTER.
//OBJECT IS A COLLECTION OF KEY VALUES.
//ARRAYS IS A COLLECTION OF SIMILAR TYPE OF ITEMS.

//WE CAN PRINT THE HEROES NAME IN ARRAYS BY USING ( FOR LOOP )

for (let i = 0; i < heroes.length; i++) {
   console.log(heroes[i]);
}

//WE CAN PRINT THE CITIES NAME IN ARRAYS BY USING ( FOR OF LOOP)

let cities = ["delhi", "jharkhand", "goa", "mumbai"];
for (let city of cities) {
   console.log(city.toUpperCase());
}




//PRACTICE QUESTION
// For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.

// let marks = [98, 92, 80, 87, 67, 98, 56, 71];
let sum = 0;

for (let val of marks) {
   sum += val;
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);


//PRACTICE QUESTION 
//For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price after
//applying offer.

//SOLVE USING FOR OF LOOP
let items = [250, 645, 300, 900, 50];

let i = 0;
for (let val of items) {
   let offer = val / 10;
   items[i] = items[i] - offer;
   console.log(`value after offer = ${items[i]}`);
   i++;
}

//SOLVE USING FOR LOOP
for (let i = 0; i < items.length; i++) {
   let offer = items[i] / 10;
   items[i] -= offer;
}

console.log(items);



//ARRAY METHODS
//PUSH-> TO ADD SOMETHING.(ADD TO END)
//POP-> TO DELETE SOMETHING.(DELETE FROM END & RETURN)


//PUSH
let foodItems = ["tomato", "potato", "apple", "mango"];

foodItems.push("cake", "burger", "panner");
console.log(foodItems);


//POP   ->CHANGING IN ORIGINAL ARRAY
console.log(foodItems);
let deletedItems = foodItems.pop();
console.log(foodItems);
console.log("deleted", deletedItems);


//toString()   -> CHANGING THE ARRAY TO STRING
// ->WE CAN CHANGE MARKS OF ARRAY ALSO 
console.log(foodItems.toString());


//Concat()     -> JOINS MULTIPLES ARRAYS & RETURN RESULT
let marvelHeroes = ["ironman", "spiderman", "hulk", "thor", "joker", "cartoon"];
let dcHeroes = ['batman', 'superman'];
let indianHeroes = ["krish", "shaktiman"];

let HEROES = marvelHeroes.concat(dcHeroes, indianHeroes);

console.log(HEROES);


// //Unshift()   -> ADD TO START
// let newVal = marvelHeroes.unshift(grrot);
// console.log('marvelHeroes',newVal);


// //Shift()   -> DELETE FROM START & RETURN
// let newMarvelHeroes = ["ironman", "spiderman", "hulk", "thor", "joker", "cartoon"];

// let val = newMarvelHeroes.shift();
// console.log("deleted",val);


//Slice()   -> returns the piece of the array
//          -> IT IS NOT CHANGE IN ORIGINAL ARRAY
console.log(marvelHeroes);

console.log(marvelHeroes.slice(0, 3));


//Splice()  -> CHANGE ORIGINAL ARRAY ( ADD, REMOVE, REPLACE)
let arr = [1, 2, 3, 4, 5, 6, 7];

//ADD ELEMENT
// arr.splice(2, 2, 101,102);

//DELETE ELEMENT
// arr.splice(3,1);

//REPLACE ELEMENT
// arr.splice(3,1,50);

//AGAR HUM ARRAY MAI EK INDEX PASS KAREGE TOH USKE AAGE KE SAARE INDEX DELETE HO JAYEGA OR BACHA HUA INDEX RETURN MILEGE
//SPLICE MAI AGAR KOI NDEX PASS NAI KAREGE TOH KUCH V DELETE NAI HOGA 









//QUESTION
// Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
//a. Remove the first company from the array.
//b. Remove Uber & Add Ola in its place.
//c. Add Amazon at the end.

//a.
let companies = ['Bloomberg', 'Microsoft', 'uber', 'google', 'tcs', 'netflix', 'amazon'];

console.log(companies);

companies.shift();
console.log(companies);

//b.
companies.splice(2, 1, "ola");
console.log(companies);

//c.
companies.push("prime video");
console.log(companies);



