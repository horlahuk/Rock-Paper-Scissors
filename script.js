// LOGIC FOR COMPUTER CHOICE

function getComputerChoice() {
  let decision;
  let num = Math.floor(Math.random() * 10);
  if (num <= 3) {
    decision = "Rock";
  } else if (num == 4 || num <= 7) {
    decision = "Paper";
  } else {
    decision = "Scissors";
  }
  // console.log(num);
  // console.log(decision);
}

// getComputerChoice();

// LOGIC FOR HUMAN CHOICE

function getHumanChoice() {
  let humanDecision = prompt("What are you playing as?").toLowerCase();
  console.log(humanDecision);
}
// getHumanChoice();

let humanScore = 0;
let computerScore = 0;
