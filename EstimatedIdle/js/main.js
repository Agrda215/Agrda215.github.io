var estimated = 0;
var eps = 0;
var epc = 1;
cost1 = new UpgradeVar(15, 0, 0)
cost2 = new UpgradeVar(120, 0, 0)
cost3 = new UpgradeVar(1.4e3, 0, 0)

document.getElementById("click").onclick = () => {
  estimated += epc
  document.getElementById("estimated").innerText = estimated
}

document.getElementById("cost12").onclick = () => {
  if (estimated >= cost1.cost) {
  estimated -= cost1.cost
  cost1.cost *= 1.15
  eps += 0.1
  cost1.level += 1
  cost1.effect += 0.1
  }
}

document.getElementById("cost22").onclick = () => {
  if (estimated >= cost2.cost) {
  estimated -= cost2.cost
  cost2.cost *= 1.15
  eps += 0.8
  cost2.level += 1
  cost2.effect += 0.8
  }
}

document.getElementById("cost32").onclick = () => {
  if (estimated >= cost3.cost) {
  estimated -= cost3.cost
  cost3.cost *= 1.15
  eps += 0.8
  cost3.level += 1
  cost3.effect += 0.8
  }
}

function Update() {
  estimated += eps
  document.getElementById("estimated").innerText = estimated
  document.getElementById("cost11").innerText = cost1.cost
  document.getElementById("cost12").title = "You Gain add 0.1, Bought:" + cost1.level + " Effect:" + cost1.effect
  document.getElementById("cost21").innerText = cost2.cost
  document.getElementById("cost22").title = "You Gain add 0.8, Bought:" + cost2.level + " Effect:" + cost2.effect
  document.getElementById("cost31").innerText = cost3.cost
  document.getElementById("cost32").title = "You Gain add 4.2, Bought:" + cost3.level + " Effect:" + cost3.effect
}

setInterval(Update, 100)