import './index.scss';
import KateWalk from './assets/Female-4-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const shots = 3;
const canvasWH = 600;
let cycle = 0;
let keyPressed = null;

// initial location of the hero
let pY = canvasWH / 2 - spriteW / 2;
let pX = canvasWH / 2 - spriteH / 2;

// sprite row refers to hero's appearance direction: ↓ row 0, ← row 1, → row 2, ↑ row 3
let spriteRow = 0;

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
        default: break;
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
        default: break;
    }
}

function renderHero() {
    switch (keyPressed) {
        case 'Down':
            pY < (canvasWH - spriteH - 10) ? pY += 10 : pY = (canvasWH - spriteH);
            cycle = (cycle + 1) % shots;
            break;
        case 'Up':
            pY >= 10 ? pY -= 10 : pY = 0;
            cycle = (cycle + 1) % shots;
            break;
        case 'Left':
            pX >= 10 ? pX -= 10 : pX = 0;
            cycle = (cycle + 1) % shots;
            break;
        case 'Right':
            pX < (canvasWH - spriteW - 10) ? pX += 10 : pX = (canvasWH - spriteW);
            cycle = (cycle + 1) % shots;
            break;
        default: break;
    }
    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(img, cycle * spriteW, spriteRow * spriteH, spriteW, spriteH, pX, pY, spriteW, spriteH);
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = KateWalk;
img.addEventListener('load', () => {
    setInterval(renderHero, 120);
});
