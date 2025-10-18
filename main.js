// Funzione per generare un numero random (inclusi min e max)
function getRandomdNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Funzione per riempire un array di numeri random
function fillArrayRandomNum(array, quantity) {
    
    for (let i = 0; i < quantity; i++) {
        array.push(getRandomdNum(1, 10));
    }
}
// Array e ciclo per generare 5 numeri random
let randomNumbers = [];
fillArrayRandomNum(randomNumbers, 5);


// Stampo i numeri in pagina
const divEl = document.createElement("div");
divEl.innerHTML = `
 ${randomNumbers}
`
document.body.append(divEl);