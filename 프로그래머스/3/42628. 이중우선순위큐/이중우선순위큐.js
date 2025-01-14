function solution(operations) {
    var answer = [];
    let priorityQueue = [];
    for(let i=0;i<operations.length;i++) {
        let sepOp = operations[i].split(" ");
        if(sepOp[0] == "I") {
            priorityQueue.push(parseInt(sepOp[1]));
        } else {
            priorityQueue.sort((a,b)=>a-b);
            if(sepOp[1] =="1") {
                priorityQueue.pop();
            } else {
                priorityQueue.shift();
            }
        }
    }
    priorityQueue.sort((a,b)=>a-b);
    answer = priorityQueue.length > 0 ? [priorityQueue[priorityQueue.length-1], priorityQueue[0]] : [0,0];
    return answer;
}