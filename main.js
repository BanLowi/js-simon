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


// Variabili contatore
let counter = 30;
const timerEl = document.getElementById("timer")
let clock = setInterval(displayCounter, 1000)


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
// GAME CHEAT IN CONSOLE
console.log("CHEAT " + randomNumbers);

// Funzione per generare l'interno delle card con numeri random
function switchRandomNum(value1, value2, value3, value4, value5) {

value1.innerHTML = `

<div class="card-header bg-transparent border-0"><i class="bi bi-question-lg"></i></div>
<div class="card-body">${randomNumbers[0]}</div>

`;
value2.innerHTML = `

<div class="card-header bg-transparent border-0"><i class="bi bi-question-lg"></i></div>
<div class="card-body">${randomNumbers[1]}</div>

`;
value3.innerHTML = `

<div class="card-header bg-transparent border-0"><i class="bi bi-question-lg"></i></div>
<div class="card-body">${randomNumbers[2]}</div>

`;
value4.innerHTML = `

<div class="card-header bg-transparent border-0"><i class="bi bi-question-lg"></i></div>
<div class="card-body">${randomNumbers[3]}</div>

`;
value5.innerHTML = `

<div class="card-header bg-transparent border-0"><i class="bi bi-question-lg"></i></div>
<div class="card-body">${randomNumbers[4]}</div>

`;

}
// Inserisco un numero random da 1 a 100 in ogni elemento
switchRandomNum(numberOneEl, numberTwoEl, numberThreeEl, numberFourEl, numberFiveEl)


// Generatore numeri random
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Alla fine del timer switcho i numeri random con degli input
setTimeout(() => {

    numberOneEl.innerHTML = `
    <div class="card-header bg-transparent border-0"><i class="bi bi-question-lg"></i></div>
    <div class="card-body"><input id="userNumberOne" type="number" placeholder="Numero?" class="form-control"></input></div>
    `
    numberTwoEl.innerHTML = `
    <div class="card-header bg-transparent border-0"><i class="bi bi-question-lg"></i></div>
    <div class="card-body"><input id="userNumberTwo" type="number" placeholder="Numero?" class="form-control"></input></div>
    `
    numberThreeEl.innerHTML = `
    <div class="card-header bg-transparent border-0"><i class="bi bi-question-lg"></i></div>
    <div class="card-body"><input id="userNumberThree" type="number" placeholder="Numero?" class="form-control"></input></div>
    `
    numberFourEl.innerHTML = `
    <div class="card-header bg-transparent border-0"><i class="bi bi-question-lg"></i></div>
    <div class="card-body"><input id="userNumberFour" type="number" placeholder="Numero?" class="form-control"></input></div>
    `
    numberFiveEl.innerHTML = `
    <div class="card-header bg-transparent border-0"><i class="bi bi-question-lg"></i></div>
    <div class="card-body"><input id="userNumberFive" type="number" placeholder="Numero?" class="form-control"></input></div>
    `


    buttonEl.classList.remove("d-none")

}, 31000)


// All'invio metto l'input utente in un array e lo valido 
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

    // Resetto il timer
    counter = 30
    clock = setInterval(displayCounter, 1000);

})


function numberValidator(value) {
    
    // Variabile per card-header dopo la sua generazione
    let cardHeaderEl = document.querySelectorAll(".card-header")
    console.log(cardHeaderEl);

    wrongNumbers = [];

    for (let i = 0; i < randomNumbers.length; i++) {
        const singleNum = randomNumbers[i];
        const userNum = value[i];

        if (userNum !== singleNum) {
            wrongNumbers.push(randomNumbers[i])
            cardHeaderEl[i].innerHTML = `
            <i class="bi bi-x-lg"></i>
            `
        }
    }

    const validatorOutput = document.createElement("div");
    validatorOutput.innerHTML = `
    
    `
}

function displayCounter() {
    timerEl.innerHTML = counter--

    if (counter == -1) {
    clearInterval(clock)
    timerEl.innerHTML = "INSERT THE NUMBERS SIMON SAID"
    }
}
