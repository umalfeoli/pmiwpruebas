class Enemigos {
  constructor() {
    this.tipo = int(random(0,4));
    this.img = loadImage("data/imagen_"+this.tipo+".png");
    
    this.x = random(width);
    this.y = random(height);
    this.vel = random(1, 5);
    this.dir = random(TWO_PI);
    this.tam = 60;
  }

  mover() {
    let despX = cos(this.dir) * this.vel;
    let despY = sin(this.dir) * this.vel;
    this.x += despX;
    this.y += despY;
    if (this.x > width || this.x < 0) {
      despX = -despX;
    }
    if (this.y > height || this.y < 0) {
      despY = -despY;
    }
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
    this.dir = atan2(despY, despX);
  }

  dibujar() {
      push();
      translate(this.x, this.y);
      imageMode(CENTER);
      image(this.img, 0, 0, this.tam, this.tam);
      pop();
  }

  //dibuja y actualiza el movimiento de los enemigos en el juego / pantalla
  actualizar() {
    this.mover();
    this.dibujar();
  }
  
  reiniciarUbicacion() {
    this.x = random(width);
    this.y = random(height);
    this.vel = random(1, 3);
    this.dir = random(TWO_PI);
  }
  
  evaluaColision(x_, y_) {
    if ( dist(this.x, this.y, x_, y_) < this.tam/2) {
      this.reiniciarUbicacion();
      return true;
    } else {
      return false;
    }
  }
}//fin class 
