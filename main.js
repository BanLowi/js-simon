// Funzione per generare un numero random (inclusi min e max)
function getRandomdNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Funzione per riempire un array di numeri random
function fillArrayRandomNum(array, quantity) {

    for (let i = 0; i < quantity; i++) {
        const singleNum = getRandomdNum(1, 10);

        // SE numero singolo NON è nell'array lo pusho ALTRIMENTI ciclo indietro
        if (!array.includes(singleNum)) {
            array.push(singleNum);
        } else {
            i--
        }
    }
}


// Array e ciclo per generare 5 numeri random
let randomNumbers = [];
fillArrayRandomNum(randomNumbers, 5);


// Stampo i numeri in pagina per 30 secondi
const divEl = document.createElement("div");
divEl.innerHTML = `
 ${randomNumbers}
`
document.body.append(divEl);
// GAME CHEAT
console.log("CHEATS: " + randomNumbers);

// Array per risultati
let userNums = [];
let score = 0;
let correctNum = [];

// Timer di 30 secondi
setTimeout(() => {
    divEl.classList.add("d-none");
    
    // Switcho i numeri con input
    const formEl = document.createElement("form");
    formEl.innerHTML = `
    <input type="Number" placeholder="Number?" class="form-control" id="inputOne" required>
    <input type="Number" placeholder="Number?" class="form-control" id="inputTwo" required>
    <input type="Number" placeholder="Number?" class="form-control" id="inputThree" required>
    <input type="Number" placeholder="Number?" class="form-control" id="inputFour" required>
    <input type="Number" placeholder="Number?" class="form-control" id="inputFive" required>
    <button type="submit" class="btn btn-dark">VALIDA</button>
    `
    document.body.append(formEl);

    formEl.addEventListener("submit", (e) => {
        e.preventDefault()
        
        // Variabili valori input utente
        let inputOneValue = document.getElementById("inputOne").value;
        let inputTwoValue = document.getElementById("inputTwo").value;
        let inputThreeValue = document.getElementById("inputThree").value;
        let inputFourValue = document.getElementById("inputFour").value;
        let inputFiveValue = document.getElementById("inputFive").value;

        // Svuoto l'array e pusho nuovi input
        userNums = [];
        userNums.push(inputOneValue)
        userNums.push(inputTwoValue)
        userNums.push(inputThreeValue)
        userNums.push(inputFourValue)
        userNums.push(inputFiveValue)
        
        // Ciclo per validare i numeri
        for (let i = 0; i < randomNumbers.length; i++) {
            const singleRandom = randomNumbers[i];
            const singleUser = Number(userNums[i]);
        
            if (singleUser === singleRandom) {
                score++
                correctNum.push(singleUser)   
            }
        }

        const resultEl = document.createElement("div");
        resultEl.innerHTML = `
        <p>Numeri corretti: ${correctNum}</p>
        <p>Punteggio: ${score}</p>
        `
        document.body.appendChild(resultEl)
    })

    

}, 30000);



    