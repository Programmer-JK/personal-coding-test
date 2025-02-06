function solution(numbers, target) {
  var answer = 0;
  const dfs = (num, sum) => {
    if (num == numbers.length && sum == target) answer++;
    if (num > numbers.length - 1) return;
    let minusSum = sum - numbers[num];
    let plusSum = sum + numbers[num];
    dfs(num + 1, minusSum);
    dfs(num + 1, plusSum);
  };
  dfs(0, 0);
  return answer;
}
