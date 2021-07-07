function star(ctx, props) {
  const { color, type, x, y } = props;
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

const stars = [
  {
    color: '#ffffff',
    type: 'L',
    x: 100,
    y: 100,
  },
  {
    color: '#ffffff',
    type: 'L',
    x: 500,
    y: 50,
  },
  {
    color: '#ffffff',
    type: 'M',
    x: 500,
    y: 500,
  },
  {
    color: '#ffffff',
    type: 'S',
    x: 570,
    y: 350,
  },
  {
    color: '#ffffff',
    type: 'S',
    x: 300,
    y: 450,
  },
  {
    color: '#ffffff',
    type: 'S',
    x: 270,
    y: 180,
  },
  {
    color: '#ffffff',
    type: 'L',
    x: 70,
    y: 320,
  },
  {
    color: '#ffffff',
    type: 'M',
    x: 200,
    y: 250,
  },
  {
    color: '#ffffff',
    type: 'M',
    x: 420,
    y: 140,
  },
  {
    color: '#ffffff',
    type: 'S',
    x: 100,
    y: 10,
  },
  {
    color: '#ffffff',
    type: 'S',
    x: 450,
    y: 40,
  },
];

function renderStars(ctx, starCycle) {
  switch (starCycle) {
    case 0:
      star(ctx, stars[0]);
      star(ctx, stars[1]);
      star(ctx, stars[3]);
      star(ctx, stars[4]);
      star(ctx, stars[5]);
      star(ctx, stars[6]);
      star(ctx, stars[7]);
      star(ctx, stars[8]);
      star(ctx, stars[9]);
      star(ctx, stars[10]);
      break;
    case 1:
      star(ctx, stars[0]);
      star(ctx, stars[1]);
      star(ctx, stars[3]);
      star(ctx, stars[4]);
      star(ctx, stars[5]);
      star(ctx, stars[6]);
      star(ctx, stars[7]);
      star(ctx, stars[8]);
      star(ctx, stars[9]);
      star(ctx, stars[10]);
      break;
    case 2:
      star(ctx, stars[0]);
      star(ctx, stars[1]);
      star(ctx, stars[3]);
      star(ctx, stars[4]);
      star(ctx, stars[5]);
      star(ctx, stars[6]);
      star(ctx, stars[7]);
      star(ctx, stars[8]);
      star(ctx, stars[9]);
      star(ctx, stars[10]);
      break;
    case 3:
      star(ctx, stars[1]);
      star(ctx, stars[3]);
      star(ctx, stars[4]);
      star(ctx, stars[5]);
      star(ctx, stars[6]);
      star(ctx, stars[7]);
      star(ctx, stars[8]);
      star(ctx, stars[9]);
      star(ctx, stars[10]);
      break;
    case 4:
      star(ctx, stars[1]);
      star(ctx, stars[3]);
      star(ctx, stars[4]);
      star(ctx, stars[5]);
      star(ctx, stars[6]);
      star(ctx, stars[7]);
      star(ctx, stars[8]);
      star(ctx, stars[9]);
      star(ctx, stars[10]);
      break;
    case 5:
      star(ctx, stars[0]);
      star(ctx, stars[1]);
      star(ctx, stars[2]);
      star(ctx, stars[3]);
      star(ctx, stars[4]);
      star(ctx, stars[5]);
      star(ctx, stars[6]);
      star(ctx, stars[8]);
      star(ctx, stars[9]);
      break;
    case 6:
      star(ctx, stars[0]);
      star(ctx, stars[1]);
      star(ctx, stars[2]);
      star(ctx, stars[3]);
      star(ctx, stars[4]);
      star(ctx, stars[5]);
      star(ctx, stars[6]);
      star(ctx, stars[8]);
      star(ctx, stars[9]);
      break;
    case 7:
      star(ctx, stars[0]);
      star(ctx, stars[1]);
      star(ctx, stars[2]);
      star(ctx, stars[3]);
      star(ctx, stars[4]);
      star(ctx, stars[5]);
      star(ctx, stars[6]);
      star(ctx, stars[7]);
      star(ctx, stars[8]);
      star(ctx, stars[9]);
      break;
    case 8:
      star(ctx, stars[0]);
      star(ctx, stars[1]);
      star(ctx, stars[2]);
      star(ctx, stars[3]);
      star(ctx, stars[4]);
      star(ctx, stars[5]);
      star(ctx, stars[6]);
      star(ctx, stars[7]);
      star(ctx, stars[8]);
      star(ctx, stars[9]);
      break;
    case 9:
      star(ctx, stars[0]);
      star(ctx, stars[1]);
      star(ctx, stars[2]);
      star(ctx, stars[3]);
      star(ctx, stars[4]);
      star(ctx, stars[5]);
      star(ctx, stars[6]);
      star(ctx, stars[7]);
      star(ctx, stars[8]);
      star(ctx, stars[9]);
      star(ctx, stars[10]);
      break;
    default:
      break;
  }
}

export default renderStars;
