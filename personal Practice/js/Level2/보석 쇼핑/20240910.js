function solution(gems) {
    var answer = [1, gems.length];
    const gemMap = new Map();
    const gemsType = [...new Set(gems)];

    gems.forEach((gem,i) =>{
        gemMap.delete(gem);
        gemMap.set(gem,i);
        if(gemMap.size == gemsType.length) {
            var cand = [gemMap.values().next().value+1, i+1];
            answer = answer[1] - answer[0] < cand[1]-cand[0] ? cand : answer;
        }
    })

    return answer;
}