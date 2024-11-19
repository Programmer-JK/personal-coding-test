function solution(sticker) {
    const len = sticker.length + 2;
    const dp1 = new Array(len).fill(0);
    const dp2 = new Array(len).fill(0);
    
    if(sticker.length === 1) return sticker[0];
    
    for(let i=2;i<len-1;i++){
        dp1[i] = Math.max(dp1[i-1], dp1[i-2]+sticker[i-2])
    };
    // console.log(dp1)
    for(let i=3;i<len;i++){
        dp2[i] = Math.max(dp2[i-1], dp2[i-2]+sticker[i-2]);   
    }    
    // console.log(dp2)
    return Math.max(dp1[len-2], dp2[len-1]);
    // 1. 원형을 만들어줘야돼 0일때 왼쪽인덱스 지정, 최대 인덱스일 때 오른쪽 인덱스 지정
    // m=arr.length-1; if(arr[0]) arr[m]
    // 2. BFS 사용
    // 종료 조건 : 다 뜯겨졌을 때, 더 뜯을 스티커가 없을 때
    // 시작을 순차적으로 지정
    
//     let answer = [];
//     let leftIndex = sticker.length -1;
//     let rightIndex = 0;
//     for(let i=0;i<2;i++){
//         let visited = new Array(sticker.length).fill(0);
//         let sum = 0;
//         DFS(i, visited, sticker, sum);
// //         let queue = [];
// //         let temp = [];
// //         let sum = 0;
// //         queue.push(i);
// //         if(i==0) {
// //             visited[leftIndex] = 1;
// //             visited[1] = 1;
// //         } else if (i==sticker.length-1) {
// //             visited[rightIndex] = 1;
// //             visited[sticker.length-2] = 1;
// //         } else {
// //             visited[i-1] = 1;
// //             visited[i+1] = 1;
// //         }
// //         visited[i] = 1;
        
// //         while(queue.length > 0){
// //             let size = queue.length;
// //             const node = queue.shift();
// //             console.log(sum, visited, queue)
// //             for(let j=0;j<size;j++){
// //                 for(let k=0;k<sticker.length;k++) {
// //                     if(visited[k]==0){
// //                         temp.push(k);
// //                     }
// //                 }
// //             }
// //         }
// //         answer.push(sum);
//     }
    
//     function DFS(node, visited, sArr, sum) {
//         let flag = false;
//         sum += sArr[node];
//         if(node==0) {
//             visited[sticker.length -1] = 1;
//             visited[1] = 1;
//         } else if (node==sticker.length-1) {
//             visited[0] = 1;
//             visited[node-1] = 1;
//         } else {
//             visited[node-1] = 1;
//             visited[node+1] = 1;
//         }
//         visited[node] = 1;
//         for(let i=0;i<sArr.length;i++) {
//             if(visited[i] == 0) {
//                 flag = true;
//                 DFS(i, visited, sArr, sum);
//             }
//         }
//         if(!flag.) answer.push(sum);
//     }
//     answer.sort((a,b)=>(b-a));
//     return answer[0];
}
