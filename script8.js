// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log('btn1 was clicked');
//     let a = 2;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector('div');
//  div.onmousemove = () => {
//     console.log('shashank');
//  }

// btn1.addEventListener("click",(evt) =>{
//     console.log("button was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });

// btn1.addEventListener("click",() =>{
//     console.log("button was clicked");
// });



// btn1.addEventListener("click",() =>{
//     console.log("button was clicked - 1");
// });

// btn1.addEventListener("click",() =>{
//     console.log("button was clicked - 2");
// });


//  const handler3 = () =>{
//     console.log("button was clicked - 3");
// };

// btn1.addEventListener("click",() =>{
//     console.log("button was clicked - 4");
// });

// btn1.removeEventListener("click",handler3);




//PRACTICE QUESTION CHAPTER 8 



let modeBtn = document.querySelector('#mode');
let body = document.querySelector('#body');
let currMode = 'light';

// modeBtn.addEventListener("click",() =>{
//   if(currMode === "light"){
//     currMode = 'dark';
//     document.querySelector("body").style.backgroundColor = "black";
//   }  else{
//     currMode = 'light';
//     document.querySelector("body").style.backgroundColor = "white";
//   }


modeBtn.addEventListener('click',() =>{
    if(currMode === 'light'){
      currMode = 'dark';
      body.classList.add('dark');
      body.classList.remove('light')
    }  else{
      currMode = 'light';
      body.classList.add('light');
      body.classList.remove('dark')
    }
  

  console.log(currMode);
})

