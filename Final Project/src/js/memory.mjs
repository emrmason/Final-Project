const baseURL = "https://hp-api.onrender.com/api/characters";
const numCards = [];
const selectedCharacters = [];
let firstCard, secondCard;
let pause = false; // to allow time for comparison between cards
const matchesMade = 0;
document.getElementById("matches").textContent = `Matches: ${matchesMade}`;

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
      flipCard();
   }

function flipCard() {
   let cards = document.querySelectorAll(".card");
   cards.forEach(card => { 
      card.addEventListener("click", ()=>{
         card.classList.toggle("flipped");
      }) 
      let front = card.querySelector(".front");
      front.addEventListener('click', () =>{
         front.classList.toggle('flipped');
      })
   })
      if (!firstCard) {
         firstCard = card;
         console.log(firstCard);
         return
      }
      secondCard = card;
      console.log(secondCard);
      pause = true;

   // checkMatch();
}


async function createCard(char) {
      document.querySelector("section").insertAdjacentHTML("afterbegin", // onclick="flipCard()"
      `<div class= "card" id="card" data-charName = "${char}">  
         <div class="front" >
         </div>
         <div class= "back">
            <h2>${char}</h2>
         </div>
      </div>`);
      // document.addEventListener("click", flipCard);
}

// function checkMatch(firstCard, secondCard) {
//    console.log(firstCard, secondCard);
//    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
//    isMatch ? disableCards() : unflipCards();
// }

// function disableCards() {
//    firstCard.removeEventListener("click", flipCard);
//    secondCard.removeEventListener("click", flipCard);
//    matches++;
// }

// function unflipCards() {
//    setTimeout(()=> {
//       firstCard.classList.remove("flipped");
//       secondCard.classList.remove("flipped");
//    }, 1000);
// }
