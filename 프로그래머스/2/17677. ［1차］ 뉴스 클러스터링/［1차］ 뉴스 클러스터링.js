function solution(str1, str2) {
    var answer = 0;
    let arrA = [];
    let arrB = [];
    const reg = /[!@#$%^&*(){}~+=1-9\s]/;
    const reg2 = /[^a-zA-Z]/;
    let interSet = [];
    let interSetCount = 0;
    let unionSet = [];
    let unionSetCount = 0;
    
    for(let i=0;i<str1.length;i++){
        let letter = str1.slice(i, i+2).toUpperCase();
        if(!reg2.test(letter) && letter.length == 2 ){
            arrA.push(letter);
        }
    }
    for(let i=0;i<str2.length;i++){
        let letter = str2.slice(i, i+2).toUpperCase();
        if(!reg2.test(letter) && letter.length == 2 ){
            arrB.push(letter);
        }
    }
    for(let i=0;i<arrA.length;i++){
        if(arrB.includes(arrA[i])){
            const idx = arrB.indexOf(arrA[i]);
            arrB.splice(idx,1);
            interSet.push(arrA[i]);
        } else{
            unionSet.push(arrA[i]);
        }
    }
    unionSet.push(...arrB);
    answer = (interSet.length===0 && unionSet.length===0) ? 65536 : Math.floor(interSet.length/(interSet.length+unionSet.length)*65536);
    return answer;
}