//link al video: https://youtu.be/J6SKX2MfLQU
//DATOS DE LOS ALUMNOS:
//NOMBRES: Uma Lara Feoli (119020/6) y Alan Carabajal (118986/1)
//COMISION: Comision 3

//variables
let juego;
let pantallas = [];
let sonidoMusica;

function preload () {
  for (let i = 0; i < 5; i++) {
    pantallas [i] = loadImage ("data/pantalla_" +nf(i+1,2) + ".png")
  }
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  sonidoMusica = document.getElementById("sonido-musica");
}

function draw() {
  juego.actualizar();
}

function mousePressed() {
  juego.evaluaColision(); //colision con enemigos
  juego.mousePressed(); //colision con botones / cambio de estados
}
