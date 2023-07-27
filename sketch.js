//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

//variaveis movimento
let velXBol = 5;
let velYBol = 5;

//variaveis raquete
let xRaquete = 5;
let yRaquete = 150;
let rComprimento = 10;
let rAltura = 90;
let colidiu = false;

//variaveis raqueteOp

let xRaqueteOp = 585;
let yRaqueteOp = 150;
let velYOp;

//Placar do Jogo
let meusPontos = 0;
let pontosOponente = 0;

//Sons do Jogo

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisao();
  mostraRaquete(xRaquete, yRaquete); 
  mostraRaquete(xRaqueteOp, yRaqueteOp);
  movimentaRaquete();
  movimentaRaqueteOp();
  colideBiblioteca(xRaquete,yRaquete);
  colideBiblioteca(xRaqueteOp,yRaqueteOp);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
   
 
  }

function mostraBolinha () {
  circle(xBolinha,yBolinha,diametro);
    
}

function movimentoBolinha() {
  xBolinha += velXBol;
  yBolinha += velYBol;
  
}

function verificaColisao(){
  if (xBolinha + raio > width || 
      xBolinha - raio < 0) {
    velXBol*= -1;
    
  }
  if (yBolinha + raio > height ||
      yBolinha - raio <0 ) {
    velYBol *= -1;
    
  }
}

function mostraRaquete(x,y){
  rect(x,y,rComprimento,rAltura);
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  {
  if ( keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
  yRaquete = constrain(yRaquete, 10, 310);
}

function movimentaRaqueteOp(){
  if (keyIsDown(87)){
    yRaqueteOp -= 10;
  }
  {
  if ( keyIsDown(83)){
    yRaqueteOp += 10;
  }
}
  yRaquete = constrain(yRaquete, 10, 310);
  
}

function colideBiblioteca(x,y){
  colidiu = 
  collideRectCircle(x,y, rComprimento,rAltura, xBolinha, yBolinha, raio);
  if (colidiu) { 
    velXBol *= -1;
    raquetada.play();
  }
}

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill (color(255,140,0));
  rect(150,10,40,20)
  fill(255);
  text(meusPontos, 170 , 26);
  fill (color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosOponente, 470, 26);
  
}

function marcaPonto(){
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosOponente += 1;
    ponto.play();
  }
}
  

function bolinhaNaoFicaPresa(){
    if (xBolinha + raio < 0){
    console.log('bolinha ficou presa');
    xBolinha = 300;
    }
}
