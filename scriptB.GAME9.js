let userScore = 0;
let compScore = 0;

const choices1 = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Drawn , Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin,userChoice,compChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    //GENERATE COMPUTER CHOICE 
    const compChoice = genCompChoice();
    console.log("comp Choice = ", compChoice);

    if (userChoice === compChoice) {
        //DRAW GAME
        drawGame();
    } else {
      let userwin = true;
      if (userChoice === "rock") {
        userwin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        compChoice === "scissors" ? false : true;
     } else {
        userwin = compChoice === "rock" ? false : true; 
     }
     showWinner(userwin,userChoice,compChoice);
    }

};

choices1.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
