class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearEnemigos();
  }
  
  //dibuja el juego
  dibujar() {
    for(let i=0; i<this.cantidadEnemigos; i++) {
      this.enemigos[i].actualizar();
    }
    
    //this.controlarEnemigos();
  }
  
  iniciar() {
  
  }
  
  crearEnemigos() {
    this.enemigos = [];
    for(let i=0; i<this.cantidadEnemigos; i++) {
      this.enemigos[i] = new Enemigo();
    }
  }
  
  //ver si la persona gano
  gano() {
  
  }
  
  /*
  mousePresionado(mouseButton) {
    this.enemigos.mousePresionado(mouseButton);
    
    controlarEnemigos();
    if(
  }
  */
}
