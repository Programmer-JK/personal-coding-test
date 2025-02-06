function solution(want, number, discount) {
  var answer = 0;
  let discountDay = [];

  for (let i = 0; i <= discount.length - 10; i++) {
    discountDay = discount.slice(i, i + 10);
    const count = discountDay.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    let flag = true;
    for (let k = 0; k < want.length; k++) {
      // console.log(i, want[k],number[k],count)
      if (count[want[k]] != number[k]) {
        flag = false;
      }
    }
    if (flag == true) {
      answer++;
    }
  }

  return answer;
}
