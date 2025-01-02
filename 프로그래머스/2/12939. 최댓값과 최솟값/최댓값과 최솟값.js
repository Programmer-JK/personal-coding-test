function solution(s) {
    let answer = '';
    let arr = s.split(" ");
    let small = parseInt(arr[0]);
    let big = parseInt(arr[0]);
    let number =  0;
    for(let i=1;i<arr.length;i++) {
        number = parseInt(arr[i])
        if(number < small) small = number;
        if(number > big) big = number;
    }
    answer += small;
    answer += " "+big;
    return answer;
}