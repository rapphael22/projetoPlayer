const musica = document.getElementById('musica');
const musicaImagem = document.getElementById('musicaImagem');
const botaoPlay = document.getElementById('botaoPlay');
const botaoAnterior = document.getElementById('botaoAnterior');
const botaoProximo = document.getElementById('botaoProximo');

const musicas = [
  { src: 'musica1.mp3', imagem: 'imagem1.jpg' },
  { src: 'musica2.mp3', imagem: 'imagem2.jpg' },
  { src: 'musica3.mp3', imagem: 'imagem3.jpg' },
  // Adicione mais músicas aqui
];

let musicaAtual = 0; // Começa com a primeira música

// Função para tocar a música atual
function tocarMusica() {
  musica.src = musicas[musicaAtual].src;
  musica.play();
  atualizarImagem();
}

// Função para atualizar a imagem da música
function atualizarImagem() {
  musicaImagem.src = musicas[musicaAtual].imagem;
}

// Função para tocar a música anterior
function musicaAnterior() {
  musicaAtual--;
  if (musicaAtual < 0) {
    musicaAtual = musicas.length - 1;
  }
  tocarMusica();
}

// Função para tocar a próxima música
function musicaProximo() {
  musicaAtual++;
  if (musicaAtual >= musicas.length) {
    musicaAtual = 0;
  }
  tocarMusica();
}

// Eventos de click para os botões
botaoPlay.addEventListener('click', function() {
  if (musica.paused) {
    musica.play();
    botaoPlay.textContent = 'Pause';
  } else {
    musica.pause();
    botaoPlay.textContent = 'Play';
  }
});

botaoAnterior.addEventListener('click', musicaAnterior);
botaoProximo.addEventListener('click', musicaProximo);

// Tocar a música inicial quando a página carregar
tocarMusica();
