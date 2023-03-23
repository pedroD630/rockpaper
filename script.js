//gerar escolha aleatória do computador
function getComputerChoice(){
    let possibleChoices = ["Rock", "Paper", "Scissor"];
    let choice = Math.floor(Math.random() * possibleChoices.length);
    return choice;
}
let computerChoice = getComputerChoice();
let choice = "";
switch (computerChoice) {
    case 0 :
        choice = "rock";
        break;
    case 1 :
        choice = "paper";
        break;
    case 2 : 
        choice = "scissor";
        break;
}
function compareValues(){
    
}
//receber escolha do usuario
let userChoice = prompt("Rock, Paper or Scissor?").toLowerCase();

if(choice == "rock" && userChoice == "rock"){
    console.log("Draw. You choose " + userChoice + ". Computer choose " + choice);
}
else if(choice == "rock" && userChoice == "paper"){
    console.log("You Win! Congratulations! You choose " + userChoice + ". Computer choose " + choice);
}
else if(choice == "rock" && userChoice == "scissor"){
    console.log("Nooooo! You was defeated! Try Again! You choose " + userChoice + ". Computer choose " + choice);
}
else if(choice == "paper" && userChoice == "rock"){
    console.log("Nooooo! You was defeated! Try Again! You choose " + userChoice + ". Computer choose " + choice);
}
else if(choice == "paper" && userChoice == "paper"){
    console.log("Draw! You choose " + userChoice + ". Computer choose " + choice);
}
else if(choice == "paper" && userChoice == "scissor"){
    console.log("You Win! Congratulations! You choose " + userChoice + ". Computer choose " + choice);
}
else if(choice == "scissor" && userChoice == "rock"){
    console.log("You Win! Congratulations! You choose " + userChoice + ". Computer choose " + choice);
}
else if(choice == "scissor" && userChoice == "paper"){
    console.log("Nooooo! You was defeated! Try Again! You choose " + userChoice + ". Computer choose " + choice);
}
else if(choice == "scissor" && userChoice == "scissor"){
    console.log("Draw You choose " + userChoice + ". Computer choose " + choice);
}
else{
    console.log("Invalid choice. You choose " + userChoice);
}


