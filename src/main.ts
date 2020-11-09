const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.translate(250, 500);

const W1x = (x: number, y: number): number => 0.836 * x + 0.044 * y;
const W1y = (x: number, y: number): number => -0.044 * x + 0.836 * y + 0.169;

const W2x = (x: number, y: number): number => -0.141 * x + 0.302 * y;
const W2y = (x: number, y: number): number => 0.302 * x + 0.141 * y + 0.127;

const W3x = (x: number, y: number): number => 0.141 * x - 0.302 * y;
const W3y = (x: number, y: number): number => 0.302 * x + 0.141 * y + 0.169;

const W4x = (x: number, y: number): number => 0;
const W4y = (x: number, y: number): number => 0.175337 * y;

const plot = (x:number, y:number): void => {
  ctx.strokeStyle = 'green';
  ctx.strokeRect(-x * 500, -y * 500, .1, .1);
};
const f = (k: number, x: number, y: number):void => {
  if (0 < k) {
    f(k - 1, W1x(x, y), W1y(x, y));
    if(Math.random() < 0.3) f(k - 1, W2x(x, y), W2y(x, y));
    if(Math.random() < 0.3) f(k - 1, W3x(x, y), W3y(x, y));
    if(Math.random() < 0.3) f(k - 1, W4x(x, y), W4y(x, y));
  }else{
    plot(x, y);
  }
};
const main = (): void => {
  f(20, 0, 0);
};

main();