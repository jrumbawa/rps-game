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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if ((humanChoice === "rock") & (computerChoice === "scissors")) {
    console.log("You win! Rock beats Scissors");
  } else if ((humanChoice === "rock") & (computerChoice === "paper")) {
    console.log("You lose! Paper beats Rock");
  } else if ((humanChoice === "paper") & (computerChoice === "rock")) {
    console.log("You win! Paper beats Rock");
  } else if ((humanChoice === "paper") & (computerChoice === "scissors")) {
    console.log("You lose! Scissors beats Paper");
  } else if ((humanChoice === "scissors") & (computerChoice === "paper")) {
    console.log("You win! Scissors beats paper");
  } else if ((humanChoice === "scissors") & (computerChoice === "rock")) {
    console.log("You lose! Rock beats Scissors");
  } else {
    console.log("It's a tie!");
  }
}

playRound(humanSelection, computerSelection);
