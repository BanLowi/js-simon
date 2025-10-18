// Funzione per generare un numero random (inclusi min e max)
function getRandomdNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Funzione per riempire un array di numeri random
function fillArrayRandomNum(array, quantity) {

    for (let i = 0; i < quantity; i++) {
        const singleNum = getRandomdNum(1, 10);

        // SE numero singolo generato NON è nell'array lo pusho ALTRIMENTI ciclo indietro
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

// Switcho i numeri con input
setTimeout(() => {
    divEl.classList.add("d-none");

    const formEl = document.createElement("form");
    formEl.innerHTML = `
    <input type="Number" placeholder="Number?" class="form-control" required>
    <input type="Number" placeholder="Number?" class="form-control" required>
    <input type="Number" placeholder="Number?" class="form-control" required>
    <input type="Number" placeholder="Number?" class="form-control" required>
    <input type="Number" placeholder="Number?" class="form-control" required>
    <button type="submit" class="btn btn-dark">VALIDA</button>
    `
    document.body.append(formEl);
}, 3000);



