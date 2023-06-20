let countdown;

const startButton = document.querySelector(".start");
const start = () => {
  let currentCount = document.querySelector(".input").value;
  countdown = setInterval(() => {
    if (currentCount !== 0) {
      currentCount = currentCount - 1;
      document.querySelector(".input").value = currentCount;
    }
    if (currentCount == 0) {
      clearInterval(countdown);
    }
  }, 1000);
};
startButton.addEventListener("click", start);

const pauseButton = document.querySelector(".pause");
const pause = () => {
  clearInterval(countdown);
};
pauseButton.addEventListener("click", pause);

const resetButton = document.querySelector(".reset");
const reset = () => {
  let currentCount = document.querySelector(".input").value;
  if (currentCount !== 0) {
    currentCount = 0;
    document.querySelector(".input").value = currentCount;
  }
};
resetButton.addEventListener("click", reset);
