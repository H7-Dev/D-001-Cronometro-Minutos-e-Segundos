const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
let count = 0;

setInterval(() => {
  count++;
  minute.innerHTML = pad(Math.floor(count / 60));
  second.innerHTML = pad(count % 60);
}, 1000);

function pad(value) {
  return String(value).padStart(2, '0');
}
