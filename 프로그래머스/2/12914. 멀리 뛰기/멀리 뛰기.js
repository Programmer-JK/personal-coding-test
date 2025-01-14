function solution(n) {
    var answer = 0; 
    let arr = [];
    for(let i=0;i<n;i++){
        if(i==0 || i==1) {
            arr[i]=i+1;
        } else {
            arr[i] = (arr[i-1]+arr[i-2])%1234567;
        }
    }
    return arr[n-1];
}