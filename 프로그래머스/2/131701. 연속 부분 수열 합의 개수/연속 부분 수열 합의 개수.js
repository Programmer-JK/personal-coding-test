function solution(elements) {
    var answer = 0;
    let arrExtend = [...elements, ...elements];
    let sumSet = new Set();
    
    for(let len=1;len<=elements.length;len++){
       
        for(let i=0;i<elements.length;i++){   
            let sum = 0;
            for(let k=i; k<i+len; k++){
                sum+=arrExtend[k];
            }
            if(!sumSet.has(sum)){
                sumSet.add(sum);
            }
        }
    }
    
    return sumSet.size;
}