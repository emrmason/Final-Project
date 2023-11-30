const baseURL = "https://hp-api.onrender.com/api/characters";

// let selectedCharacter = '';
// let char = '';
// let charId = 0;
// let img = '';
// let house = '';
const numCards = [];
const selectedCharacters = [];

export async function getApiData() {
   while(numCards.length < 8){
      let random = Math.ceil(Math.random() *403);
      numCards.push(random);
   }
      const res = await fetch(baseURL);
      const characters = await res.json();
      for(let i=0; i < numCards.length; i++){
         let x = numCards[i];
         const selectedCharacter = characters[x];
         const char = selectedCharacter.name;
         selectedCharacters.push(char);
         selectedCharacters.push(char);
      }
      const shuffledChar = selectedCharacters.sort((a,b)=> 0.5 - Math.random());
      for(let i=0; i < shuffledChar.length; i++){
         createCard(shuffledChar[i]);
      }

   }

function createCard(char) {
      document.querySelector("ul").insertAdjacentHTML("afterbegin",`<li class= "front hidden"><h2>${char}</h2></li>`);
}


// function randomizeCards(){
//    while(numCards.length < 8) {
//       let random = Math.ceil(Math.random() * 403);
//       numCards.push(random);
//    }
//    return numCards
// }

// function convertToJson(res) {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Bad Response");
//     }
//   }
