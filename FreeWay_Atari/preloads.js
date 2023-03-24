//variaveis de imagem

let imagemEstrada;
let imagemAtor;
let imagemCarro;
let ImagemCarro2;
let ImagemCarro3;

//variaveis de som

let somDaTrilha;
let somDaColisao;
let SomDoPonto;

function preload() {
  imagemEstrada = loadImage("img/estrada.png");
  imagemAtor = loadImage("img/ator-1.png");

  imagemCarro = loadImage("img/carro-1.png");
  imagemCarro2 = loadImage("img/carro-2.png");
  imagemCarro3 = loadImage("img/carro-3.png");

  imagemCarros = [
    imagemCarro,
    imagemCarro2,
    imagemCarro3,
    imagemCarro,
    imagemCarro3,
    imagemCarro2,
  ];

  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons//colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}
