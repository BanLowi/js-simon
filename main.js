// Variabili elementi contenitori
const numbers = document.getElementById("numberContainer");

// Variabili elementi numeri
const numberOneEl = document.getElementById("numberOne");
const numberTwoEl = document.getElementById("numberTwo");
const numberThreeEl = document.getElementById("numberThree");
const numberFourEl = document.getElementById("numberFour");
const numberFiveEl = document.getElementById("numberFive");

// Inserisco un numero random da 1 a 100 in ogni elemento
numberOneEl.innerHTML = getRndNumber(1, 100);
numberTwoEl.innerHTML = getRndNumber(1, 100);
numberThreeEl.innerHTML = getRndNumber(1, 100);
numberFourEl.innerHTML = getRndNumber(1, 100);
numberFiveEl.innerHTML = getRndNumber(1, 100);

// Generatore numeri random
function getRndNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

setTimeout( () => {
    numbers.className = "d-none"
}, 30000)
