document.addEventListener('DOMContentLoaded', () => {

    let placar = [0, 0]; //[0] -> player [1] -> bot

    function updatePoints(winner) {
        let userPoints = document.getElementById("user");
        let botPoints = document.getElementById("robot");
        console.log(winner)
        switch (winner) {
            case 0:
                placar[0]++;
                userPoints.textContent = `${placar[0]}`;
                break;
            case 1:
                placar[1]++;
                botPoints.textContent = `${placar[1]}`;
                break;
        }
    }

    //gerar escolha aleatória do computador
    function getComputerChoice() {
        let possibleChoices = ["Rock", "Paper", "Scissor"];
        let choice = Math.floor(Math.random() * possibleChoices.length);
        let computerChoice;
        switch (choice) {
            case 0:
                computerChoice = "rock";
                break;
            case 1:
                computerChoice = "paper";
                break;
            case 2:
                computerChoice = "scissor";
                break;
        }
        return computerChoice;
    }

    const selectors = document.querySelectorAll('.selector');

    selectors.forEach(selector => {
        selector.addEventListener('click', (event) => {
            const userChoice = event.currentTarget.id;
            console.log(userChoice);
            gameStart(userChoice, getComputerChoice());
        });
    });

    function showResult(winner, userChoice, computerChoice) {

        const roundWinner = document.querySelector('#round_winner');
        roundWinner.classList.remove('win', 'lose', 'draw');
    
        const principal = document.querySelector('.principal');
        principal.classList.remove('win', 'lose', 'draw');

        const resultImages = document.querySelectorAll('.result-img');
        resultImages.forEach(img => img.classList.remove('show'));

        let winnerImage, loserImage;

        const narrator = document.getElementById('narrator');

        switch (winner) {
            case 0: // User win
                winnerImage = `#w-${userChoice}`;
                loserImage = `#lb-${computerChoice}`;
                roundWinner.classList.add('win');
                principal.classList.add('win');

                narrator.textContent = "You Win!";
                break;

            case 1: // Computer win
                winnerImage = `#wb-${computerChoice}`;
                loserImage = `#l-${userChoice}`;
                roundWinner.classList.add('lose');
                principal.classList.add('lose');

                narrator.textContent = "Defeated!";
                break;

            case 2: // Draw
                winnerImage = `#w-${userChoice}`; 
                loserImage = `#lb-${computerChoice}`;
                roundWinner.classList.add('draw');
                principal.classList.add('draw');

                narrator.textContent = "Draw!";
                break;

            default:
                console.log("Fatal error");
                return;
        }

        document.querySelector(winnerImage).classList.add('show');
        document.querySelector(loserImage).classList.add('show');

        roundWinner.classList.add('show');
        setTimeout(() => {
            roundWinner.classList.remove('show');
        }, 3000);
    }

    function compareValues(computerChoice, userChoice) {
        if (computerChoice == "rock" && userChoice == "rock" || computerChoice == "paper" && userChoice == "paper" || computerChoice == "scissor" && userChoice == "scissor") {
            showResult(2, userChoice, computerChoice);
            updatePoints(2);
            return `Draw. You choose ${userChoice} Computer choose ${computerChoice}`;
        }
        else if (computerChoice == "rock" && userChoice == "paper" || computerChoice == "paper" && userChoice == "scissor" || computerChoice == "scissor" && userChoice == "rock") {
            showResult(0, userChoice, computerChoice);
            updatePoints(0);
            return `You Win! Congratulations! You choose ${userChoice} Computer choose ${computerChoice}`;
        }
        else if (computerChoice == "rock" && userChoice == "scissor" || computerChoice == "paper" && userChoice == "rock" || computerChoice == "scissor" && userChoice == "paper") {
            showResult(1, userChoice, computerChoice);
            updatePoints(1);
            return `Nooooo! You was defeated! Try Again! You choose ${userChoice} Computer choose ${computerChoice}`;
        }
        else {
            return `Invalid choice. You choose ${userChoice}`;
        }
    }

    function gameStart(userChoice, computerChoice) {
        gameResult = compareValues(computerChoice, userChoice);
        console.log(gameResult);
        // atualizar placar com base no game result
        //no fim da função, se alguém tiver 5 pontos, zerar;
    }
    //chama a funcao para iniciar

});




