
//variaveis da bolinha
let xDoCirculo = 300
let yDoCirculo = 200
let diametro = 15
let raio = diametro / 2

//velocidade da bolinha
let velocidadeXBolinha = 5
let velocidadeYBolinha = 5

//variaveis da raquete
let xRaquete = 5
let yRaquete = 150

//variaveis raquete do oponente
let botXRaquete = 585
let botYRaquete = 150
let velocidadeYBot
let chanceDeErrar = 0

//variavel raquete geral
let comprimentoRaquete = 10
let alturaRaquete = 80

//variavel colisao raquete
let colidiu = false;

//variaveis de placar
let botPonto = 0
let playerPonto = 0

//sons do jogo
let raquetada
let trilha
let ponto


function preload(){
  trilha =loadSound("trilha.mp3")
  ponto=loadSound("ponto.mp3")
  raquetada=loadSound("raquetada.mp3")
}


function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostrarBolinha()
  moverBolinha()
  colisaoBolinha()
  mostraRaquete(xRaquete, yRaquete)
  mostraRaquete(botXRaquete, botYRaquete)
  moverMinhaRaquete()
  colisaoRaqueteBiblioteca(xRaquete, yRaquete)
  colisaoRaqueteBiblioteca(botXRaquete, botYRaquete)
  moverBotRaquete()
  incluiPlacar()
  calcularPlacar()
}



function mostrarBolinha(){
  circle(xDoCirculo,yDoCirculo, diametro);
}
function moverBolinha(){
  xDoCirculo += velocidadeXBolinha
  yDoCirculo += velocidadeYBolinha
}
function colisaoBolinha(){
   if(xDoCirculo + raio> width || xDoCirculo - raio < 0){
    velocidadeXBolinha *= -1
  }
  if(yDoCirculo + raio > height || yDoCirculo - raio <0){
    velocidadeYBolinha *= -1
  }
}


function mostraRaquete(x,y){
  rect(x, y, comprimentoRaquete, alturaRaquete)
}



function moverMinhaRaquete(){
  if (keyIsDown(DOWN_ARROW)){
   yRaquete +=10 
  }if (keyIsDown(UP_ARROW)){
    yRaquete -=10
  }
}

function colisaoRaqueteBiblioteca(x, y){
  colidiu =collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xDoCirculo, yDoCirculo, raio);
  if(colidiu){
    velocidadeXBolinha *= -1
    raquetada.play()
  }
}

function moverBotRaquete(){
  velocidadeYBot = yDoCirculo - botYRaquete - comprimentoRaquete/ 2 - 30;
  botYRaquete += velocidadeYBot + chanceDeErrar
  calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (botPonto >= playerPonto) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER)
  textSize(20)
  fill(color(0,250,154))
  rect(150,10,40,20)
  fill(255)
  text(playerPonto, 170 , 26)
  fill(color(255,70,0))
  rect(450,10,40,20)
  fill(255)
  text(botPonto, 470, 26)
}
function calcularPlacar(){
  if(xDoCirculo>590){
    playerPonto += 1
    ponto.play()
  }if(xDoCirculo<10){
    botPonto += 1
    ponto.play()
  }
}
