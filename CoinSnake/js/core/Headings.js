class Heading1 {
  constructor(id, text, x, y, rotate) {
    this.text = text
    this.x = x
    this.y = y
    
    document.getElementById(id).innerHTML = "<h1>" + this.text + "</h1>";
    
    document.getElementById(id).style.left = this.x + "px";
    
    document.getElementById(id).style.top = this.y + "px";
    document.getElementById(id).style.position = "absolute";
    
    document.getElementById(id).style.transform = "rotate(" + rotate + "deg)";
  }
}

class Heading2 {
  constructor(id, text, x, y, rotate) {
    this.text = text
    this.x = x
    this.y = y
    
    document.getElementById(id).innerHTML = "<h2>" + this.text + "</h2>";
    
    document.getElementById(id).style.left = this.x + "px";
    
    document.getElementById(id).style.top = this.y + "px";
    document.getElementById(id).style.position = "absolute";
    
    document.getElementById(id).style.transform = "rotate(" + rotate + "deg)";
  }
}

class Heading3 {
  constructor(id, text, x, y, rotate) {
    this.text = text
    this.x = x
    this.y = y
    
    document.getElementById(id).innerHTML = "<h3>" + this.text + "</h3>";
    
    document.getElementById(id).style.left = this.x + "px";
    
    document.getElementById(id).style.top = this.y + "px";
    document.getElementById(id).style.position = "absolute";
    
    document.getElementById(id).style.transform = "rotate(" + rotate + "deg)";
  }
}

class Heading4 {
  constructor(id, text, x, y, rotate) {
    this.text = text
    this.x = x
    this.y = y
    
    document.getElementById(id).innerHTML = "<h4>" + this.text + "</h4>";
    
    document.getElementById(id).style.left = this.x + "px";
    
    document.getElementById(id).style.top = this.y + "px";
    document.getElementById(id).style.position = "absolute";
    
    document.getElementById(id).style.transform = "rotate(" + rotate + "deg)";
  }
}

class Heading5 {
  constructor(id, text, x, y, rotate) {
    this.text = text
    this.x = x
    this.y = y
    
    document.getElementById(id).innerHTML = "<h5>" + this.text + "</h5>";
    
    document.getElementById(id).style.left = this.x + "px";
    
    document.getElementById(id).style.top = this.y + "px";
    document.getElementById(id).style.position = "absolute";
    
    document.getElementById(id).style.transform = "rotate(" + rotate + "deg)";
  }
}

class Heading6 {
  constructor(id, text, x, y, rotate) {
    this.text = text
    this.x = x
    this.y = y
    
    document.getElementById(id).innerHTML = "<h6>" + this.text + "</h6>";
    
    document.getElementById(id).style.left = this.x + "px";
    
    document.getElementById(id).style.top = this.y + "px";
    document.getElementById(id).style.position = "absolute";
    
    document.getElementById(id).style.transform = "rotate(" + rotate + "deg)";
  }
}