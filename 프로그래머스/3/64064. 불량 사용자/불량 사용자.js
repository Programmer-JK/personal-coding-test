function solution(user_id, banned_id) {
    let answer = new Set();
    const matched = (user_id, banned_id) => {
        if(user_id.length != banned_id.length) return false;
        for(let chIndex=0;chIndex<user_id.length;chIndex++){
            if(banned_id[chIndex]!="*" && banned_id[chIndex] != user_id[chIndex]){
                return false;
            } 
        }
        return true;
    }
    const dfs = (level, selected) => {
        if(level == banned_id.length) {
            // console.log(level, selected)
            answer.add([...selected].sort().join(','));
            return;
        }
        for(let idIndex=0;idIndex<user_id.length;idIndex++){
            // console.log(user_id[idIndex],banned_id[level], matched(user_id[idIndex], banned_id[level]))
            if(!selected.has(idIndex) && matched(user_id[idIndex], banned_id[level])){
                selected.add(idIndex);
                dfs(level+1, selected);
                selected.delete(idIndex);
            }
        }
    }
    dfs(0, new Set());
    
    return answer.size;
}