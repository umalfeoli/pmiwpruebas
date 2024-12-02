class Juego {
  constructor() {
    this.estado = 0;
    
    this.botonInicio = new Boton ("INICIAR", width/2 - 200, height * 0.75 + 60, 200, 40);
    this.botonCreditos = new Boton ("CREDITOS", width / 2 + 200, height * 0.75 + 60, 200, 40);
    this.botonVolver = new Boton ("VOLVER", width / 2, height * 0.75 + 60, 200, 40);
    
    this.puntaje = new Puntaje();
    
    this.enemigos = [];
    this.cant = 20;
    for (let i = 0; i < this.cant; i++) {
      this.enemigos[i] = new Enemigos();
    }
  }//fin constructor
  
  //reinicia la posición de los enemigos
  reiniciar() {
    this.puntaje = new Puntaje();
    for (let i = 0; i < this.cant; i++) {
      this.enemigos[i].reiniciarUbicacion();
    }
  }
  
  //actualiza / hace aparecer las pantallas
  actualizar() {
    if (this.estado === 0) {
      this.pantallaInicio();
      this.reiniciar();
    } else if ( this.estado === 1) {
      this.pantallaJugando();
    } else if (this.estado === 2) {
     this.pantallaCreditos();
    } else if (this.estado === 3) {
     this.pantallaGanaste();
    } else if (this.estado === 4) {
     this.pantallaPerdiste();
    }
    }//fin actualizar
  
  //evalua la colision del mouse al hacer click sobre los enemigos
  evaluaColision() {
    for ( let i=0; i<this.cant; i++) {
      if (this.enemigos[i].evaluaColision(mouseX, mouseY) ) {
        if (this.enemigos[i].tipo === 0 || this.enemigos[i].tipo === 1 || this.enemigos[i].tipo === 2) {
          this.puntaje.aumenta();
        } else if (this.enemigos[i].tipo === 3){
          this.puntaje.decrece();
        }
      }
    }
  }
  
  //PANTALLAS
  //estado 0 (pantalla inicio)
  pantallaInicio() {
    push();
    image (pantallas [this.estado], 0, 0, width, height);
    fill(0);
    textAlign(CENTER);
    textSize(24);
    text("FRANKENWEENIE", 0, 30, width, height * 0.4);
    text ("instrucciones: toca a 10 enemigos para ganar, pero ten cuidado de no tocar a Sparky, porque sino te restara puntos. Si llegas a -5 puntos perderas la partida", 0, 70, width, height * 0.4);
    
    //botones
    this.botonInicio.dibujar();
    this.botonCreditos.dibujar();
    pop();
  }
  
  //estado 2 (pantalla creditos)
  pantallaCreditos() {
    push();
    image (pantallas [this.estado], 0, 0, width, height);
    fill(0);
    textAlign(CENTER);
    textSize(24);
    text("Pelicula dirigida por Tim Burton y producida por Walt Disney Pictures. Trabajo hecho por Alan Carabajal (118986/1) y Uma Lara Feoli (119020/6)", 0, 160 , width, height * 0.4);
    
    //boton
    this.botonVolver.dibujar();
    pop();
  }
  
  //estado 1 (pantalla de juego)
  pantallaJugando(){
    push();
    image (pantallas [this.estado], 0, 0, width, height);
    
  for (let i=0; i<this.cant; i++) {
      this.enemigos[i].actualizar();
    }
    
    this.puntaje.dibujar();
    
    //perdiste o ganaste
    if (this.puntaje.obtenerPuntaje() >= 10) {
      this.estado = 3; //pantalla ganaste
    } else if (this.puntaje.obtenerPuntaje() <= -5) {
      this.estado = 4; //pantalla perdiste
    }
    pop();
  }
  
  //estado 3 (pantalla ganaste)
  pantallaGanaste() {
    push();
    image (pantallas [this.estado], 0, 0, width, height);
    
    fill(0, 255, 0);
    textAlign(CENTER);
    textSize(24);
    text("¡Ganaste!", 0, 30, width, height * 0.4);
    
    //boton
    this.botonVolver.dibujar();
    pop();
  }
  
  //estado 4 (pantalla perdiste)
  pantallaPerdiste() {
    push();
    image (pantallas [this.estado], 0, 0, width, height);
    
    fill(255, 0, 0);
    textAlign(CENTER);
    textSize(24);
    text("¡Perdiste!", 0, 30, width, height * 0.4);
    
    //boton
    this.botonVolver.dibujar();
    pop();
  }
  
  //colision con los botones / cambio de estado
  mousePressed() {
    if (this.estado === 0) {
      if (this.botonInicio.colision()) {
        this.estado = 1;
        //reproduce el sonido cada vez que se hace click sobre el boton "iniciar"
        sonidoMusica.currentTime = 0;
        sonidoMusica.play();
      } else if (this.botonCreditos.colision()) {
        this.estado = 2;
      }
    }
    
    if (this.estado === 2 || this.estado === 3 || this.estado === 4) {
      if (this.botonVolver.colision()) {
        this.estado = 0;
      }
    }
  }
}//fin class juego
