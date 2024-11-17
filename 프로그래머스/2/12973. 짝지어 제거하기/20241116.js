function solution(s) {
  let answer = -1;
  let temp = s.split("");

  let stack = [];
  stack.push(s[0]);
  let flag = false;
  for (let i = 1; i < s.length; i++) {
    flag = false;
    while (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      flag = true;
      stack.pop();
    }
    if (flag == false) stack.push(s[i]);
  }
  return stack.length > 0 ? 0 : 1;
}
