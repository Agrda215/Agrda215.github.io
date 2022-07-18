class Format {
  constructor(number) {
    if (number >= 1000) {
      return number + "K"
    } else{
      return number
    }
    
    this.pow = (set) => new Format(number ** set)
    this.divide = (set) => new Format(number / set)
    this.divideasgi = (set) => new Format(number /= set)
    this.powasgi = (set) => new Format(number **= set)
    this.mulitipler = (set) => new Format(number * set)
    this.mulitiplerasgi = (set) => new Format(number *= set)
    this.plus = (set) => new Format(number + set)
    this.plusasgi = (set) => new Format(number += set)
    this.subtra = (set) => new Format(number - set)
    this.subtraasgi = (set) => new Format(number -= set)
    this.gt = (set) => number > set
    this.gte = (set) => number >= set
    this.lt = (set) => number < set
    this.lte = (set) => number <= set
    this.questionmarkthat = (question, mark1, mark2) => question ? mark1 : mark2
  }
}