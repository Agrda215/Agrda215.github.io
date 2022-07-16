class Text1 {
  constructor(id, x, y, backgroundColor, fontFamily, align, text, positionActive) {
    this.x = x
    this.y = y
    this.backgroundColor = backgroundColor
    this.fontSet = fontFamily
    this.textAlign = align
    this.positionActive = positionActive
    
    this.id = id
    
    this.text = text
    
    document.getElementById(this.id).innerHTML = this.text;
    
    document.getElementById(this.id).style.backgroundColor = this.backgroundColor;
    document.getElementById(this.id).style.textAlign = this.align;
    document.getElementById(this.id).style.fontFamily = this.fontFamily;
    
    if (this.positionActive) {
      document.getElementById(this.id).style.position = "absolute";
    }
  }
}