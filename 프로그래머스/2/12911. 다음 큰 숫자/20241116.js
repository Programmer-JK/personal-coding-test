function solution(n) {
  let answer = n;
  while (true) {
    answer++;
    if (countOne(n) === countOne(answer)) break;
  }
  return answer;
}

function countOne(n) {
  let count = 0;
  let temp = n.toString(2);
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "1") count++;
  }
  return count;
}
