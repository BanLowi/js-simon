// Funzione per generare un numero random (inclusi min e max)
function getRandomdNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Array e ciclo per generare 5 numeri random
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(getRandomdNum(1, 10));
}

// Stampo i numeri in pagina
const divEl = document.createElement("div");
divEl.innerHTML = `
 ${randomNumbers}
`
document.body.append(divEl);