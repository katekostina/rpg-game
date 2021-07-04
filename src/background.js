function background(ctx, colorBottom, colorTop, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, 0, width);
  gradient.addColorStop(0, colorTop);
  gradient.addColorStop(0.8, colorTop);
  gradient.addColorStop(1, colorBottom);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function star(ctx, color, type, x, y) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  let vert = null;
  let hor = null;
  let boxVert = null;
  let boxHor = null;
  switch (type) {
    case 'L':
      vert = 20;
      hor = 14;
      boxVert = 8;
      boxHor = 6;
      break;
    case 'M':
      vert = 14;
      hor = 10;
      boxVert = 6;
      boxHor = 6;
      break;
    case 'S':
      vert = 10;
      hor = 6;
      boxVert = 4;
      boxHor = 4;
      break;
    default:
      break;
  }
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + vert);
  ctx.stroke();

  ctx.moveTo(x - hor / 2, y + vert / 2);
  ctx.lineTo(x + hor / 2, y + vert / 2);
  ctx.stroke();

  ctx.fillRect(x - boxHor / 2, y + (vert / 2 - boxVert / 2), boxHor, boxVert);
  ctx.fill();
}

function renderBackground(ctx, w, h) {
  background(ctx, '#191747', '#000000', w, h);
  star(ctx, '#ffffff', 'L', 100, 100);
  star(ctx, '#ffffff', 'L', 70, 320);
  star(ctx, '#ffffff', 'L', 500, 50);
  star(ctx, '#ffffff', 'M', 200, 250);
  star(ctx, '#ffffff', 'M', 500, 500);
  star(ctx, '#ffffff', 'M', 420, 140);
  star(ctx, '#ffffff', 'S', 570, 350);
  star(ctx, '#ffffff', 'S', 100, 10);
  star(ctx, '#ffffff', 'S', 300, 450);
  star(ctx, '#ffffff', 'S', 450, 40);
  star(ctx, '#ffffff', 'S', 270, 180);
}

export default renderBackground;
