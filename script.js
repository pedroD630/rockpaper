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

//receber escolha do usuario
let userChoice = prompt("Rock, Paper or Scissor?").toLowerCase();
//receber escolha do computador
let computerChoice = getComputerChoice();
//comparar valores
function compareValues(computerChoice, userChoice){
    if(computerChoice == "rock" && userChoice == "rock" || computerChoice == "paper" && userChoice == "paper" || computerChoice == "scissor" && userChoice == "scissor"){
        return `Draw. You choose ${userChoice} Computer choose ${computerChoice}`;
    }
    else if(computerChoice == "rock" && userChoice == "paper" || computerChoice == "paper" && userChoice == "scissor" || computerChoice == "scissor" && userChoice == "rock"){
        return `You Win! Congratulations! You choose ${userChoice} Computer choose ${computerChoice}`;
    }
    else if(computerChoice == "rock" && userChoice == "scissor" || computerChoice == "paper" && userChoice == "rock" || computerChoice == "scissor" && userChoice == "paper"){
        return `Nooooo! You was defeated! Try Again! You choose ${userChoice} Computer choose ${computerChoice}`;
    }
    else{
        return `Invalid choice. You choose ${userChoice}`;
    }
}
//criar uma funcao que ao ser chamada inicia o jogo
function gameStart(userChoice, computerChoice){
    gameResult = compareValues(computerChoice, userChoice);
    console.log(gameResult);
}
//chama a funcao para iniciar
gameStart(userChoice, computerChoice);






