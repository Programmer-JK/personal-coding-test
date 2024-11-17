function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let sum = i;
    for (let k = i + 1; sum < n; k++) {
      sum += k;
    }
    if (sum === n) answer++;
  }
}
