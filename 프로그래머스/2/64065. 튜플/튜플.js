function solution(s) {
    var answer = [];
    let arrSet = [];
    let setA = new Set();
    let arrStr = s.replace("{{", "").replace("}}","").split("},{");
    
    arrStr.sort((a,b)=>(a.length - b.length));
    
    for(let i=0;i<arrStr.length;i++) {
        arrSet.push(arrStr[i].split(",").map((v)=>parseInt(v)));
    }
    
    for(let k=0;k<arrSet.length;k++){
        for(let c=0;c<arrSet[k].length;c++){
            if(!setA.has(arrSet[k][c])){
                setA.add(arrSet[k][c]);
                answer.push(arrSet[k][c]);
            }
        }
    }
    
    return answer;
}