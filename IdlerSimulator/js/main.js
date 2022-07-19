var vue = new ExpantaNum(0)
var vpc = new ExpantaNum(1)
var vg1 = new ExpantaNum(0)
var vg2 = new ExpantaNum(0)
var vg3 = new ExpantaNum(0)
var vg4 = new ExpantaNum(0)
var vg5 = new ExpantaNum(0)
var vg6 = new ExpantaNum(0)
var vg7 = new ExpantaNum(0)
var vg8 = new ExpantaNum(0)
var costs = [
  new ExpantaNum(10),
  new ExpantaNum(100),
  new ExpantaNum(1e3),
  new ExpantaNum(1e4),
  new ExpantaNum(1e6),
  new ExpantaNum(1e8),
  new ExpantaNum(1e10),
  new ExpantaNum(1e13),
]
var bought = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
]
var upgrades = [
  new Upgrade(new ExpantaNum(1e11), new ExpantaNum(3), new ExpantaNum(1), new ExpantaNum(1.25), new ExpantaNum(1), 0),
  new Upgrade(new ExpantaNum(1e13), new ExpantaNum(6), new ExpantaNum(1), new ExpantaNum(1.25), new ExpantaNum(1), 0),
]

function Update() {
  vue = vue.add(vg1.mul(upgrades[0].effect).mul(upgrades[1].effect))
  vg1 = vg1.add(vg2)
  vg2 = vg2.add(vg3)
  vg3 = vg3.add(vg4)
  vg4 = vg4.add(vg5)
  vg5 = vg5.add(vg6)
  vg6 = vg6.add(vg7)
  vg7 = vg7.add(vg8)
  document.getElementById("vue").innerHTML = "You Have " + vue + " Vue."
  document.getElementById("cvg1").innerHTML = costs[0]
  document.getElementById("cvg2").innerHTML = costs[1]
  document.getElementById("cvg3").innerHTML = costs[2]
  document.getElementById("cvg4").innerHTML = costs[3]
  document.getElementById("cvg5").innerHTML = costs[4]
  document.getElementById("cvg6").innerHTML = costs[5]
  document.getElementById("cvg7").innerHTML = costs[6]
  document.getElementById("cvg8").innerHTML = costs[7]
  document.getElementById("bvg1").innerHTML = bought[0]
  document.getElementById("bvg2").innerHTML = bought[1]
  document.getElementById("bvg3").innerHTML = bought[2]
  document.getElementById("bvg4").innerHTML = bought[3]
  document.getElementById("bvg5").innerHTML = bought[4]
  document.getElementById("bvg6").innerHTML = bought[5]
  document.getElementById("bvg7").innerHTML = bought[6]
  document.getElementById("bvg8").innerHTML = bought[7]
  document.getElementById("cost1").innerText = upgrades[0].cost
  document.getElementById("effect1").innerText = upgrades[0].effect
  document.getElementById("bought1").innerText = upgrades[0].bought
  document.getElementById("cost2").innerText = upgrades[1].cost
  document.getElementById("effect2").innerText = upgrades[1].effect
  document.getElementById("bought2").innerText = upgrades[1].bought
}

document.getElementById("click").onclick = () => {
  vue = vue.add(vpc)
}

document.getElementById("buy1").onclick = () => {
  if (vue.gte(costs[0])) {
    vg1 = vg1.add(1)
    bought[0] += 1
    costs[0] = costs[0].times(3)
    vue = vue.sub(costs[0])
  }
}

document.getElementById("buy2").onclick = () => {
  if (vue.gte(costs[1])) {
    vg2 = vg2.add(1)
    bought[1] += 1
    costs[1] = costs[1].times(5)
    vue = vue.sub(costs[1])
  }
}

document.getElementById("buy3").onclick = () => {
  if (vue.gte(costs[2])) {
    vg3 = vg3.add(1)
    bought[2] += 1
    costs[2] = costs[2].times(15)
    vue = vue.sub(costs[2])
  }
}

document.getElementById("buy4").onclick = () => {
  if (vue.gte(costs[3])) {
    vg4 = vg4.add(1)
    bought[3] += 1
    costs[3] = costs[3].times(25)
    vue = vue.sub(costs[3])
  }
}

document.getElementById("buy5").onclick = () => {
  if (vue.gte(costs[4])) {
    vg5 = vg5.add(1)
    bought[4] += 1
    costs[4] = costs[4].times(45)
    vue = vue.sub(costs[4])
  }
}

document.getElementById("buy6").onclick = () => {
  if (vue.gte(costs[5])) {
    vg6 = vg6.add(1)
    bought[5] += 1
    costs[5] = costs[5].times(95)
    vue = vue.sub(costs[5])
  }
}

document.getElementById("buy7").onclick = () => {
  if (vue.gte(costs[6])) {
    vg7 = vg7.add(1)
    bought[6] += 1
    costs[6] = costs[6].times(225)
    vue = vue.sub(costs[6])
  }
}

document.getElementById("buy8").onclick = () => {
  if (vue.gte(costs[7])) {
    vg8 = vg8.add(1)
    bought[7] += 1
    costs[7] = costs[7].times(225)
    vue = vue.sub(costs[7])
  }
}

document.getElementById("buyupg1").onclick = () => {
  if (vue.gte(upgrades[0].cost)) {
    vue = vue.sub(upgrades[0].cost)
    upgrades[0].effect = upgrades[0].effect.times(upgrades[0].mulitiplerEffect)
    upgrades[0].cost = upgrades[0].cost.times(upgrades[0].mulitiplerCost)
  }
}

document.getElementById("buyupg2").onclick = () => {
  if (vue.gte(upgrades[1].cost)) {
    vue = vue.sub(upgrades[1].cost)
    upgrades[1].effect = upgrades[1].effect.times(upgrades[1].mulitiplerEffect)
    upgrades[1].cost = upgrades[1].cost.times(upgrades[1].mulitiplerCost)
  }
}

setInterval(Update, 100)