function getComputerChoice(){
    let options = ['Rock', 'Paper', 'Scissors']


    randomPick =Math.round(Math.random() * options.length);

    if(randomPick === 3){
        randomPick= randomPick - 1
    }

    return options[randomPick].toUpperCase();
}    



function getHumanChoice(){
    let pick = prompt('Pick one: rock paper scissors')
    return pick.toUpperCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toUpperCase()
    computerChoice = computerChoice.toUpperCase()

    console.log(`You chose ${humanChoice}`)
    console.log(`Computer chose ${computerChoice}`)

    if(humanChoice === computerChoice){
        console.log(`It's a tie.`);
        return;
    }

    if((humanChoice === 'ROCK' && computerChoice === 'SCISSORS')||
       (humanChoice === 'PAPER' && computerChoice === 'ROCK')||
       (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ){
        humanScore += 1
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }else{
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }

    console.log(``)
    console.log('Scores:')
    console.log(`You: ${humanScore} | Computer: ${computerScore}`)
    console.log(``)
}

function game(){
    for(let round = 1; round <= 5; round++){

        console.log(`Round: ${round}`)
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)
    }

    if(humanScore > computerScore){
        console.log('Congratulations, you are the overall winner')
    }else if(computerScore > humanScore){
        console.log('The computer wins the game! Good Luck next time')
    }else{
        console.log(`It's a tie! There is no overall winner`)
    }
}


game()
