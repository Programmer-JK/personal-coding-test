function solution(triangle) {
    let answer = 0;
    const len = triangle.length;
    for(let i=len-1;i>0;i--) {
        for(let k=0;k<triangle[i].length-1;k++){
            if(triangle[i][k] > triangle[i][k+1]){
                triangle[i-1][k] += triangle[i][k];
            } else {
                triangle[i-1][k] += triangle[i][k+1];
            }
        }
    }
    return triangle[0][0];
}