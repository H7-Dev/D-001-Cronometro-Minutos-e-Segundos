<!-- 🚧⛔ -->
<!-- ⚠️ -->
<!-- 🚩 -->
<!-- 🏁  -->
<!-- 🏁❗  -->
<!-- ✔️  -->
<!--  ✅    -->
<!--  ▶️    -->

# Descrição Geral


    Este código é um cronômetro que permite que você inicie, pause e reinicie um timer e também registre as voltas (laps).

    O código define as seguintes variáveis:

    ✔️ minute: representa o número de minutos contados pelo cronômetro.
    ✔️ second: representa o número de segundos contados pelo cronômetro.
    ✔️ intervalId: é o identificador retornado por setInterval e é usado para pausar e reiniciar o cronômetro.
    ✔️ lapCount: representa o número de voltas do cronômetro.
    ✔️ totalSeconds: representa o total de segundos da média.
    ✔️ maxMinutes: representa o tempo máximo de duração do cronômetro, em minutos.
    ✔️ minuteDisplay: representa o elemento HTML que mostra o número de minutos.
    ✔️ secondDisplay: representa o elemento HTML que mostra o número de segundos.
    ✔️ averageDisplay: representa o elemento HTML que mostra a média de tempo.
    ✔️ startButton: representa o elemento HTML do botão de início.
    ✔️ pauseButton: representa o elemento HTML do botão de pausa.
    ✔️ resetButton: representa o elemento HTML do botão de reinício.
    ✔️ lapButton: representa o elemento HTML do botão de volta.
    ✔️ lapList: representa o elemento HTML que contém a lista de voltas.
    ✔️ lapTimes: é um array que armazena os tempos das voltas.

    O código define as seguintes métodos:

    ✔️ startTimer: Inicia o cronômetro, definindo um intervalo que aumenta o segundo a cada 1000 milissegundos (1 segundo). Quando o segundo chega a 60, o minuto é aumentado em 1 e o segundo é redefinido para 0. Quando o minuto chega ao valor máximo de minutos (1 minuto, neste caso), o intervalo é interrompido e uma mensagem de alerta é exibida. O botão "play" é ocultado e o botão "pause" é exibido.
    ✔️ pauseTimer: Pausa o cronômetro interrompendo o intervalo. O botão "pause" é ocultado e o botão "play" é exibido.
    ✔️ resetTimer: Redefine o cronômetro para seus valores iniciais (0 minutos e 0 segundos), redefine a lista de tempos de volta, a média de tempo e oculta o botão "pause".
    ✔️ addLapAndCalculateAverage: Adiciona o tempo atual ao final da lista de tempos de volta e calcula a média de tempo total, exibindo-a na página.

> ---
>#### ***✍️ código principal JS(v_alfa-01.05)***
>``` JS
>
>let minute = 0;
>let second = 0;
>let intervalId = null;
>let lapCount = 0;
>let totalSeconds = 0;
>let maxMinutes = 1;
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
>function startTimer() {
>  intervalId = setInterval(() => {
>    second++;
>    if (second === 60) {
>      minute++;
>      second = 0;
>    }
>    if (minute === maxMinutes) {
>      clearInterval(intervalId);
>      alert("Tempo esgotado!");
>      return;
>    }
>    minuteDisplay.textContent = (minute < 10 ? "0" : "") + minute;
>    secondDisplay.textContent = (second < 10 ? "0" : "") + second;
>  }, 1000);
>  startButton.style.display = "none";
>  pauseButton.style.display = "inline-block";
>}
>
>function pauseTimer() {
>  clearInterval(intervalId);
>  startButton.style.display = "inline-block";
>  pauseButton.style.display = "none";
>}
>
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
>let lapTimes = [];
>
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
>  })
>  const averageTime = Math.round(totalTime / lapTimes.length);
>  const averageMinute = Math.floor(averageTime / 60);
>  const averageSecond = averageTime % 60;
>  const averageMinuteString = (averageMinute < 10 ? "0" : "") + averageMinute;
>  const averageSecondString = (averageSecond < 10 ? "0" : "") + averageSecond;
>  document.querySelector("#media").textContent = 'Média ' +`${averageMinuteString}:$>{averageSecondString}`;
>}
>
>startButton.addEventListener("click", startTimer);
>pauseButton.addEventListener("click", pauseTimer);
>resetButton.addEventListener("click", resetTimer);
>lapButton.addEventListener("click", addLapAndCalculateAverage);
>
>```
>
> ---
>#### ***✍️ código principal HTML(v_alfa-01.05)***
> ``` HTML
>
> <!DOCTYPE html>
> <html lang="pt-br">
> <head>
>     <meta charset="UTF-8">
>     <meta http-equiv="X-UA-Compatible" content="IE=edge">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Document</title>
>     <link rel="stylesheet" href="ASSETS/CSS/leiaute.css">
> </head>
> <body>
>     <h1>Cronometro Minutos e Segundos</h1>
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
> </body>
> <script src="LIBS/0-JQUERY/jquery-3.5.1.min.js"></script>
> <script src="ASSETS/JS/script.js"></script>
> </html>
>```

>#### ***✍️ código principal SCSS(v_alfa-01.05)***
> ``` SCSS
> #timer {
>     font-size: 36px;
>     font-weight: bold;
>     text-align: center;
>     margin-bottom: 20px;
>   }
>
>   #controls {
>     display: flex;
>     justify-content: center;
>     button {
>       padding: 10px 20px;
>       margin-right: 10px;
>       border-radius: 5px;
>       font-size: 16px;
>       font-weight: bold;
>       cursor: pointer;
>       &:hover {
>         background-color: lightgray;
>       }
>     }
>   }
>
>   #lapList {
>     margin-top: 20px;
>     h3 {
>       font-size: 18px;
>       font-weight: bold;
>       margin-bottom: 10px;
>     }
>     ul {
>       list-style: none;
>       padding: 0;
>       li {
>         font-size: 16px;
>         padding: 10px;
>         border-top: 1px solid #ccc;
>         &:first-child {
>           border-top: none;
>         }
>       }
>     }
>   }
>
> ```
>
