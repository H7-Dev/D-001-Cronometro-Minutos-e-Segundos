const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
let count = 0;
let intervalId;

// Função para iniciar a contagem
function start() {
  intervalId = setInterval(() => {
    count++;
    minute.innerHTML = pad(Math.floor(count / 60));
    second.innerHTML = pad(count % 60);
  }, 1000);
}

// Função para pausar a contagem
function stop() {
  clearInterval(intervalId);
}

// Adiciona um manipulador de eventos ao botão de play para iniciar a contagem
playButton.addEventListener('click', start);

// Adiciona um manipulador de eventos ao botão de pause para pausar a contagem
pauseButton.addEventListener('click', stop);

function pad(value) {
  return String(value).padStart(2, '0');
}
