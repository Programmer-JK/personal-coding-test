function solution(ability) {
    let student = ability.length;
    let sport = ability[0].length;
    let visited = new Array(student).fill(false);
    let maxSum = 0;
    const dfs = (sum, count) => {
        if(count === sport) {
            maxSum = Math.max(sum, maxSum);
            return;
        }
        for(let i=0;i<student;i++){
            if(!visited[i]){
                visited[i] = true;
                dfs(sum+ability[i][count], count+1);
                visited[i] = false;
            }
        }
    }
    dfs(0,0);
    return maxSum;
}