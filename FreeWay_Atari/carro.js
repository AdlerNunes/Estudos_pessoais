//variaveis De Carro
let tamanhoXCarro = 65;
let tamanhoYCarro = 40;
let retorno = 600;
let saiuTela = -50;
let yCarros = [45, 95, 150, 210, 250, 314];
let xCarros = [600, 620, 630, 600, 630, 620];
let velocidadeCarros = [2.5, 3, 4, 5, 6, 3];

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      tamanhoXCarro,
      tamanhoYCarro
    );
  }
}

function movimentaCarro() {
  for (let j = 0; j < xCarros.length; j++) {
    xCarros[j] -= velocidadeCarros[j];
  }
}

function voltaCarro() {
  for (let k = 0; k < xCarros.length; k++)
    if (passouTela(xCarros[k])) {
      xCarros[k] = retorno;
    }
}
function passouTela(xCarro) {
  return xCarro < saiuTela;
}
