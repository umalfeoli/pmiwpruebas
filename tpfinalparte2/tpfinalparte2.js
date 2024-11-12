let objJuego;

function setup() {
  createCanvas (640, 480);
  //en el parentesis estan la cantidad de enemigos del juego
  objJuego = new Juego(20);
}


function draw() {
  background (200);
  objJuego.dibujar();
}

/*
function mousePressed(mouseButton) {
  objJuego.mousePresionado(mouseButton);
}
*/
