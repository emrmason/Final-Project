const baseURL = "https://hp-api.onrender.com/api/characters";
const numCards = [];
const selectedCharacters = [];
let firstCard, secondCard;
let matchesMade = 0;

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
      await flipCard();
   }

async function flipCard() {
   let cards = document.querySelectorAll(".card");
   cards.forEach(card => { 
      card.addEventListener("click", ()=>{
         let front = card.querySelector(".front");
         front.addEventListener('click', () =>{
         front.classList.toggle('flipped');
         let back = card.querySelector(".back");
         back.classList.toggle('flipped');
      
         if (!firstCard) {
            firstCard = card;
         return;
         }
         secondCard = card;
         checkMatch(firstCard, secondCard);
      }); 
   });
      
   });
   }
   

async function createCard(char) {
      document.querySelector("section").insertAdjacentHTML("afterbegin", // onclick="flipCard()"
      `<div class="card" data-charName = "${char}">  
         <div class="front"></div>
         <div class= "back flipped">
            <h2>${char}</h2>
         </div>
      </div>`);

}

async function checkMatch(firstCard, secondCard) {
   let char1 = firstCard.dataset;
   let char2 = secondCard.dataset;
   console.log(char1, char2);
   if (char1 === char2) {
      matchesMade++;
      document.getElementById("matches").textContent = `Matches: ${matchesMade}`;
      disableCards();
      console.log("match");
   } if (char1 != char2){
      console.log("no match")
      unflipCards(firstCard, secondCard);
   }
}

function disableCards() {
   firstCard.removeEventListener("click", flipCard);
   secondCard.removeEventListener("click", flipCard);
   resetCards();
}

async function unflipCards(firstCard, secondCard) {
   setTimeout(()=> {
         let front = firstCard.querySelector(".front");
         front.classList.toggle('flipped');
         let back = firstCard.querySelector(".back");
         back.classList.toggle('flipped');
         let front2 = secondCard.querySelector(".front");
         front2.classList.toggle("flipped");
         let back2 = secondCard.querySelector(".back");
         back2.classList.toggle("flipped");
      resetCards();
   }, 2000);
}

function resetCards() {
   firstCard = null;
   secondCard = null;
}