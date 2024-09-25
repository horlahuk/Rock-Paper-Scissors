// LOGIC FOR COMPUTER CHOICE
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3); // Generates a number between 0-2
  let decision;
  if (num === 0) {
    decision = "rock";
  } else if (num === 1) {
    decision = "paper";
  } else {
    decision = "scissors";
  }
  console.log("Computer Choice: " + decision);
  return decision; // Returning the decision
}

// INITIATE PLAYER SCORE
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

// LOGIC FOR HUMAN CHOICE AND GAME ROUND
function playGame() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (roundCount < 5) {
        const humanChoice = button.innerText.toLowerCase();
        console.log("Human Choice: " + humanChoice);

        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        roundCount++;
        if (roundCount >= 5) {
          showFinalResult();
        }
      } else {
        console.log("Game over! Refresh to play again.");
      }
    });
  });
}

function playRound(humanChoice, computerChoice) {
  let resultMessage;
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore += 1;
    resultMessage = "You win this round!!!";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore += 1;
    resultMessage = "You lose this round!!!";
  } else {
    resultMessage = "It's a DRAW!";
  }

  // Display round results
  document.getElementById("result").innerText = resultMessage;
  document.getElementById(
    "scoreboard"
  ).innerText = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
}

function showFinalResult() {
  console.log("Final Human Score: " + humanScore);
  console.log("Final Computer Score: " + computerScore);
  let finalMessage;
  if (humanScore > computerScore) {
    finalMessage = "You won the game!";
  } else if (computerScore > humanScore) {
    finalMessage = "Computer won the game!";
  } else {
    finalMessage = "It's a tie!";
  }

  // Display final result
  document.getElementById("result").innerText = finalMessage;
}

// Start the game
playGame();
