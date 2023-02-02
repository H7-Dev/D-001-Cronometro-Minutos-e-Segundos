<!-- 🚧⛔ -->
<!-- ⚠️ -->
<!-- 🚩 -->
<!-- 🏁  -->
<!-- 🏁❗  -->
<!-- ✔️  -->
<!--  ✅    -->
<!--  ▶️    -->
### **🏁❗  01.04 [-g implemento] função para addLap e calcular a média das votlas**

> #### **Descrição**
>
>     marca cada volta ao clicar em "lapButton" e
>     calcular a média das voltas
> ---

>#### ***✍️Exemplo de código HTML***
> ``` HTML
> <h1>Cronometro Minutos e Segundos</h1>
>     <span id="media">Média </span>
>     <div id="timer">
>         <span id="minute">00</span>:<span id="second">00</span>
>     </div>
>     <div id="controls">
>         <button id="play">Play</button>
>         <button id="pause">Pause</button>
>         <button id="reset">Reset</button>
>         <button id="lap">Lap</button>
>     </div>
>     <div id="lapList">
>         <h3>Laps</h3>
>         <ul id="laps">
>           <!-- laps serão adicionados aqui -->
>         </ul>
>     </div>
> ```
>
> ---

>#### ***✍️Exemplo de código JS***
>``` JS
>let minute = 0;
>let second = 0;
>let intervalId = null;
>let lapCount = 0;
>let totalSeconds = 0;
>
>const minuteDisplay = document.querySelector("#minute");
>const secondDisplay = document.querySelector("#second");
>const averageDisplay = document.querySelector("#media");
>const startButton = document.querySelector("#play");
>const pauseButton = document.querySelector("#pause");
>const resetButton = document.querySelector("#reset");
>const lapButton = document.querySelector("#lap");
>const lapList = document.querySelector("#laps");
>
>// Função para iniciar o cronômetro
>function startTimer() {
>  intervalId = setInterval(() => {
>    second++;
>    if (second === 60) {
>      minute++;
>      second = 0;
>    }
>    minuteDisplay.textContent = (minute < 10 ? "0" : "") + minute;
>    secondDisplay.textContent = (second < 10 ? "0" : "") + second;
>  }, 1000);
>  startButton.style.display = "none";
>  pauseButton.style.display = "inline-block";
>}
>
>// Função para pausar o cronômetro
>function pauseTimer() {
>  clearInterval(intervalId);
>  startButton.style.display = "inline-block";
>  pauseButton.style.display = "none";
>}
>
>// Função para resetar o cronômetro
>function resetTimer() {
>  clearInterval(intervalId);
>  minute = 0;
>  second = 0;
>  lapCount = 0;
>  totalSeconds = 0;
>  minuteDisplay.textContent = "00";
>  secondDisplay.textContent = "00";
>  averageDisplay.textContent = "00:00";
>  lapList.innerHTML = "";
>  startButton.style.display = "inline-block";
>  pauseButton.style.display = "none";
>}
>
>// Função para adicionar uma lap
>function addLap() {
>  lapCount++;
>  totalSeconds += minute * 60 + second;
>  const minuteString = (minute < 10 ? "0" : "") + minute;
>  const secondString = (second < 10 ? "0" : "") + second;
>  const lap = `${minuteString}:${secondString}`;
>  const lapItem = document.createElement("li");
>  lapItem.textContent = lap;
>  lapList.appendChild(lapItem);
>
>  const averageSeconds = Math.floor(totalSeconds / lapCount);
>  const averageMinutes = Math.floor(averageSeconds / 60);
>  const remainingSeconds = averageSeconds % 60;
>  const averageMinuteString = (averageMinutes < 10 ? "0" : "") + averageMinutes;
>  const averageSecondString = (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
>  const averageTime = `${averageMinuteString}:${averageSecondString}`;
>  averageDisplay.textContent = averageTime;
>}
>
>let lapTimes = [];
>
>// Função para adicionar uma lap e calcular a média
>function addLapAndCalculateAverage() {
>  const minuteString = (minute < 10 ? "0" : "") + minute;
>  const secondString = (second < 10 ? "0" : "") + second;
>  const lap = `${minuteString}:${secondString}`;
>  const lapItem = document.createElement("li");
>  lapItem.textContent = lap;
>  lapList.appendChild(lapItem);
>
>  lapTimes.push(minute * 60 + second);
>  let totalTime = 0;
>  lapTimes.forEach((time) => {
>    totalTime += time;
>  });
>  const averageTime = Math.round(totalTime / lapTimes.length);
>  const averageMinute = Math.floor(averageTime / 60);
>  const averageSecond = averageTime % 60;
>  const averageMinuteString = (averageMinute < 10 ? "0" : "") + averageMinute;
>  const averageSecondString = (averageSecond < 10 ? "0" : "") + averageSecond;
>  document.querySelector("#media").textContent = 'Média ' +`${averageMinuteString}:${averageSecondString}`;
>}
>
>
>startButton.addEventListener("click", startTimer);
>pauseButton.addEventListener("click", pauseTimer);
>resetButton.addEventListener("click", resetTimer);
>lapButton.addEventListener("click", addLapAndCalculateAverage);
>
>```
>

