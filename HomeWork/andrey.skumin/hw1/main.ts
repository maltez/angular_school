const toStr = (state: boolean): string => state ? '1' : '0';
const factorial = (n: number): number => n > 0 ? n * factorial(n - 1) : 1;
const fibonacci = (n: number): number => {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c: number = a + b;
    a = b;
    b = c;
  }
  return b;
};
