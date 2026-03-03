function guardarNomes() {
  const inputJogadorX = document.getElementById('jogadorX').value;
  const inputJogadorO = document.getElementById('jogadorO').value;

  localStorage.setItem('jogadorO', inputJogadorO);
  localStorage.setItem('jogadorX', inputJogadorX);

  console.log(inputJogadorX);
  console.log(inputJogadorO);

  location.href = "jogo.html"
}