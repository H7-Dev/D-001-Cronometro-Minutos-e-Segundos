const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');
let count = 0;
let intervalId;

function start() {
  intervalId = setInterval(() => {
    count++;
    minute.innerHTML = pad(Math.floor(count / 60));
    second.innerHTML = pad(count % 60);
  }, 1000);
}

function stop() {
  clearInterval(intervalId);
}

function reset() {
  stop();
  count = 0;
  minute.innerHTML = '00';
  second.innerHTML = '00';
}

playButton.addEventListener('click', start);
pauseButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

function pad(value) {
  return String(value).padStart(2, '0');
}
