function solution(brown, yellow) {
    var answer = [];
    const sum = (brown+4)/2;
    const mul = brown+yellow;
    
    for(let i=2;i<brown/2;i++){
        if(i*(sum-i) === mul) return [sum-i, i];
    }
    return answer;
}