function solution(n) {
    let answer = 0;
    const max = Math.ceil(n/2);
    for(let i=1;i<=max;i++) {
        let sum = 0;
        let add_num = i;
        while(sum <= n){
            sum+=add_num;
            if(sum === n) {
                answer++;
            } else {
                add_num++;
            }
        }
    }
    return n==1? 1 : answer+1;
}