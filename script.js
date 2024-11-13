let randomNumber;
let remainingGuesses;
const maxGuesses = 10;
const minGuesses= 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    remainingGuesses = maxGuesses;
    document.getElementById("feedback").textContent = "";
    document.getElementById("remainingGuesses").textContent = `You have ${remainingGuesses} guesses remaining.`;
    document.getElementById("guessInput").value = "";
    document.getElementById("restartGame").style.display = "none";
}

function submitGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = Number(guessInput.value);
    const feedback = document.getElementById("feedback");
    const remainingGuessesDisplay = document.getElementById("remainingGuesses");

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        feedback.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    remainingGuesses--;

    if (guess === randomNumber) {
        feedback.textContent = "Congratulations! You guessed it!";
        document.getElementById("restartGame").style.display = "inline";
    } else if (remainingGuesses === 0) {
        feedback.textContent = `Game Over! The number was ${randomNumber}.`;
        document.getElementById("restartGame").style.display = "inline";
        remainingGuessesDisplay.textContent = `You have ${remainingGuesses=minGuesses} guesses remaining.`;
    

    } else {
        feedback.textContent = guess < randomNumber ? "Too low!" : "Too high!";
        remainingGuessesDisplay.textContent = `You have ${remainingGuesses} guesses remaining.`;
    }

    guessInput.value = "";
}

document.getElementById("submitGuess").addEventListener("click", submitGuess);
document.getElementById("restartGame").addEventListener("click", startGame);

// Start the game when the page loads
window.onload = startGame;