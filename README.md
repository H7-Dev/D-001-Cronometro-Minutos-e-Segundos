<!-- 🚧⛔ -->
<!-- ⚠️ -->
<!-- 🚩 -->
<!-- 🏁  -->
<!-- 🏁❗  -->
<!-- ✔️  -->
<!--  ✅    -->
<!--  ▶️    -->



> ### **❓ Questão: código HTML, SCSS e JavaScript para um cronômetro de minutos e segundos.**
> #### **Descrição**
>
>     Este código irá exibir um cronômetro de minutos e segundos que começa a contar a partir de 00:00 e atualiza a cada segundo.
>
> #### ***✍️Exemplo de código***
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
>
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
>
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
