function solution(A, B) {
    let answer = 0;
    
    let A_sort = A.sort((a,b) => a-b);
    let B_sort = B.sort((a,b) => a-b);
    
    let pointA = 0;
    let pointB = 0;
    
    while(pointA < A.length && pointB < B.length) {
        if(A_sort[pointA] < B_sort[pointB]) {
            pointA++;
            pointB++;
            answer++;
        } else {
            pointB++;
        }
    }
//     7 5 3 1
//     8 4 2 2
//     2
    
//     7 5 3 1
//     8 2 4 2
//     3
    
//     for(let i=0;i<A.length;i++) {
//         if(B_Big[i] > A_Big[i]) {
//             answer++;
//         } else {
//             let k = i;
//             while(A_Big[k] > B_Big[k] && k<B.length-1) {
//                 let temp = B_Big[k]
//                 B_Big[k] = B_Big[k+1];
//                 B_Big[k+1] = temp;
//                 k++;
//             }
//         }
//     }
    
    return answer;
}