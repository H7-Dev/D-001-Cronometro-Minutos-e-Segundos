let minute = 0;
let second = 0;
let intervalId = null;

const minuteDisplay = document.querySelector("#minute");
const secondDisplay = document.querySelector("#second");
const startButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");
const lapButton = document.querySelector("#lap");
const lapList = document.querySelector("#laps");

// Função para iniciar o cronômetro
function startTimer() {
  intervalId = setInterval(() => {
    second++;
    if (second === 60) {
      minute++;
      second = 0;
    }
    minuteDisplay.textContent = (minute < 10 ? "0" : "") + minute;
    secondDisplay.textContent = (second < 10 ? "0" : "") + second;
  }, 1000);
  startButton.style.display = "none";
  pauseButton.style.display = "inline-block";
}

// Função para pausar o cronômetro
function pauseTimer() {
  clearInterval(intervalId);
  startButton.style.display = "inline-block";
  pauseButton.style.display = "none";
}

// Função para resetar o cronômetro
function resetTimer() {
  clearInterval(intervalId);
  minute = 0;
  second = 0;
  minuteDisplay.textContent = "00";
  secondDisplay.textContent = "00";
  lapList.innerHTML = "";
  startButton.style.display = "inline-block";
  pauseButton.style.display = "none";
}

// Função para adicionar uma lap
function addLap() {
  const minuteString = (minute < 10 ? "0" : "") + minute;
  const secondString = (second < 10 ? "0" : "") + second;
  const lap = `${minuteString}:${secondString}`;
  const lapItem = document.createElement("li");
  lapItem.textContent = lap;
  lapList.appendChild(lapItem);
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", addLap);
