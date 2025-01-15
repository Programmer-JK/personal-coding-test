function solution(k, dungeons) {
    var answer = -1;
    let visited = new Array(dungeons.length).fill(false);
    let countArr = [];
    const dfs = (count, tired, visited) => {
        if(visited.indexOf(false) == -1 || tired<=0) {
            countArr.push(count);
            return;
        }
        let over = true;
        for(let i=0;i<dungeons.length;i++) {
            if(!visited[i] && tired>=dungeons[i][0]) {
                visited[i] = true;
                dfs(count+1, tired-dungeons[i][1], visited);
                visited[i] = false;
                over = false;
            }
        }
        if(over) {
            countArr.push(count);
            return;
        }
    };
    dfs(0, k, visited);
    answer = Math.max(...countArr);
    return answer;
}