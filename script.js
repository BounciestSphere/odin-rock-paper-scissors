// Initialize score
let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    // Generate a random integer 0, 1, 2 
    let randomNumber = Math.floor(Math.random() * 3);

    // Convert random integer to text
    switch (randomNumber){
        case 0:
            return 'rock';
            break;

        case 1:
            return 'paper';
            break;
        
        default:
            return 'scissors'
            break;
    }
}

function getHumanChoice() {
    // Get user input
    let humanInput = window.prompt('Make your choice! Rock, paper, scissors...');
    
    // Return user input
    if (humanInput.toLowerCase() === 'rock'){
        return 'rock';
    }

    else if (humanInput.toLowerCase() === 'paper'){
        return 'paper';
    }
    
    else if (humanInput.toLowerCase() === 'scissors'){
        return 'scissors';
    }

    // If not valid, return null
    else {
        return null;
    }
}

function playRound(humanChoice, computerChoice){
    console.table (humanChoice, computerChoice);
    if (humanChoice === 'rock'){
        if (computerChoice === 'rock'){
            console.log(`It's a tie! ${humanChoice} with ${computerChoice}!`);
            return;
        }

        else if (computerChoice === 'paper') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
            computerScore++;
            return;
        }

        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
            humanScore++;
            return;
        }
    }

    else if (humanChoice === 'paper'){
        if (computerChoice === 'paper'){
            console.log(`It's a tie! ${humanChoice} with ${computerChoice}!`);
            return;
        }

        else if (computerChoice === 'scissors') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
            computerScore++;
            return;
        }

        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
            humanScore++;
            return;
        }
    }

    else if (humanChoice === 'scissors'){
        if (computerChoice === 'scissors'){
            console.log(`It's a tie! ${humanChoice} with ${computerChoice}!`);
            return;
        }

        else if (computerChoice === 'rock') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
            computerScore++;
            return;
        }

        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
            humanScore++;
            return;
        }
    }

    else {
        console.log('You broke the game! Choose one of the options next time!');
        console.log('No points for you! :p')
        return;
    }
}

playRound(getHumanChoice(), getComputerChoice());