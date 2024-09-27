function findDistance(maps, start, target) {
    var moveCount = 0;
    let moveX = [1,-1,0,0];
    let moveY = [0,0,1,-1];

    var goX = 0;
    var goY = 0;
    
    maps[start[0]][start[1]] = 'X'
    
    var queue = [start];
    
    while (queue.length > 0) { 
        var size = queue.length;
        for(var i=0; i<size; i++){
            let [x,y] = queue.shift();
            for(var k = 0;k<4;k++) {
                goX = x + moveX[k];
                goY = y + moveY[k];
                if(goX>=0 && goX<maps.length && goY>=0 && goY<maps[0].length && maps[goX][goY]!=='X'){
                    if(maps[goX][goY] === target){
                        return moveCount+1;
                    } else {
                        queue.push([goX,goY]);
                        maps[goX][goY] = 'X';   
                    }
                } else {
                    continue;
                }
            }
        }
        moveCount++;
    }
    
    return -1;
}

function solution(maps) {
    var answer = 0;
    var findLever = -1;
    var findExit = -1;

    var start = [];
    var lever = [];
    var exit = [];
    
    // Find Start Point, Lever Point (Starting Point)
    for(let i=0; i<maps.length; i++) {
        for(let k=0; k<maps[i].length; k++) {
            if(maps[i][k] === "S") {
                start = [i,k];  
            } else if(maps[i][k] === "L") {
                lever = [i,k];
            } 
        }
    }
    
    let mapsLever = maps.map(item => item.split(''));
    let mapsExit = maps.map(item => item.split(''));
    findLever = findDistance(mapsLever, start, 'L');
    findExit = findDistance(mapsExit, lever, 'E');

    if (findLever !== -1 && findExit !== -1) {
        answer = findLever + findExit;   
    } else {
        answer = -1;
    }
    
    return answer;
}