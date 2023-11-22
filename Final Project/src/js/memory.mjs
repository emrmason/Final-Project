 export async function getApiData() {
    fetch("https://hp-api.onrender.com/api/characters")
    .then(res => res.json())
    .then(data => { data.forEach(character => {
        const char = character.name;
        const img = character.image;
        return (char, img);
    })})
 }

 export function createCard() {
    document.querySelector("ul").insertAdjacentHTML(`<li>${char} <img src=${img} alt=${char}></li>`);
 }

// function convertToJson(res) {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Bad Response");
//     }
//   }

