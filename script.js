const intro = document.getElementById('intro');
const main = document.getElementById('main');
const sound = document.getElementById('startSound');
const btn = document.getElementById('enterBtn');

// Mostrar botón después de 3 segundos
setTimeout(() => {
  btn.classList.remove('hidden');
  btn.classList.add('show');
}, 3000);

// Clic en botón
btn.addEventListener('click', () => {
  sound.currentTime = 0;
  sound.play();

  intro.style.opacity = '0';

  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display = 'block';
    document.body.style.overflow = 'auto';
  }, 1000);
});
