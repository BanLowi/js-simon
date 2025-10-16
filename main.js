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
let counter = 0;
console.log(counter);


// Array numeri random
let randomNumbers = [];

// Array numeri sbagliati
let wrongNumbers = [];

// Array numeri utente
let userNumbers = [];

// Genero numeri random
randomNumbers = [
    getRndNumber(1, 100),
    getRndNumber(1, 100),
    getRndNumber(1, 100),
    getRndNumber(1, 100),
    getRndNumber(1, 100)
]


// Inserisco un numero random da 1 a 100 in ogni elemento
numberOneEl.innerHTML = randomNumbers[0];
numberTwoEl.innerHTML = randomNumbers[1];
numberThreeEl.innerHTML = randomNumbers[2];
numberFourEl.innerHTML = randomNumbers[3];
numberFiveEl.innerHTML = randomNumbers[4];


// Generatore numeri random
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Alla fine del timer switcho i numeri random con degli input
setTimeout(() => {

    numberOneEl.innerHTML = `<input id="userNumberOne" type="number" placeholder="Che numero era?"></input>`
    numberTwoEl.innerHTML = `<input id="userNumberTwo" type="number" placeholder="Che numero era?"></input>`
    numberThreeEl.innerHTML = `<input id="userNumberThree" type="number" placeholder="Che numero era?"></input>`
    numberFourEl.innerHTML = `<input id="userNumberFour" type="number" placeholder="Che numero era?"></input>`
    numberFiveEl.innerHTML = `<input id="userNumberFive" type="number" placeholder="Che numero era?"></input>`


    buttonEl.classList.remove("d-none")

}, 10000)

// 
formEl.addEventListener("submit", (event) => {
    event.preventDefault()

    userNumbers = []

    userNumbers.push(
        Number(document.getElementById("userNumberOne").value),
        Number(document.getElementById("userNumberTwo").value),
        Number(document.getElementById("userNumberThree").value),
        Number(document.getElementById("userNumberFour").value),
        Number(document.getElementById("userNumberFive").value)
    );

    numberValidator(userNumbers)

})


function numberValidator(value) {

    for (let i = 0; i < randomNumbers.length; i++) {
        const singleNum = randomNumbers[i];

        if (value == singleNum) {
            counter++
        } else {
            wrongNumbers.push(randomNumbers[i])
        }
    }

    const validatorOutput = document.createElement("div");
}

