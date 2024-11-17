function solution(progresses, speeds) {
    var answer = [];
    // 먼저 소요시간 측정
    let spendTime = [];
    for(let i=0;i<speeds.length;i++) {
        let leftP = 100 - progresses[i];
        spendTime.push(Math.ceil(leftP/speeds[i]));
    }
    // console.log(spendTime);
    let total = spendTime.length;
    let works = 1;
    let recentWork = spendTime.shift();
    for(let k=1;k<total;k++){
        let thisWork = spendTime.shift();
        // console.log(k, recentWork, thisWork, works)
        if(recentWork >= thisWork){
            works++;
        } else {
            answer.push(works);
            recentWork = thisWork;
            works = 1;
        }
        if(spendTime.length === 0){
            answer.push(works);
        }
        // console.log(k, recentWork, thisWork, works, answer)
    }
    return answer;
}