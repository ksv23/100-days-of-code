let maxNum = parseInt(prompt("Enter max num"));
while (!maxNum) {
    maxNum = parseInt(prompt("Enter valid num!"));
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;

let guess = parseInt(prompt("Enter first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too High, Guess again!");
    } else {
        guess = prompt("Too Low, Guess again!");
    }
}

if (guess === 'q') {
    console.log("Quitter!")
} else {
    console.log(`YAY YOU GOT IT! It took you ${attempts} guesses`);
}