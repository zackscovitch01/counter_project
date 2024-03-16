const resetBtn = document.getElementById("reset-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");
const countLabel = document.getElementById("current-number");
let currentNumber = 0;

resetBtn.onclick = function () {
  currentNumber = 0;
  countLabel.textContent = currentNumber;
};

decreaseBtn.onclick = function () {
  currentNumber--;
  countLabel.textContent = currentNumber;
};

increaseBtn.onclick = function () {
  currentNumber++;
  countLabel.textContent = currentNumber;
};
