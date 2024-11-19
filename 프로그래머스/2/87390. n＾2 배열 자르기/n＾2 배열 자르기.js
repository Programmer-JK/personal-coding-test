function solution(n, left, right) {
    var answer = [];
    // 배열 생성
    // let arr = [];
    // for(let i=left;i<n;i++){
    //     for(let k=0;k<n;k++){
    //         if(i<=k){
    //             arr.push(k+1);
    //         } else {
    //             arr.push(i+1);
    //         }
    //     }        
    // }
    // answer = arr.slice(left, right+1);
    
    for(let i=left+1;i<=right+1;i++){
        let x = i%n==0 ? n : i%n;
        let y = Math.ceil(i/n);
        answer.push(Math.max(x,y));
    }
    return answer;
}