### **🏁❗  01.03 [-g implemento] lapButton e lapList**

> #### **Descrição**
>
>     implementar um botão para marca cada volta e uma
>     lista não ordenada para com cada volta marcada
> ---
>#### ***✍️ HTML***
> ``` HTML
>     <h1>Cronometro Minutos e Segundos</h1>
>     <div id="timer">
>         <span id="minute">00</span>:<span id="second">00</span>
>     </div>
>     <div id="controls">
>         <button id="play">Play</button>
>         <button id="pause">Pause</button>
>         <button id="reset">Reset</button>
>         <button id="lap">Lap</button>
>     </div>
>     <div id="lapList">
>         <h3>Laps</h3>
>         <ul id="laps">
>           <!-- laps serão adicionados aqui -->
>         </ul>
>     </div>
> ```
>
>#### ***✍️Exemplo de código JS***
``` JS
// Variáveis para armazenar a referência aos elementos HTML
const minuteSpan = document.querySelector("#minute");
const secondSpan = document.querySelector("#second");
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");
const lapButton = document.querySelector("#lap");
const lapList = document.querySelector("#laps");

// Variáveis para armazenar o estado do cronômetro
let intervalId = null;
let minute = 0;
let second = 0;

// Função para atualizar o display do cronômetro
function updateTimer() {
  secondSpan.textContent = (second < 10 ? "0" : "") + second;
  minuteSpan.textContent = (minute < 10 ? "0" : "") + minute;
}

// Função para aumentar o cronômetro em um segundo
function tick() {
  second++;
  if (second >= 60) {
    minute++;
    second = 0;
  }
  updateTimer();
}

// Função para iniciar o cronômetro
function startTimer() {
  intervalId = setInterval(tick, 1000);
  playButton.setAttribute("disabled", true);
  pauseButton.removeAttribute("disabled");
}

// Função para pausar o cronômetro
function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
  playButton.removeAttribute("disabled");
  pauseButton.setAttribute("disabled", true);
}

// Função para reiniciar o cronômetro
function resetTimer() {
  clearInterval(intervalId);
  intervalId = null;
  minute = 0;
  second = 0;
  updateTimer();
  playButton.removeAttribute("disabled");
  pauseButton.setAttribute("disabled", true);
  lapList.innerHTML = "";
}

// Função para adicionar uma lap
function addLap() {
  const lap = `${minute}:${second < 10 ? "0" : ""}${second}`;
  const lapItem = document.createElement("li");
  lapItem.textContent = lap;
  lapList.appendChild(lapItem);
}

// Adicione os ouvintes de eventos aos botões
playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", addLap);

// Inicialize o cronômetro
updateTimer();
pauseButton.setAttribute("disabled", true);


```
>


### **🏁❗  01.02 [-g implemento] botão de reset**

> #### **Descrição**
>
>     implementar um botão de reset ao código
> ---

>#### ***✍️Exemplo de código HTML***
> ``` HTML
> <div id="timer">
>   <p id="minute">00</p>
>   <p>:</p>
>   <p id="second">00</p>
> </div>
> <div id="controls">
>   <button id="play">Play</button>
>   <button id="pause">Pause</button>
>   <button id="reset">Reset</button>
> </div>
>
> ```
>
> ---
>#### ***✍️Exemplo de código JS***
> ``` JS
> const minute = document.querySelector('#minute'); // Seleciona o elemento HTML com id "minute"
> const second = document.querySelector('#second'); // Seleciona o elemento HTML com id "second"
> const playButton = document.querySelector('#play'); // Seleciona o elemento HTML com id "play"
> const pauseButton = document.querySelector('#pause'); // Seleciona o elemento HTML com id "pause"
> const resetButton = document.querySelector('#reset'); // Seleciona o elemento HTML com id "reset"
> let count = 0; // Inicializa a contagem com zero
> let intervalId; // Inicializa a variável que armazenará o ID do intervalo
>
> // Função para iniciar a contagem
> function start() {
>   intervalId = setInterval(() => { // Define um intervalo de tempo com a função setInterval
>     count++; // Incrementa o contador a cada 1 segundo (1000 milissegundos)
>     minute.innerHTML = pad(Math.floor(count / 60)); // Atualiza o elemento HTML com a quantidade de minutos
>     second.innerHTML = pad(count % 60); // Atualiza o elemento HTML com a quantidade de segundos
>   }, 1000);
> }
>
> // Função para pausar a contagem
> function stop() {
>   clearInterval(intervalId); // Interrompe o intervalo de tempo com a função clearInterval
> }
>
> // Função para resetar a contagem
> function reset() {
>   stop(); // Pausa a contagem
>   count = 0; // Reset o contador para zero
>   minute.innerHTML = '00'; // Atualiza o elemento HTML com zero minutos
>   second.innerHTML = '00'; // Atualiza o elemento HTML com zero segundos
> }
>
> playButton.addEventListener('click', start); // Adiciona um manipulador de eventos ao botão de play para iniciar a contagem
> pauseButton.addEventListener('click', stop); // Adiciona um manipulador de eventos ao botão de pause para pausar a contagem
> resetButton.addEventListener('click', reset); // Adiciona um manipulador de eventos ao botão de reset para resetar a contagem
>
> // Função que adiciona um zero à esquerda se o valor for menor que 10
> function pad(value) {
>   return String(value).padStart(2, '0');
> }
>
> ```
>


