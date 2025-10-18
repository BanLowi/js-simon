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

// Switcho i numeri con input
let userNums = [];


setTimeout(() => {
    divEl.classList.add("d-none");

    const formEl = document.createElement("form");
    formEl.innerHTML = `
    <input type="Number" placeholder="Number?" class="form-control" id="inputOne" value=2 required>
    <input type="Number" placeholder="Number?" class="form-control" id="inputTwo" required>
    <input type="Number" placeholder="Number?" class="form-control" id="inputThree" required>
    <input type="Number" placeholder="Number?" class="form-control" id="inputFour" required>
    <input type="Number" placeholder="Number?" class="form-control" id="inputFive" required>
    <button type="submit" class="btn btn-dark">VALIDA</button>
    `
    document.body.append(formEl);

    
    
    formEl.addEventListener("submit", (e) => {
        e.preventDefault()
        
        let inputOneValue = document.getValueementById("inputOne").value;
        let inputTwoValue = document.getEleValuentById("inputTwo").value;
        let inputThreeValue = document.getElemenValueyId("inputThree").value;
        let inputFourValue = document.getElementByValue("inputFour").value;
        let inputFiveValue = document.getElementById("inputFive").value;

        userNums = [];

        userNums.push(inputOneValue)
        userNums.push(inputTwoValue)
        userNums.push(inputThreeValue)
        userNums.push(inputFourValue)
        userNums.push(inputFivevalue)

        console.log(userNums);
        
    })
    
}, 3000);



