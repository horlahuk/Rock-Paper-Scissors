// LOGIC FOR COMPUTER CHOICE
function getComputerChoice() {
  let decision;
  let num = Math.floor(Math.random() * 10);
  if (num <= 3) {
    decision = "rock";
  } else if (num <= 7) {
    decision = "paper";
  } else {
    decision = "scissors";
  }
  console.log("Computer Choice: " + decision);
  return decision; // Returning the decision
}

// LOGIC FOR HUMAN CHOICE
function getHumanChoice() {
  let humanDecision = prompt(
    "What are you playing as? (rock/paper/scissors)"
  ).toLowerCase();
  if (["rock", "paper", "scissors"].includes(humanDecision)) {
    console.log("Human Choice: " + humanDecision);
    return humanDecision; // Returning the human choice
  } else {
    console.log("Invalid choice, please select rock, paper, or scissors.");
    return getHumanChoice(); // Ask again if invalid
  }
}

// INITIATE PLAYER SCORE
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore += 1;
    console.log("You win this round!!!");
    console.log("Human Score: " + humanScore);
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore += 1;
    console.log("You lose this round!!!");
    console.log("Computer Score: " + computerScore);
  } else {
    console.log("It's a DRAW!");
  }
}

// Main Game Logic
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
