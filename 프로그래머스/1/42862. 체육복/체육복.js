function solution(n, lost, reserve) {
    let realLost = lost.filter(l=> !reserve.includes(l)).sort((a,b)=>(a-b));
    let realReserve = reserve.filter(r=> !lost.includes(r)).sort((a,b)=>(a-b));
    let answer = n-realLost.length;

    
    for(let i=0;i<realLost.length;i++){
        let lostNum = realLost[i];
        for(let k=0;k<realReserve.length;k++){
            let reserveNum = realReserve[k];
            if(reserveNum === lostNum-1 || reserveNum === lostNum+1){
                answer+=1;
                realReserve[k] = -1;
                break;
            }
        }
    }
    
    return answer;
}