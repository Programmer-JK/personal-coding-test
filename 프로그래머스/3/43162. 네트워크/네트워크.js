function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(0);
    const dfs = (graph, visit, node) => {
        visit[node] = 1;
        for(let i=0;i<graph.length;i++) {
            if(graph[node][i] == 1 && visit[i] == 0) {
                dfs(graph, visit, i);
            }
        }
    }
    for(let i=0;i<n;i++){
        if(visited[i] == 1) continue;
        answer++;
        dfs(computers, visited, i);
    }
    return answer;
}