'use strict';

const msg = document.querySelector('.message');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const Score = document.querySelector(".score");

// // generate random number between 1 and 20
// let computer = Math.floor(Math.random() * 20) + 1;
// console.log(computer);

// const check = document.querySelector('.check');
// check.addEventListener('click', checker);

// const again = document.querySelector('.again');
// again.addEventListener('click', Again);

// function checker(e) {
//     e.preventDefault();
//     if (guess.value == computer) {
//         body.style.backgroundColor = "#60b347";
//         number.textContent = `${computer}`;
//         msg.textContent = "correct Number!!!";
//     }
//     else {
//         msg.textContent = "Try Again";
//     }
// }

// function Again(e) {
//     e.preventDefault();
//     msg.textContent = "start guessing";
//     body.style.backgroundColor = "#222";
//     guess.value = "";
//     number.textContent = "?";
//     computer = Math.floor(Math.random() * 20) + 1;
//     console.log(computer);

// }


let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  msg.textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessValue = Number(guess.value);
  console.log(guess, typeof guessValue);

  // When there is no input
  if (!guessValue) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guessValue === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage("🎉 Correct Number!");
    number.textContent = secretNumber;

    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guessValue > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      Score.textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage("💥 You lost the game!");
      Score.textContent = 0;
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  number.textContent = "?";
  guess.value = "";

  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
});
