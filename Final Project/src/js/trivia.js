const baseURL = "https://hp-api.onrender.com/api/characters";
let char;
let charsWithHouses = [];
let charactersHouses = [];
let charName;
let house;
const answers = {text:["Gryffindor"], text:["Ravenclaw"], text: ["Hufflepuff"], text: ["Slytherin"], text: ["No Idea"]};
let randNum = Math.floor(Math.random() * 135);
let points = 0;
let number1;
let num1House;
let correct = false;
const answerButtonsElement = document.getElementById("answer-buttons")

getTriviaData();

async function getTriviaData() {
    const res = await fetch(baseURL);
    const characters = await res.json();
    for(let i = 0; i < 403; i++){
        char = characters[i];
        charName = char.name;
        house = char.house;
        if(house != "") {
            charsWithHouses.push(charName);
            charactersHouses.push(house);
        }
    }
    displayQuestion();
}


function displayQuestion() {
    let x = randNum;
    number1 = charsWithHouses[x];
    num1House= charactersHouses[x];
    console.log(num1House);
    let question = `Which house does ${number1} belong to?`
    document.querySelector(".question-container").innerText = question;
    const button = document.createElement("button");
    for(let i=0; i<answers.length; i++){
        button.innerText = answers[i].text;
        button.dataset = answers[i].text;
        button.addEventListener('click', selectAnswer);
    }
    return num1House;
}


function selectAnswer(e) {
    const selectedButton = e.target;
    let answer = selectedButton.dataset;
}

function checkAnswer(num1House, answer){
    
}
