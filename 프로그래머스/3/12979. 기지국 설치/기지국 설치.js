function solution(n, stations, w) {
    var answer = 0;

//     let stable = new Array(n).fill(0);
//     let scope=w*2+1;
//     for(let i=0;i<stations.length;i++){
//         stable[stations[i]-1] = 1; 
//         for(let k=1;k<=w;k++) {
//             if(stations[i]-k >= 1) {
//                 stable[stations[i]-k-1] = 1;
//             } 
//             if(stations[i]+k <= stable.length){
//                 stable[stations[i]+k-1] = 1;
//             }
//         }
//     }
    
//     while(stable.some(e=>e==0)) {
//         let a = stable.indexOf(0);
// //         let b = stable.indexOf(1, a) != -1 ? stable.indexOf(1, a) : stable.length-1;
// //         let count = Math.ceil((b-a)/scope);
        
// //         answer = answer+count;
// //         stable.fill(1, a, b+1);
        
//         answer++;
//         stable.fill(1,a, a+scope)
//     }
    let start = 0;
    let end = n;
    let scope = w*2+1;
    let distance = 0;
    
    for(let i=0;i<=stations.length;i++){
        if(i === stations.length && stations[i-1] + w < n) {
            distance = n-start;
            answer+=Math.ceil(distance/scope);
        } else if(i !==stations.length){
            distance = stations[i]-w-start-1;
            answer+=Math.ceil(distance/scope);
            start = stations[i]+w;
        }
    }
    
    return answer;
}