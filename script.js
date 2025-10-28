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
        return 'rock'
    }

    else if (humanInput.toLowerCase() === 'paper'){
        return 'paper';
    }
    
    else if (humanInput.toLowerCase() === 'else'){
        return 'scissors';
    }

    // If not valid, return null
    else {
        return null;
    }
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
console.log(`Computer choice: ${computerChoice}`);
console.log(`Human choice: ${humanChoice}`);