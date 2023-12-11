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
    console.log(num1House);
    let question = `<p>Which house does ${number1} belong to?</p>`
    document.querySelector(".question-container").insertAdjacentHTML("afterbegin", question);
    return num1House;
}

const buttons = document.querySelectorAll("btn");
const buttonPressed = e => {
    btnId = e.target.id;
    console.log(btnId);
    const correct = checkAnswer(btnId, num1House);
    if (correct) {
        e.target.style.backgroundColor = "#a7c957";
        points+=1;
    } else {
        e.target.style.backgroundColor = "red";
        window.alert("Try again!");
    }

}
for(let button of buttons){
    button.addEventListener("click", buttonPressed);
}


function checkAnswer(num1House, btnId) {
    return btnId === num1House;
}

