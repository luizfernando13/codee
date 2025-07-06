
window.addEventListener('load', () => {
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');
  const playButton = document.getElementById('playButton');
  const audio = document.getElementById('audio');

  // Simula um pequeno atraso para a animação de carregamento
  setTimeout(() => {
    loader.classList.add('hidden');
    content.classList.remove('hidden');
  }, 2000);
  }, 1000);

  playButton.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
  });
});