### **🏁❗  01.01 implementar ao código botões de play e pause**

> #### **Descrição**
>
>     Este código adiciona dois botões de play e pause ao seu cronômetro.
>     Quando você clica no botão "play", a contagem é iniciada e,
>     quando clica no botão "pause", a contagem é pausada.
> ---
>#### ***✍️Exemplo de código HTML***
>``` HTML
><div id="timer">
>  <p id="minute">00</p>
>  <p>:</p>
>  <p id="second">00</p>
></div>
><div id="controls">
>  <button id="play">Play</button>
>  <button id="pause">Pause</button>
></div>
>
>```
>
> ---
>#### ***✍️Exemplo de código JS***
>``` JS
>const minute = document.querySelector('#minute');
>const second = document.querySelector('#second');
>const playButton = document.querySelector('#play');
>const pauseButton = document.querySelector('#pause');
>let count = 0;
>let intervalId;
>
>// Função para iniciar a contagem
>function start() {
>  intervalId = setInterval(() => {
>    count++;
>    minute.innerHTML = pad(Math.floor(count / 60));
>    second.innerHTML = pad(count % 60);
>  }, 1000);
>}
>
>// Função para pausar a contagem
>function stop() {
>  clearInterval(intervalId);
>}
>
>// Adiciona um manipulador de eventos ao botão de play para iniciar a contagem
>playButton.addEventListener('click', start);
>
>// Adiciona um manipulador de eventos ao botão de pause para pausar a contagem
>pauseButton.addEventListener('click', stop);
>
>function pad(value) {
>  return String(value).padStart(2, '0');
>}
>
>```
>


> ### **❓ cronômetro de minutos e segundos:  HTML, SCSS e JavaScript.**
> #### **Descrição**
>
>     Este código irá exibir um cronômetro de minutos e segundos que começa a
>     contar a partir de 00:00 e atualiza a cada segundo.
>
> ---
> #### ***✍️Exemplo de código HTML***
>
> ``` HTML
> <!-- Cria um container com id "timer" para exibir o cronômetro -->
> <div id="timer">
>   <!-- Exibe os minutos -->
>   <p id="minute">00</p>
>   <!-- Exibe o separador de minutos e segundos -->
>   <p>:</p>
>   <!-- Exibe os segundos -->
>   <p id="second">00</p>
> </div>
>
>
> ```
> ---
> #### ***✍️Exemplo de código SCSS***
> ``` SCSS
> #timer {
>   /* Define o container como um bloco de exibição flexível */
>   display: flex;
>   /* Centraliza os elementos filhos horizontalmente */
>   justify-content: center;
>   /* Centraliza os elementos filhos verticalmente */
>   align-items: center;
>   /* Define o tamanho da fonte */
>   font-size: 36px;
> }
>
> ```
> ---
> #### ***✍️Exemplo de código JS***
> ``` JS
> // Obtém referências para os elementos HTML que exibem minutos e segundos
> const minute = document.querySelector('#minute');
> const second = document.querySelector('#second');
>
> // Inicializa a contagem em 0
> let count = 0;
>
> // Atualiza o cronômetro a cada segundo (1000 milisegundos)
> setInterval(() => {
>   count++;
>   // Atualiza o valor dos minutos
>   minute.innerHTML = pad(Math.floor(count / 60));
>   // Atualiza o valor dos segundos
>   second.innerHTML = pad(count % 60);
> }, 1000);
>
> // Função para adicionar zeros à esquerda do valor se necessário
> function pad(value) {
>   return String(value).padStart(2, '0');
> }
> ```
