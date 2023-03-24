//Variaveis De Ator

let tamanhoAtor = 30;
let movimentoXAtor = 100;
let movimentoYAtor = 366;
let origemYAtor = 366;
let colisao = false;

function mostraAtor() {
  image(imagemAtor, movimentoXAtor, movimentoYAtor, tamanhoAtor, tamanhoAtor);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    movimentoYAtor -= 4;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(podeSeMover())
    movimentoYAtor += 4;
  }
  if (keyIsDown(LEFT_ARROW)) {
    movimentoXAtor -= 4;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    movimentoXAtor += 4;
  }
}
function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      tamanhoXCarro,
      tamanhoYCarro,
      movimentoXAtor,
      movimentoYAtor,
      15
    );
    if (colisao) {
      somDaColisao.play()
      voltaAtorPosicao();
      if (pontosPositivos()) {
        meusPontos--;
      }
    }
  }
}
function voltaAtorPosicao() {
  movimentoYAtor = origemYAtor;
}
function podeSeMover(){
  return movimentoYAtor < origemYAtor
}
