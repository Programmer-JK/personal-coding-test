function solution(n)
{
    var ans = 1;
    while(n>1){
        if(n%2 === 1){
            n = (n-1)/2;
            ans++;
        } else {
            n = n/2;
        }
    }

    return ans;
}