const timerDisplay = document.getElementById("timer");
const timeInput = document.getElementById("timeInput");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let countdown;
let timeLeft = 0;
let isRunning = false;

function updateDisplay() {
  timerDisplay.textContent = timeLeft > 0 ? timeLeft : "End";
  timerDisplay.classList.add("shrink");
  setTimeout(() => timerDisplay.classList.remove("shrink"), 150);
}

function startTimer() {
  if (isRunning) return;
  if (!timeLeft) {
    const userInput = parseInt(timeInput.value);
    if (isNaN(userInput) || userInput <= 0) {
      alert("Please enter a valid number");
      return;
    }
    timeLeft = userInput;
  }
  isRunning = true;
  countdown = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(countdown);
      isRunning = false;
      // timerDisplay.textContent = "End";
      // timerDisplay.style.color = "#00FF7F";
    }
    if(timeLeft === 0){
      timerDisplay.textContent = "🎉 End!";
      timerDisplay.style.color = "#00FF7F";
      timeInput.value = "";
      setTimeout(()=> {
        timerDisplay.textContent = "Ready";
        timerDisplay.style.color = "#FFF";
      }, 1500);
    }
  }, 1000);
}

function pauseTimer(){
  clearInterval(countdown);
  isRunning = false;
}

function resetTimer(){
  clearInterval(countdown);
  isRunning = false;
  timeLeft = 0;
  timerDisplay.textContent = "Ready";
  timerDisplay.style.color = "#fff";
  timeInput.value = "";
}

startBtn.addEventListener("click" , startTimer);
pauseBtn.addEventListener("click" , pauseTimer);
resetBtn.addEventListener("click" , resetTimer);