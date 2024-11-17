function solution(n) {
  let answer = 0;
  let i = BigInt(n);
  let k = 0n;
  let sum = 0n;
  while (i >= k) {
    if ((k = 0 || i == k)) sum += 1n;
    else {
      let a = 1n;
      let b = 1n;
      for (let c = 1n; c <= k; c++) {
        a *= i - c + 1n;
        b *= c;
      }
      sum += a / b;
    }
    i--;
    k++;
  }
  answer = sum % 1234567n;
  return answer;
}
