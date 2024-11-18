function solution(n, computers) {
  var answer = 0;
  let visited = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (visited[i] == 1) continue;
    answer++;
    dfs(computers, visited, i);
  }

  return answer;
}

function dfs(table, visited, node) {
  visited[node] = 1;
  for (let i = 0; i < table.length; i++) {
    if (table[node][i] && visited[i] == 0) {
      dfs(table, visited, i);
    }
  }
}
