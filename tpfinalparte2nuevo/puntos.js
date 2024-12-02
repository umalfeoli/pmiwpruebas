class Puntaje {
  constructor() {
    this.puntos = 0;
  }

  aumenta() {
    this.puntos++;
  }

  decrece() {
    this.puntos--;
  }
  
  obtenerPuntaje() {
    return this.puntos;
  }

  dibujar() {
    fill(0);
    textSize(30);
    text("Puntos: " + this.puntos, 10, 30);
  }
}//fin class
