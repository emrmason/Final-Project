const baseURL = "https://hp-api.onrender.com/api/characters";
let char;
let charsWithHouses = [];
let charactersHouses = [];
let charName;
let house;
const houseList = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
let randNum = Math.floor(Math.random() * 135);
let points = 0;

getTriviaData();

async function getTriviaData() {
    const res = await fetch(baseURL);
    const characters = await res.json();
    for(let i = 0; i < 403; i++){
        char = characters[i];
        charName = char.name;
        house = char.house;
        if(char.house != "") {
            charsWithHouses.push(charName);
            charactersHouses.push(house);
        }
    }
    displayQuestion();
}


function displayQuestion() {
    let x = randNum;
    let number1 = charsWithHouses[x];
    let num1House= charactersHouses[x];
    console.log(number1, num1House);
    let question = `<p>Which house does ${number1} belong to?</p>`
    document.querySelector("#question-container").insertAdjacentHTML("afterbegin", question);
}

function checkAnswer() {
    
}

