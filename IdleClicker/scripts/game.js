function Game() {
  this.coins = new Decimal(0)
  this.cpc = new Decimal(1)
  this.format = (number) => {
    let result = ""
    if (number.gte(1e6)) {
      if (number.gte(1e9)) {
      if (number.gte(1e12)) {
      if (number.gte(1e15)) {
      if (number.gte(1e18)) {
      if (number.gte(1e21)) {
      if (number.gte(1e24)) {
      if (number.gte(1e27)) {
      if (number.gte(1e30)) {
      if (number.gte(1e33)) {
      if (number.gte("1e36")) {
      if (number.gte("ee9")) {
      if (number.gte("eee9")) {
      result = "eee" + number.log10().log10().log10()
    } else {
      result = "ee" + number.log10().log10()
    }
    } else {
      result = "e" + number.log10()
    }
    } else {
      result = number.div(1e33) + "Dc"
    }
    } else {
      result = number.div(1e30) + "No"
    }
    } else {
      result = number.div(1e27) + "Oc"
    }
    } else {
      result = number.div(1e24) + "Sp"
    }
    } else {
      result = number.div(1e21) + "Sx"
    }
    } else {
      result = number.div(1e18) + "Qi"
    }
    } else {
      result = number.div(1e15) + "Qa"
    }
    } else {
      result = number.div(1e12) + "T"
    }
    } else {
      result = number.div(1e9) + "B"
    }
    } else {
      result = number.div(1e6) + "M"
    }
    } else {
      result = number
    }
    
    return result;
  }
}

game = new Game();