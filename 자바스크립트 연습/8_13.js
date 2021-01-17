function fibo(n) {
  if (n < 2) return n;
  if (!(n in x)) {
    x[n] = fibo(n - 1) + fibo(n - 2);
  }

  return x;
}

var x = [];

for (var i = 0; i < 10; i++) {
  console.log(fibo(i));
}
