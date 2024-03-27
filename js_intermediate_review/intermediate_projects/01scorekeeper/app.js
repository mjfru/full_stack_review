// Player 1 Variables
const p1Button = document.querySelector("#p1Button");
const p1Display = document.querySelector("#p1Display");
let p1Score = 0;

// Player 2 Variables
const p2Button = document.querySelector("#p2Button");
const p2Display = document.querySelector("#p2Display");
let p2Score = 0;

// General Game Variables:
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
let winningScore = 3;
let isGameOver = false;

// Player 1 Logic:
p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

// Player 2 Logic:
p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  // Comes back naturally as a string, needed to change it.
  reset();
});

// Reset
resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
