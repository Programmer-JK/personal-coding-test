function solution(N, number) {
    var answer = -1;
    let dp = Array.from({length:9}, () => new Set());
    for(let i=1;i<=8;i++){
        dp[i].add(Number(new String(N).repeat(i)));
        for(let k=1;k<=i;k++){
            for(const num1 of dp[k]){
                for(const num2 of dp[i-k]){
                    dp[i].add(num1+num2);
                    dp[i].add(num1-num2);
                    dp[i].add(num1*num2);
                    dp[i].add(Math.floor(num1/num2));
                }
            }
        }
        if(dp[i].has(number)) return i;
    }
    // console.log(dp)
    return answer;
}