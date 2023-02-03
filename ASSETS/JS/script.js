
let minute = 0;
let second = 0;
let intervalId = null;
let lapCount = 0;
let totalSeconds = 0;
let maxMinutes = 1;

const minuteDisplay = document.querySelector("#minute");
const secondDisplay = document.querySelector("#second");
const averageDisplay = document.querySelector("#media");
const startButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");
const lapButton = document.querySelector("#lap");
const lapList = document.querySelector("#laps");

function startTimer() {
  intervalId = setInterval(() => {
    second++;
    if (second === 60) {
      minute++;
      second = 0;
    }
    if (minute === maxMinutes) {
      clearInterval(intervalId);
      alert("Tempo esgotado!");
      return;
    }
    minuteDisplay.textContent = (minute < 10 ? "0" : "") + minute;
    secondDisplay.textContent = (second < 10 ? "0" : "") + second;
  }, 1000);
  startButton.style.display = "none";
  pauseButton.style.display = "inline-block";
}

function pauseTimer() {
  clearInterval(intervalId);
  startButton.style.display = "inline-block";
  pauseButton.style.display = "none";
}

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

let lapTimes = [];

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
  })
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
