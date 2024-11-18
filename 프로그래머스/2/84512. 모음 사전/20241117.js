function solution(word) {
    var answer = 0;
    let arr = ['A','E','I','O','U'];
    let count = 0;
    const dfs = (str) => {
        if(str.length > 5) return;
        if(str == word) {
            ans = count;
            return;
        }
        count++;
        for(let i=0;i<arr.length;i++){
            dfs(str+arr[i]);
        }
    };
    dfs("");
    return ans;
}