function solution(k, tangerine) {
    let answer = 0;
    const counts = new Map();
    
    for (const size of tangerine){
        counts.set(size, (counts.get(size) || 0)+1);
    }
    let sort = [...counts.values()].sort((a,b) => b - a)
    if(sort[0] >= k) return 1;
    for (const t of sort) {
        answer++;
        if(k>t) k = k-t;
        else break;
    }
    return answer;
}