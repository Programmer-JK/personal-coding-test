function solution(m, n, puddles) {
    var answer = 0;
    // let graph = [];
    // for(let i=0;i<n;i++) {
    //     let temp = [];
    //     for(let k=0;k<m;k++) {
    //         temp.push(0); 
    //     }
    //     graph.push(temp);
    // }
    let graph = Array.from(Array(n+1), ()=>Array(m+1).fill(0))
    graph[0][0] = 1;
    for(let p=0;p<puddles.length;p++){
        graph[puddles[p][1]-1][puddles[p][0]-1] = -1;
    }
    for(let i=0;i<n;i++){
        for(let k=0;k<m;k++) {
            if(graph[i][k] == -1) continue;
            
            if(i>0 && graph[i-1][k] != -1) {
                graph[i][k] = graph[i][k]+graph[i-1][k];
            } 
            
            if(k>0 && graph[i][k-1] != -1){
                graph[i][k] = graph[i][k]+graph[i][k-1];
            }
            graph[i][k] = graph[i][k] % 1000000007;
        }
    }
    return graph[n-1][m-1]
}

// 재귀로 할 시 호출되는 함수가 많아서 효율성에서 아웃됨
// function selfCall(){
//     var answer = 0;
//     let graph = [];
//     for(let i=0;i<n;i++) {
//         let temp = [];
//         for(let k=0;k<m;k++) {
//             temp.push("W");
//         }
//         graph.push(temp);
//     }
//     graph[0][0] = "H";
//     graph[n-1][m-1] = "S";
//     for(let p=0;p<puddles.length;p++){
//         graph[puddles[p][1]-1][puddles[p][0]-1] = "P";
//     }
    
//     move(graph, [0,0]);
    
//     function move(graph, current) {
//         if(graph[current[0]][current[1]] == "S") {
//             answer = (answer+1)%1000000007;
//             return;
//         } else if (graph[current[0]][current[1]] == "P"){
//             return;
//         }
//         if(current[0]+1 < n){
//             move(graph, [current[0]+1, current[1]]);
//         }
//         if(current[1]+1 < m) {
//             move(graph, [current[0], current[1]+1]);
//         }
        
//     }
//     return answer;
// }