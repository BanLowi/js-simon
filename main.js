// Variabili elementi contenitori
const numbers = document.getElementById("numberContainer");
const formEl = document.querySelector("form");

// Variabili elementi numeri
const numberOneEl = document.getElementById("numberOne");
const numberTwoEl = document.getElementById("numberTwo");
const numberThreeEl = document.getElementById("numberThree");
const numberFourEl = document.getElementById("numberFour");
const numberFiveEl = document.getElementById("numberFive");

// Variabili elementi input
const buttonEl = document.querySelector("button.d-none");

// Variabile contatore
const counter = 0;

// Inserisco un numero random da 1 a 100 in ogni elemento
numberOneEl.innerHTML = getRndNumber(1, 100);
numberTwoEl.innerHTML = getRndNumber(1, 100);
numberThreeEl.innerHTML = getRndNumber(1, 100);
numberFourEl.innerHTML = getRndNumber(1, 100);
numberFiveEl.innerHTML = getRndNumber(1, 100);

// Generatore numeri random
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Alla fine del timer switcho i numeri random con degli input
setTimeout(() => {

    numberOneEl.innerHTML = `<input id="userNumberOne" type="number" placeholder="Che numero era?"></input>`
    numberTwoEl.innerHTML = `<input type="number" placeholder="Che numero era?"></input>`
    numberThreeEl.innerHTML = `<input type="number" placeholder="Che numero era?"></input>`
    numberFourEl.innerHTML = `<input type="number" placeholder="Che numero era?"></input>`
    numberFiveEl.innerHTML = `<input type="number" placeholder="Che numero era?"></input>`

    
    buttonEl.classList.remove("d-none")

}, 3000)

formEl.addEventListener("submit", (event) => {
    event.preventDefault()

    const userOne = document.getElementById("userNumberOne");
    const oneValue = userOne.value;
    console.log(oneValue);
    
    
    
})