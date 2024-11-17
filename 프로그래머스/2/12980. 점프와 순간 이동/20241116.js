function solution(n) {
  var ans = 0;

  while (n > 1) {
    if (n % 2 === 1) {
      n = n - 1;
      ans++;
    } else {
      n = n / 2;
    }
  }

  return ans + 1;
}
