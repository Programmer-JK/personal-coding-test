function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let arr = "0" + numbers[i].toString(2);
    arr = arr.split("");
    let finalIndexZero = arr.lastIndexOf("0");
    if (finalIndexZero == arr.length - 1) {
      arr[finalIndexZero] = "1";
    } else {
      arr[finalIndexZero] = "1";
      arr[finalIndexZero + 1] = "0";
    }
    answer.push(parseInt(arr.join(""), 2));
  }
  return answer;
}
