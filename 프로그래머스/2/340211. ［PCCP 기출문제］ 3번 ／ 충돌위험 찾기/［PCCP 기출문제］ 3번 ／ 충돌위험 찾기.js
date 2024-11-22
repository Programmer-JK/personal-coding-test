function solution(points, routes) {
    let answer = 0;
    let robots_history = [];
    let robotsNum = routes.length;
    
    const moveCheck = (startR, startC, targetR, targetC) => {
        let curR = startR;
        let curC = startC;
        let temp = [];
        while(curR != targetR){
            if(curR > targetR){
                temp.push([--curR, curC]);
            } else {
                temp.push([++curR, curC]);
            }
        }
        while(curC != targetC){
            if(curC > targetC){
                temp.push([curR, --curC]);
            } else {
                temp.push([curR, ++curC]);
            }
        }
        return temp;
    }
    for(let i=0;i<routes.length;i++){
        let temp = [points[routes[i][0]-1]];
        for(let k=1;k<routes[i].length;k++){
            const [startR,startC] = points[routes[i][k-1]-1];
            const [targetR, targetC] = points[routes[i][k]-1];
            temp.push(...moveCheck(startR, startC, targetR, targetC));
        }
        robots_history.push([...temp]);
    }
    robots_history.sort((a,b)=>(b.length-a.length));
    // console.log(robots_history);
    for(let i=0;i<robots_history[0].length;i++){
        let crush =[];
        for(let k=0;k<robotsNum;k++){
            for(let j=0;j<robotsNum;j++){
                if(k == j) continue;
                // console.log("a", robots_history[k][i],robots_history[j][i])
                if(robots_history[k][i] && robots_history[j][i] && robots_history[k][i][0] == robots_history[j][i][0] && robots_history[k][i][1] == robots_history[j][i][1]){
                    const alreadyCrush = crush.some((point) => {
                        const [r1, c1] = point;
                        const [r2, c2] = robots_history[k][i];
                        return r1===r2 && c1===c2;
                    })
                    if(!alreadyCrush){
                       crush.push(robots_history[k][i]);
                    }
                }
            }
        }
        // console.log(crush)
        answer+= crush.length;
    }
    return answer;
}