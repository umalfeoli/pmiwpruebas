class Boton {
  constructor(txt, x, y, w, h) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colorReposo = color(100);
    this.colorOver = color(20, 200, 0);
  }

  dibujar() {
    push();
    rectMode(CENTER);
    if (this.colision()) {
      fill(this.colorOver); 
    } else {
      fill(this.colorReposo);
    }
    rect(this.x, this.y, this.w, this.h);
    textSize(25);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.txt, this.x, this.y);
    pop();
  }

  colision() {
    return (mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2);
  }
}//fin class
