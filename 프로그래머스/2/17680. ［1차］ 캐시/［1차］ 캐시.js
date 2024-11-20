function solution(cacheSize, cities) {
    var answer = 0;
    let cacheMemory = new Array(cacheSize);
    const cacheHit = 1;
    const cacheMiss = 5;
    
    if(cacheSize===0) {
        return cacheMiss*cities.length;
    }
    
    for(let cityIndex=0;cityIndex<cities.length;cityIndex++) {
        const city = cities[cityIndex].toUpperCase();
        if(cacheMemory.includes(city)){
            let curIndex = cacheMemory.indexOf(city);
            cacheMemory.splice(curIndex,1);
            cacheMemory.push(city);
            answer+=cacheHit;
        } else {
            if(cacheMemory.length === cacheSize){
                cacheMemory.shift();   
            }
            cacheMemory.push(city);
            answer+=cacheMiss;
        }
    }
    
    return answer;
}