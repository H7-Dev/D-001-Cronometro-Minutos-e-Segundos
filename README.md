<!-- 🚧⛔ -->
<!-- ⚠️ -->
<!-- 🚩 -->
<!-- 🏁  -->
<!-- 🏁❗  -->
<!-- ✔️  -->
<!--  ✅    -->
<!--  ▶️    -->

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
>     Quando você clica no botão "play", a contagem é iniciada e, quando clica no botão "pause", a contagem é pausada.
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
>     Este código irá exibir um cronômetro de minutos e segundos que começa a contar a partir de 00:00 e atualiza a cada segundo.
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
