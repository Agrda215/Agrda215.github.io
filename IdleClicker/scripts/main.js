var x = document.getElementById("clickNum").value

function Update() {
  document.getElementById("coins").innerHTML = game.coins
  x = document.getElementById("clickNum").value
}

document.getElementById("update").onclick = () => {
  game.cpc = new Decimal(x)
}

document.getElementById("click").onclick = () => {
  game.coins = game.coins.add(game.cpc)
}

setInterval(Update, 100);
