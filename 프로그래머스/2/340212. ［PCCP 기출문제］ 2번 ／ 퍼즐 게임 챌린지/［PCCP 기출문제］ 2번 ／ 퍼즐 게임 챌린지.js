function solution(diffs, times, limit) {
    var answer = 0;
    // let totalTimes = times[0];
    
    let max = 100000;
    let min = 1;
    let mid = undefined;
    
    while(min<=max) {
        mid = Math.floor((max+min)/2);
        let totalTimes = times[0];
        for(let i=1;i<diffs.length;i++){
            if(diffs[i] <= mid) {
                totalTimes += times[i];
            } else {
                totalTimes += (times[i-1] + times[i])*(diffs[i]-mid) + times[i];
            }
            if(totalTimes > limit) break;
        }
        if(totalTimes > limit) {
            min = mid+1;
        } else {
            answer = mid
            max = mid-1;
        }
    }
    // let level = 1;
    // while(true){
    //     let totalTimes = times[0];
    //     level++;
    //     for(let i=1;i<diffs.length;i++){
    //         if(diffs[i] <= level) {
    //             totalTimes += times[i];
    //         } else {
    //             totalTimes += (times[i-1] + times[i])*(diffs[i]-level) + times[i];
    //         }
    //         if(totalTimes > limit) break;
    //     }
    //     if(totalTimes <= limit){
    //         break;
    //     }
    // }
    // answer = level;
    return answer;
}
