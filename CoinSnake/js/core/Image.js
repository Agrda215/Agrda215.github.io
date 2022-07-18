class Images {
  constructor(id, src, alt, x, y, width, height) {
    this.src = src
    this.alt = alt
    this.x = x
    this.y = y
    
    document.getElementById(id).innerHTML = `<img style="width:` + width + `px;height:` + height + `px" src="` + src + `" alt="` + alt + `"></img>`;
    
    document.getElementById(id).style.left = this.x + "px";
    
    document.getElementById(id).style.top = this.y + "px";
    document.getElementById(id).style.position = "absolute";
  }
}