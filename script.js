//gerar escolha aleatória do computador
function getComputerChoice(){
    let possibleChoices = ["Rock", "Paper", "Scissor"];
    let choice = Math.floor(Math.random() * possibleChoices.length);
    let computerChoice;
    switch (choice) {
        case 0 :
            computerChoice = "rock";
            break;
        case 1 :
            computerChoice = "paper";
            break;
        case 2 : 
            computerChoice = "scissor";
            break;
    }
    return computerChoice;
}


function compareValues(computerChoice, userChoice){
    if(computerChoice == "rock" && userChoice == "rock" || computerChoice == "paper" && userChoice == "paper" || computerChoice == "scissor" && userChoice == "scissor"){
        console.log(`Draw. You choose ${userChoice} Computer choose ${computerChoice}`);
    }
    else if(computerChoice == "rock" && userChoice == "paper" || computerChoice == "paper" && userChoice == "scissor" || computerChoice == "scissor" && userChoice == "rock"){
        console.log(`You Win! Congratulations! You choose ${userChoice} Computer choose ${computerChoice}`);
    }
    else if(computerChoice == "rock" && userChoice == "scissor" || computerChoice == "paper" && userChoice == "rock" || computerChoice == "scissor" && userChoice == "paper"){
        console.log(`Nooooo! You was defeated! Try Again! You choose ${userChoice} Computer choose ${computerChoice}`);
    }
    else{
        console.log("Invalid choice. You choose " + userChoice);
    }
}
//receber escolha do usuario
let userChoice = prompt("Rock, Paper or Scissor?").toLowerCase();
let computerChoice = getComputerChoice();

gameResult = compareValues(computerChoice, userChoice);







