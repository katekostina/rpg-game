import './index.scss';
import ClientGame from './client/ClientGame';

const loading = document.getElementById('loading');
const nameInput = document.getElementById('name');
const startGameButton = document.getElementById('startGame');
const startScreen = document.getElementById('start-game');

window.addEventListener('load', () => {
  loading.remove();
  startGameButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    if (!name) {
      nameInput.style.borderColor = 'red';
    } else {
      startScreen.remove();
      ClientGame.init({ tagId: 'game', name: name });
    }
  });
});
