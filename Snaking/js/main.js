function Snake() {
  this.x = 0;
  this.y = 20;
}

function Apple() {
  this.x = 135;
  this.y = 50;
}

let score = 0;

Snake = new Snake();
Apple = new Apple();

document.getElementById("left").onclick = () => {
  Snake.x += 5
}

document.getElementById("right").onclick = () => {
  Snake.x -= 5
}

document.getElementById("up").onclick = () => {
  Snake.y -= 5
}

document.getElementById("down").onclick = () => {
  Snake.y += 5
}

document.getElementById("collect").onclick = () => {
  if (Snake.x >= Apple.x && Snake.y >= Apple.y) {
    score += 1
  }
}

function Update() {
  document.getElementById("snake").style.left = Snake.x + "px";
  document.getElementById("snake").style.top = Snake.y + "px";
  document.getElementById("apple").style.left = Apple.x + "px";
  document.getElementById("apple").style.top = Apple.y + "px";
  document.getElementById("score").innerHTML = score
}

setInterval(Update, 100)