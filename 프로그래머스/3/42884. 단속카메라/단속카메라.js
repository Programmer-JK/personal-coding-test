function solution(routes) {
    var answer = 1;
    
    routes.sort((a,b)=>a[1]-b[1]);
    
    let point = routes[0][1];
    
    for(let i=0;i<routes.length;i++) {
        if(point>=routes[i][0] && point <= routes[i][1]) {
            continue;
        } else {
            point = routes[i][1];
            answer++;
        } 
    }
    
    return answer;
}