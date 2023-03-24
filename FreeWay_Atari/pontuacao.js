let meusPontos = 0;

function incluirPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(0, 100, 0);
  text(meusPontos, width / 5, 30);
}
function marcarPontos() {
  if (movimentoYAtor < 15) {
    somDoPonto.play()
    meusPontos ++
    voltaAtorPosicao()
  }
}
function pontosPositivos(){
  return meusPontos > 0
}
