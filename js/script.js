const gameBtns = document.getElementById("game-btns");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resetBtn = document.getElementById("reset-btn");
const humanScoreEl = document.getElementById("human-score");
const computerScoreEl = document.getElementById("computer-score");
const messageEl = document.getElementById("message");
let humanScore = 0;
let computerScore = 0;
let message = "Press a button to start the game";

rockBtn.addEventListener("click", function () {
  const humanChoice = "rock";
  const computerChoice = getComputerChoice();
  message = playRound(humanChoice, computerChoice);
  checkForWinner();
  render();
});

paperBtn.addEventListener("click", function () {
  const humanChoice = "paper";
  const computerChoice = getComputerChoice();
  message = playRound(humanChoice, computerChoice);
  checkForWinner();
  render();
});

scissorsBtn.addEventListener("click", function () {
  const humanChoice = "scissors";
  const computerChoice = getComputerChoice();
  message = playRound(humanChoice, computerChoice);
  checkForWinner();
  render();
});

resetBtn.addEventListener("click", function () {
  humanScore = 0;
  computerScore = 0;
  message = "Press a button to start the game";
  gameBtns.style.display = "block";
  resetBtn.style.display = "none";
  render();
});

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
    return "You win! Rock beats Scissors";
  } else if ((humanChoice === "rock") & (computerChoice === "paper")) {
    computerScore += 1;
    return "You lose! Paper beats Rock";
  } else if ((humanChoice === "paper") & (computerChoice === "rock")) {
    humanScore += 1;
    return "You win! Paper beats Rock";
  } else if ((humanChoice === "paper") & (computerChoice === "scissors")) {
    computerScore += 1;
    return "You lose! Scissors beats Paper";
  } else if ((humanChoice === "scissors") & (computerChoice === "paper")) {
    humanScore += 1;
    return "You win! Scissors beats paper";
  } else if ((humanChoice === "scissors") & (computerChoice === "rock")) {
    computerScore += 1;
    return "You lose! Rock beats Scissors";
  } else {
    return "It's a tie!";
  }
}

function render() {
  humanScoreEl.textContent = "Human score: " + humanScore;
  computerScoreEl.textContent = "Computer score: " + computerScore;
  messageEl.textContent = message;
}

function checkForWinner() {
  if (humanScore === 5) {
    message = "You win the game!";
    gameBtns.style.display = "none";
    resetBtn.style.display = "inline-block";
  }

  if (computerScore === 5) {
    message = "You lose the game!";
    resetBtn.style.display = "inline-block";
    gameBtns.style.display = "none";
  }
}

render();
