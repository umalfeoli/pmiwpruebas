class Enemigo {
  constructor() {
    this.posX = random (width);
    this.posY = random (height);
    this.vel = random (1,8);
    this.dir = random(TWO_PI);
    this.miColor = color (255, 0, 0);
    this.vida = true;
  }
  
  dibujar() {
    push();
    if(this.vida) {
      //despues aca se puede cambiar por una imagen
      translate(this.posX, this.posY); //pusimos en 0,0 en las coordenads x,y
      rotate(this.dir);
      fill (this.miColor);
      ellipse (this.posX, this.posY, 30, 30);
      pop();
    }
  }
  
  mover(){
    let despX = cos(this.dir)*this.vel;
    let despY = sin(this.dir)*this.vel;
    this.posX+= despX;
    this.posY+= despY;
    //calculamos posibles rebotes
    if ( this.posX>width || this.posX<0 ) {
      despX=-despX;
    }
    if ( this.posY>height || this.posY<0 ) {
      despY=-despY;
    }
    //limater dentro del espacio:
    this.posX = constrain(this.posX, 0, width);
    this.posY = constrain(this.posY, 0, height);
    //obtengo el angulo nuevamente, por si hubo rebote
    this.dir = atan2(despY, despX);
  }
  
  actualizar() {
    this.mover();
    this.dibujar();
  }
  
  estaVivo() {
  
  }
}
