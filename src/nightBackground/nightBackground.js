import renderStars from './stars';

function nightBackground(ctx, colorBottom, colorTop, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, 0, width);
  gradient.addColorStop(0, colorTop);
  gradient.addColorStop(0.8, colorTop);
  gradient.addColorStop(1, colorBottom);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function renderNightBackground(ctx, w, h, starCycle) {
  nightBackground(ctx, '#191747', '#000000', w, h);
  renderStars(ctx, starCycle);
}

export default renderNightBackground;
