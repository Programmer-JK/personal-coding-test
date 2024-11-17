function solution(brown, yellow) {
  var answer = [];
  let temp = (brown - 4) / 2;
  for (let i = 1; i < temp; i++) {
    if (i * (temp - i) === yellow) {
      answer = [temp - i + 2, i + 2];
      break;
    }
  }
  return answer;
}
