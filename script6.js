//OBJECT KO PRINT KARANE KE LIYE WE USE 
// [Console.dir]
 
// let h2 = document.querySelector('h2');

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "FROM GGSESTC";





// PRACTISE QS 2

// let divs = document.querySelectorAll('.box');
// divs[0].innerText = 'new unique value';


// ANOTHER FORMAT FOR PROFESSIONAL


let divs = document.querySelectorAll('.box');

let idx = 1;
for(div of divs) {
    div.innerText = `new unique trick ${idx}`;
    idx++;
}