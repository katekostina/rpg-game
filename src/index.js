import './index.scss';
import KateWalk from './assets/Female-4-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const heroW = 48;
const heroH = 48;
const shots = 3;
const canvasWH = 600;
let cycle = 0;
let keyPressed = null;

// initial location of the hero
let pY = canvasWH / 2 - heroW / 2;
let pX = canvasWH / 2 - heroH / 2;

// sprite row refers to hero's appearance direction: ↓ row 0, ← row 1, → row 2, ↑ row 3
let spriteRow = 0;

const img = document.createElement('img');
img.src = KateWalk;

function keyDownHandler(e) {
  switch (e.key) {
    case 'Down':
    case 'ArrowDown':
      e.preventDefault();
      spriteRow = 0;
      keyPressed = 'Down';
      break;
    case 'Left':
    case 'ArrowLeft':
      e.preventDefault();
      spriteRow = 1;
      keyPressed = 'Left';
      break;
    case 'Right':
    case 'ArrowRight':
      e.preventDefault();
      spriteRow = 2;
      keyPressed = 'Right';
      break;
    case 'Up':
    case 'ArrowUp':
      spriteRow = 3;
      e.preventDefault();
      keyPressed = 'Up';
      break;
    default:
      break;
  }
}

function keyUpHandler(e) {
  switch (e.key) {
    case 'Down':
    case 'ArrowDown':
    case 'Left':
    case 'ArrowLeft':
    case 'Right':
    case 'ArrowRight':
    case 'Up':
    case 'ArrowUp':
      keyPressed = null;
      break;
    default:
      break;
  }
}

function renderHero() {
  switch (keyPressed) {
    case 'Down':
      pY = pY < canvasWH - heroH - 10 ? pY + 10 : canvasWH - heroH;
      cycle = (cycle + 1) % shots;
      break;
    case 'Up':
      pY = pY >= 10 ? pY - 10 : 0;
      cycle = (cycle + 1) % shots;
      break;
    case 'Left':
      pX = pX >= 10 ? pX - 10 : 0;
      cycle = (cycle + 1) % shots;
      break;
    case 'Right':
      pX = pX < canvasWH - heroW - 10 ? pX + 10 : canvasWH - heroW;
      cycle = (cycle + 1) % shots;
      break;
    default:
      break;
  }
  ctx.clearRect(0, 0, 600, 600);
  ctx.drawImage(img, cycle * heroW, spriteRow * heroH, heroW, heroH, pX, pY, heroW, heroH);
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
img.addEventListener('load', () => {
  setInterval(renderHero, 120);
});
