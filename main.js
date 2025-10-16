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

}, 3000)

// 
formEl.addEventListener("submit", (event) => {
    event.preventDefault()

    const userOne = document.getElementById("userNumberOne");
    const oneValue = Number(userOne.value);

    const userTwo = document.getElementById("userNumberTwo");
    const twoValue = Number(userTwo.value);

    const userThree = document.getElementById("userNumberThree");
    const threeValue = Number(userThree.value);

    const userFour = document.getElementById("userNumberFour");
    const fourValue = Number(userFour.alue);

    const userFive = document.getElementById("userNumberFive");
    const fiveValue = Number(userFive.value);


})


function numberValidator () {



/*     if (oneValue == randomNumbers[0]) {
        counter++
        console.log(counter); 
    } else {
        wrongNumbers.push(randomNumbers[0])
    } */
    
}

