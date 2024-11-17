function solution(s) {
  var answer = "";

  let arr = s.split(" ");
  let arr2 = arr.map(
    (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
  );
  answer = arr2.join(" ");

  return answer;
}
