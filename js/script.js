let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const rand = Math.floor(Math.random() * choices.length);
  return choices[rand];
}

function getHumanChoice() {
  const choice = prompt("Rock, paper or scissors?").toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if ((humanChoice === "rock") & (computerChoice === "scissors")) {
    humanScore += 1;
    console.log("You win! Rock beats Scissors");
  } else if ((humanChoice === "rock") & (computerChoice === "paper")) {
    computerScore += 1;
    console.log("You lose! Paper beats Rock");
  } else if ((humanChoice === "paper") & (computerChoice === "rock")) {
    humanScore += 1;
    console.log("You win! Paper beats Rock");
  } else if ((humanChoice === "paper") & (computerChoice === "scissors")) {
    computerScore += 1;
    console.log("You lose! Scissors beats Paper");
  } else if ((humanChoice === "scissors") & (computerChoice === "paper")) {
    humanScore += 1;
    console.log("You win! Scissors beats paper");
  } else if ((humanChoice === "scissors") & (computerChoice === "rock")) {
    computerScore += 1;
    console.log("You lose! Rock beats Scissors");
  } else {
    console.log("It's a tie!");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log("Human score: " + humanScore);
  console.log("Computer score: " + computerScore);
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("Tie game!");
  }
}

playGame();
