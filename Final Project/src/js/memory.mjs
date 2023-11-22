 export async function getApiData() {
    fetch("https://hp-api.onrender.com/api/characters")
    .then(res => res.json())
    .then(data => { data.forEach(character => {
        const char = character.name;
        const img = character.image;
        console.log(char,img);
    })})
 }

// function convertToJson(res) {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Bad Response");
//     }
//   }

