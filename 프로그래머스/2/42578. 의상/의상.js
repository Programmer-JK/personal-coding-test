function solution(clothes) {
    const clothesMap = {};
    let answer = 1;
    
    for(let i=0;i<clothes.length;i++) {
        const [type, name] = clothes[i];
        if(clothesMap.hasOwnProperty(name)) {
            clothesMap[name]++;
        }
        else {
            clothesMap[name] = 1;
        }
    }
    
    for(const key in clothesMap) {
        answer *= (clothesMap[key]+1);
    }
    return answer - 1;
}