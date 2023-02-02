<!-- 🚧⛔ -->
<!-- ⚠️ -->
<!-- 🚩 -->
<!-- 🏁  -->
<!-- 🏁❗  -->
<!-- ✔️  -->
<!--  ✅    -->
<!--  ▶️    -->

### **🏁❗  01.01 implementar ao código botões de play e pause**

> #### **Descrição**
>
>     Este código adiciona dois botões de play e pause ao seu cronômetro. Quando você clica no botão "play", a contagem é iniciada e, quando clica no botão "pause", a contagem é pausada.
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
