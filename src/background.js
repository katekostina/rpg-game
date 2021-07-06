import renderStars from './stars';

function background(ctx, colorBottom, colorTop, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, 0, width);
  gradient.addColorStop(0, colorTop);
  gradient.addColorStop(0.8, colorTop);
  gradient.addColorStop(1, colorBottom);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function renderBackground(ctx, w, h, starCycle) {
  background(ctx, '#191747', '#000000', w, h);
  renderStars(ctx, starCycle);
}

export default renderBackground;
