let userScore = 0;
let compScore = 0;



const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#comp-score");



const genComputerChoice = () => {
    const options = ["paper","rock","scissors"];
    const rndm = Math.floor(Math.random() * 3);
    return options[rndm];
}



const gameDraw = () => {
    msg.innerText = "The Game was Draw!" ;
    msg.style.backgroundColor = "blue";
}

const showWinner = (usrWin, usrChoice, compChoice) => {
    if(usrWin === true){
        msg.innerText = `You win! Your ${usrChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
        userScore += 1;
        userScorePara.innerText = userScore ;
    }
    else{
        msg.innerText = `You Lose!${compChoice} beats your ${compChoice}` ;
        msg.style.backgroundColor = "red";
        compScore += 1 ;
        compScorePara.innerText = compScore ;
    }
}



const playgame = (usrChoice) => {
const compChoice =  genComputerChoice();
    if (compChoice === usrChoice){
        gameDraw();
    }
    else{
        let usrWin = true;
        if(usrChoice === "rock"){
             usrWin = compChoice === "paper" ? false : true ;
        }
        else if(usrChoice === "paper"){
             usrWin = compChoice === "scissors" ? false : true ;
        }
        else{
             usrWin = compChoice === "rock" ? false : true ;
        }
        showWinner(usrWin , usrChoice, compChoice);
    }
   
}


choices.forEach((choice) => {
   choice.addEventListener("click", () => {
    const usrChoice = choice.getAttribute("id");
    playgame(usrChoice);
   });

    });