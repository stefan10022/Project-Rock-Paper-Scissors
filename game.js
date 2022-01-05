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
    computerSelection = computerPlay();
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        result.innerHTML = 'The computer chose Paper. You lose! Paper beats Rock.';    
    }

    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        result.innerHTML ='The computer chose Scissors. You win! Rock beats Scissors.';    
    }

    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        result.innerHTML = 'The computer chose Scissors. You lose! Scissors beat paper.';
    }

    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        result.innerHTML = 'The computer chose Rock. You win! Paper beats rock.';
    }

    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        result.innerHTML = 'The computer chose Paper. You win! Scissors beat paper.';
    }

    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        result.innerHTML = 'The computer chose Rock. You lose! Rock beats scissors.';
    }

    else if (playerSelection === computerSelection) {
        result.innerHTML = `The computer chose ${computerSelection}. It's a draw.`;
    }

    else {
        result.innerHTML = 'You can only choose Rock, Paper or Scissors.';
    }
}


let playerScore = 0;
let computerScore = 0;
function game() {
    

    if (result.textContent.includes('win')) {
        playerScore++;
    }

    else if (result.textContent.includes('lose')) {
        computerScore++;
    } 
}




const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const buttons = document.querySelectorAll('button');

rock.addEventListener('click', function(e) {
    playRound('Rock');
    game();
    trackScore();
})

paper.addEventListener('click', function(e) {
    playRound('Paper');
    game();
    trackScore();
})
    
scissors.addEventListener('click', function(e) {
    playRound('Scissors');
    game();
    trackScore();
})

function trackScore() {
score.innerHTML = `SCORE (Player: ${playerScore} - Computer: ${computerScore})`;
if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
        result.innerText = 'Game Over! You win.';
    }
    else {
        result.innerText = 'Game Over! You lose';
    }
    buttons.forEach((button) => {
        button.remove();
    })
    
}
}





   


