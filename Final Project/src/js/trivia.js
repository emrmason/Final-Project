const baseURL = "https://hp-api.onrender.com/api/characters";
let char;
let charsWithHouses = [];
let charactersHouses = [];
let charName;
let house;
// const houseList = {btn1:["Gryffindor"], btn2:["Ravenclaw"], btn3: ["Hufflepuff"], btn4: ["Slytherin"], btn5: ["No Idea"]};
let randNum = Math.floor(Math.random() * 135);
let points = 0;
let number1;
let num1House;
let btnId;

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
    // console.log(num1House);
    let question = `<p>Which house does ${number1} belong to?</p>`
    document.querySelector(".question-container").insertAdjacentHTML("afterbegin", question);
    return num1House;
}

const buttons = document.querySelectorAll("button");
const buttonPressed = e => {
    btnId = e.target.id;
    // console.log(btnId);
    return btnId;
}
for(let button of buttons){
    button.addEventListener("click", buttonPressed);
}

checkAnswer(num1House);

function checkAnswer(num1House) {
    if(buttonPressed){
        if(btnId === num1House) {
            console.log("Correct!");
        }
        else {
            console.log("One more try.");
        }
    }
}



