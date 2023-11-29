let char = '';
let img = '';
 
 export async function getApiData() {
    fetch("https://hp-api.onrender.com/api/characters")
    .then(res => res.json())
    .then(data => { data.forEach(character => {
        char = character.name;
        img = character.image;
        // console.log(char);
        // return (char, img);
        if(img){
         createCard(char, img);
         } else {
            return;
         }
    })})
 }

 export function createCard(char, img) {
   // console.log(char);
   document.querySelector("ul").insertAdjacentHTML('beforeend', `<li>${char} <img src=${img} alt=${char}> </li>`);
 }

// function convertToJson(res) {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Bad Response");
//     }
//   }

// 