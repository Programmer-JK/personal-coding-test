function solution(triangle) {
    var answer = 0;
    for(let i=triangle.length-1;i>0;i--){
        for(let k=0;k<triangle[i].length-1;k++){
            triangle[i-1][k] += Math.max(triangle[i][k], triangle[i][k+1]);
        }
    }
    return triangle[0][0];
}