function computerPlay() {
    x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return 'Rock';
    }

    else if (x === 1) {
        return 'Paper';
    }

    else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Choose:','');
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerPlay();
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'The computer chose Paper. You lose! Paper beats Rock.';    
    }

    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'The computer chose Scissors. You win! Rock beats Scissors.';    
    }

    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'The computer chose Scissors. You lose! Scissors beat paper.';
    }

    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'The computer chose Rock. You win! Paper beats rock.';
    }

    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'The computer chose Paper. You win! Scissors beat paper.';
    }

    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'The computer chose Rock. You lose! Rock beats scissors.';
    }

    else if (playerSelection === computerSelection) {
        return `The computer chose ${computerSelection}. It's a draw.`;
    }

    else {
        return 'You can only choose Rock, Paper or Scissors.';
    }
         }



function game(numOfRounds) {
    let playerScore = 0;
    let computerScore = 0;

    if (!isNaN(numOfRounds) && numOfRounds != 0 && numOfRounds > 0 && Math.sign(numOfRounds) > 0) {
        for (let i = 1; i <= numOfRounds; i++) {
            alert(`Round ${i} of ${numOfRounds}`);
            let result = playRound();
            alert(result);

            if (result.includes('You can only')) {
                i--;
            }

            else if (result.includes('win')) {
                playerScore++;
            }

            else if (result.includes('lose')) {
                computerScore++;
            } 

        }
    }

    else {
        alert('The number of rounds must be a positive integer.');
        alert(loop());
    }

    alert(score(playerScore, computerScore));
}

function score(playerScore, computerScore) {
    if (playerScore > computerScore) {
        alert(`You win the game! The score is ${playerScore} to ${computerScore}.`);
    }

    else if (playerScore < computerScore) {
        alert(`You lose the game! The score is ${playerScore} to ${computerScore}.`);
    }

    else {
        alert(`It's a draw! The score is ${playerScore} to ${computerScore}.`);
    }
}

function loop() {
let rounds = prompt('Number of rounds?');
alert(game(rounds));
}

alert(loop());





   


