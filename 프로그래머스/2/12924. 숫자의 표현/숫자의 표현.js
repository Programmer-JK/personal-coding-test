function solution(n) {
    var answer = 0;
    for(var i=1;i<=n;i++){
        var sum = i;
        for(var k=i+1;sum<n;k++){
            sum+=k;
        }
        if(sum===n) answer++;
    }
    return answer;
}