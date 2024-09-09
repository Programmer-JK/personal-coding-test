function F(n) {
    if(n < 2) return n;
    else return F(n-1)+F(n-2);
}

function solution(n) {
    var answer = 0;
    var num = [0,1];
    for(let i=2;i<n+1;i++){
        num[i] = ((num[i-1] + num[i-2]) %1234567);
    }
    return num[n];
}