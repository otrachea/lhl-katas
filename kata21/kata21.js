let prompt = require("prompt-sync")({
  sigint: true
});

const RANNUM = Math.floor(Math.random() * 100);
let guess = null;
let attempts = 0;
let guessed = [];

while (guess !== RANNUM) {
  guess = parseInt(prompt("Guess a number: "));
  if (isNaN(guess)) {
    console.log("Not a number! Try again!");
    continue;
  }
  
  if (guessed.includes(guess)) {
    console.log("Already Guessed!");
    continue;
  }

  if (guess < RANNUM) {
    console.log("Too Low!");
  } else if (guess > RANNUM) {
    console.log("Too High!");
  }
  attempts++;
  guessed.push(guess);
}

console.log(`You got it! You took ${attempts} attempts!`);