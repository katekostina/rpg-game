import './index.scss';
import ClientGame from './client/ClientGame';

const loading = document.getElementById('loading');
const nameInput = document.getElementById('name');
const startScreen = document.getElementById('start-game');
const nameForm = document.getElementById('nameForm');

window.addEventListener('load', () => {
  loading.remove();
  nameForm.addEventListener('submit', (e) => {
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
