function solution(n) {
    var answer = n;
    while(true) {
        answer++;
        if(answer.toString(2).match(/1/g).length == n.toString(2).match(/1/g).length) break;
    }
    return answer;
}