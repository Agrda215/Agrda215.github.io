var canvas = document.getElementById("clicker");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
var score = new ExpantaNum(0)
ctx.fillText(score, canvas.width/2, canvas.height/2);

document.getElementById("clicker").onclick = () => {
  score = score.add(1)
}