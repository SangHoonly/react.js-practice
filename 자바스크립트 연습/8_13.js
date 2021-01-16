function fibo(n) {
  if (n === 1) return 1;
  if (!n in x) {
    x = fibo(n - 1) + fibo(n - 2);
  }

  return x;
}

for (var i = 0; i < 10; i++) {
  console.log(fibo(i));
}
