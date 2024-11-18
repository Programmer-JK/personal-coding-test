function solution(maps) {
    let answer = -1;
    let moveCount = 0;
    let queue = [];
    let visited = [...maps];
    const moveX = [1,-1,0,0];
    const moveY = [0,0,1,-1];
    const maxX = maps[0].length-1;
    const maxY = maps.length-1;
    
    queue.push([0,0]);
    visited[0][0] = 0;
    while(queue.length > 0){
        moveCount++;
        let size = queue.length;
        for(let i=0; i<size; i++){
            let [curX, curY] = queue.shift();
            for(let k=0;k<4;k++){
                let nextX = curX+moveX[k];
                let nextY = curY+moveY[k];
                
                if(nextX == maxX && nextY == maxY ) return ++moveCount;
                
                if(nextX <= maxX && nextX >= 0 && nextY <= maxY && nextY >= 0){
                    if(visited[nextY][nextX]){
                        queue.push([nextX, nextY]);
                        visited[nextY][nextX] = 0;
                    }
                }
            }
        }
    }
    
    return answer;
}