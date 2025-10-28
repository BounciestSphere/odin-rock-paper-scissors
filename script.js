function getComputerChoice() {
    // Generate a random integer 0, 1, 2 
    let randomNumber = Math.floor(Math.random() * 3);

    // Convert random integer to text
    switch (randomNumber){
        case 0:
            return 'Rock!';
            break;

        case 1:
            return 'Paper!';
            break;
        
        default:
            return 'Scissors!'
            break;
    }
}

console.log(getComputerChoice());