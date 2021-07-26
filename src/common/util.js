export function clamp(n, fromN, toN) {
  let newN = n;
  if (n < fromN) newN = fromN;
  if (n > toN) newN = toN;
  return newN;
}

export function animateEx(dx, startTime, currentTime, speed, looped = false) {
  const diff = currentTime - startTime;
  let time = (speed && diff / speed) || 0;

  if (looped) {
    time %= 1;
  } else if (time > 1) {
    time = 1;
  }
  return { offset: dx * time, progress: time };
}
