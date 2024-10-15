function solution(arr1, arr2) {
    let answer = [];
    
    for(let i=0;i<arr1.length;i++){
        let temp = [];
        for(let k=0;k<arr2[0].length;k++){
            let sum = 0;
            for(let s=0;s<arr1[0].length;s++){
                sum += arr1[i][s]*arr2[s][k];
            }
            temp.push(sum);
        }
        answer.push(temp);
    }
    
    return answer;
}