export function clamp(x, fromX, toX) {
  let newX;
  if (x < fromX) newX = fromX;
  if (x > toX) newX = toX;

  return newX;
}
