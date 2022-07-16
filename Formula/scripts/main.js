var layout_name = []
var ft = new OmegaNum(0)
let t = new OmegaNum(0)
var timespeed = new OmegaNum(1)
var cost1 = new OmegaNum(10)
var alpha_equal = new OmegaNum(0)
var cost2 = new OmegaNum(1e5)
var beta_equal = new OmegaNum(0)
var cost3 = new OmegaNum(4e7)
var alpha1_equal = new OmegaNum(0)

document.getElementById("cost1").onclick = () => {
  if (ft.gte(cost1) == true) {
  ft = ft.sub(cost1)
  cost1 = cost1.times(1.225)
  alpha_equal = alpha_equal.add(1)
  document.getElementById("f").innerHTML = "f(" + t + " &times; " + timespeed + " ) =" + ft
  document.getElementById("cost1").innerHTML = "Cost:" + cost1 + " (&alpha; = " + alpha_equal + ")"
  }
}

document.getElementById("cost2").onclick = () => {
  if (ft.gte(cost2) == true) {
  ft = ft.sub(cost2)
  cost2 = cost2.times(32768)
  beta_equal = beta_equal.add(1)
  document.getElementById("f").innerHTML = "f(" + t + " &times; " + timespeed + " ) =" + ft
  document.getElementById("cost2").innerHTML = "Cost:" + cost2 + " (&beta; = " + beta_equal + ")"
  }
}

document.getElementById("cost3").onclick = () => {
  if (ft.gte(cost3) == true) {
  ft = ft.sub(cost3)
  cost3 = cost3.times(23456)
  alpha1_equal = alpha1_equal.add(1)
  document.getElementById("f").innerHTML = "f(" + t + " &times; " + timespeed + " ) =" + ft
  document.getElementById("cost3").innerHTML = "Cost:" + cost3 + " (&alpha;<sub>1</sub> = " + alpha1_equal + ")"
  }
}

function Update() {
  t = t.add(0.1)
  ft = ft.add(t.times(timespeed).pow(beta_equal.add(1)).times(alpha_equal.add(1).pow(alpha1_equal.add(1))))
  document.getElementById("f").innerHTML = "f(" + t + " &times; " + timespeed + " ) =" + ft
}

setInterval(Update, 100)