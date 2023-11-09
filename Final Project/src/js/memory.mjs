fetch("https://hp-api.onrender.com/api/characters")
    .then(res => res.json())
    .then(data => console.log(data))



// function convertToJSON(res) {
//     if(res.ok) {
//         console.log("It worked.");
//         return res.json();
//     } else {
//         console.log("Not working.");
//     }
// }