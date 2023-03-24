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
let computerChoice = getComputerChoice();

function compareValues(){
    
}
//receber escolha do usuario
let userChoice = prompt("Rock, Paper or Scissor?").toLowerCase();

if(computerChoice == "rock" && userChoice == "rock"){
    console.log("Draw. You choose " + userChoice + ". Computer choose " + computerChoice);
}
else if(computerChoice == "rock" && userChoice == "paper"){
    console.log("You Win! Congratulations! You choose " + userChoice + ". Computer choose " + computerChoice);
}
else if(computerChoice == "rock" && userChoice == "scissor"){
    console.log("Nooooo! You was defeated! Try Again! You choose " + userChoice + ". Computer choose " + computerChoice);
}
else if(computerChoice == "paper" && userChoice == "rock"){
    console.log("Nooooo! You was defeated! Try Again! You choose " + userChoice + ". Computer choose " + computerChoice);
}
else if(computerChoice == "paper" && userChoice == "paper"){
    console.log("Draw! You choose " + userChoice + ". Computer choose " + computerChoice);
}
else if(computerChoice == "paper" && userChoice == "scissor"){
    console.log("You Win! Congratulations! You choose " + userChoice + ". Computer choose " + computerChoice);
}
else if(computerChoice == "scissor" && userChoice == "rock"){
    console.log("You Win! Congratulations! You choose " + userChoice + ". Computer choose " + computerChoice);
}
else if(computerChoice == "scissor" && userChoice == "paper"){
    console.log("Nooooo! You was defeated! Try Again! You choose " + userChoice + ". Computer choose " + computerChoice);
}
else if(computerChoice == "scissor" && userChoice == "scissor"){
    console.log("Draw You choose " + userChoice + ". Computer choose " + computerChoice);
}
else{
    console.log("Invalid choice. You choose " + userChoice);
}


