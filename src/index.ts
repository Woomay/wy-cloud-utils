export function random(min: number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function randomDirection() {
  return Math.random() < 0.5 ? 1 : -1;
}