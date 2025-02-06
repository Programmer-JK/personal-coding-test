function solution(people, limit) {
  var answer = 0;
  //오름차순 정렬
  let sortPeople = people.sort((a, b) => a - b);
  let i = 0;
  let k = sortPeople.length - 1;
  while (i <= k) {
    if (sortPeople[i] + sortPeople[k] <= limit) {
      i++;
      k--;
    } else {
      k--;
    }
    answer++;
  }
  return answer;
}
