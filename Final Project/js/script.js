var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");
ctx.lineWidth = 10;
ctx.strokeStyle = "yellow";
ctx.moveTo(70,10);
ctx.lineTo(45,40);
ctx.lineTo(70,50);
ctx.lineTo(45,85);
ctx.stroke();

const canvas = document.getElementById("myCanvas2");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "white";
ctx.lineWidth= 4;
// circle 1
ctx.beginPath();
ctx.arc(95, 60, 40, 0, 2 * Math.PI);
ctx.stroke();
// circle 2
ctx.beginPath();
ctx.arc(205, 60, 40, 0, 2 * Math.PI);
ctx.stroke();
// line between
ctx.moveTo(135, 60);
ctx.lineTo(165, 60);
ctx.stroke();