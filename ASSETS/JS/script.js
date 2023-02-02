let minute = 0;
let second = 0;
let intervalId = null;
let lapCount = 0;
let totalSeconds = 0;

const minuteDisplay = document.querySelector("#minute");
const secondDisplay = document.querySelector("#second");
const averageDisplay = document.querySelector("#media");
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
  lapCount = 0;
  totalSeconds = 0;
  minuteDisplay.textContent = "00";
  secondDisplay.textContent = "00";
  averageDisplay.textContent = "00:00";
  lapList.innerHTML = "";
  startButton.style.display = "inline-block";
  pauseButton.style.display = "none";
}

// Função para adicionar uma lap
function addLap() {
  lapCount++;
  totalSeconds += minute * 60 + second;
  const minuteString = (minute < 10 ? "0" : "") + minute;
  const secondString = (second < 10 ? "0" : "") + second;
  const lap = `${minuteString}:${secondString}`;
  const lapItem = document.createElement("li");
  lapItem.textContent = lap;
  lapList.appendChild(lapItem);

  const averageSeconds = Math.floor(totalSeconds / lapCount);
  const averageMinutes = Math.floor(averageSeconds / 60);
  const remainingSeconds = averageSeconds % 60;
  const averageMinuteString = (averageMinutes < 10 ? "0" : "") + averageMinutes;
  const averageSecondString = (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
  const averageTime = `${averageMinuteString}:${averageSecondString}`;
  averageDisplay.textContent = averageTime;
}

let lapTimes = [];

// Função para adicionar uma lap e calcular a média
function addLapAndCalculateAverage() {
  const minuteString = (minute < 10 ? "0" : "") + minute;
  const secondString = (second < 10 ? "0" : "") + second;
  const lap = `${minuteString}:${secondString}`;
  const lapItem = document.createElement("li");
  lapItem.textContent = lap;
  lapList.appendChild(lapItem);

  lapTimes.push(minute * 60 + second);
  let totalTime = 0;
  lapTimes.forEach((time) => {
    totalTime += time;
  });
  const averageTime = Math.round(totalTime / lapTimes.length);
  const averageMinute = Math.floor(averageTime / 60);
  const averageSecond = averageTime % 60;
  const averageMinuteString = (averageMinute < 10 ? "0" : "") + averageMinute;
  const averageSecondString = (averageSecond < 10 ? "0" : "") + averageSecond;
  document.querySelector("#media").textContent = 'Média ' +`${averageMinuteString}:${averageSecondString}`;
}


startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", addLapAndCalculateAverage);
