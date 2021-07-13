import './index.scss';
import ClientGame from './client/ClientGame';
import KateWalk from './assets/Female-4-Walk.png';
// import renderNightBackground from './nightBackground/nightBackground';
import terrainAtlas from './assets/terrain.png';
import worldCfg from './configs/world.json';
import sprites from './configs/sprites';

const canvas = document.getElementById('game');
const loading = document.getElementById('loading');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const terrain = document.createElement('img');
terrain.src = terrainAtlas;

const shots = 3;
let cycle = 0;
let keyPressed = null;
// const starCycle = 0;

// initial location of the hero
let pY = canvas.width / 2 - spriteW / 2;
let pX = canvas.height / 2 - spriteH / 2;

// sprite row refers to hero's appearance direction: ↓ row 0, ← row 1, → row 2, ↑ row 3
let spriteRow = 0;
const hero = document.createElement('img');
hero.src = KateWalk;

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

// function renderBackground() {
//   loading.remove();
//   const { map } = worldCfg;
//   map.forEach((cfgRow, y) => {
//     cfgRow.forEach((cfgCell, x) => {
//       const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
//       ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH);
//     });
//   });
// }

function walk(timestamp) {
  ctx.clearRect(pX, pY, spriteW, spriteH);
  // starCycle = (starCycle + 1) % 10;
  // renderNightBackground(ctx, canvas.width, canvas.height, starCycle);
  // renderBackground();
  switch (keyPressed) {
    case 'Down':
      pY = pY < canvas.width - spriteH - 10 ? pY + 10 : canvas.width - spriteH;
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
      pX = pX < canvas.height - spriteW - 10 ? pX + 10 : canvas.height - spriteW;
      cycle = (cycle + 1) % shots;
      break;
    default:
      break;
  }
  ctx.drawImage(hero, cycle * spriteW, spriteRow * spriteH, spriteW, spriteH, pX, pY, spriteW, spriteH);
  window.requestAnimationFrame(walk);
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
// terrain.addEventListener('load', renderBackground);

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});

hero.addEventListener('load', () => {
  window.requestAnimationFrame(walk);
});
