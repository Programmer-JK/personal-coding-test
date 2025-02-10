function solution(n, info) {
    let result = {
        shoot : [-1],
        gap : 0
    }
    const dfs = (n, index, stack=new Array(11).fill(0)) => {
        if(n === 0) {
            const resultGap = checkGap(stack, info);
            if(result.gap < resultGap || (result.gap === resultGap && isLowerScoreBetter(stack, result.shoot))){
                result.gap = resultGap;
                result.shoot = [...stack];
            }
            return;
        } 
        if(index === 10){
            stack[index] = n;
            const resultGap = checkGap(stack, info);
            if(result.gap < resultGap || (result.gap === resultGap && isLowerScoreBetter(stack, result.shoot))){
                result.gap = resultGap;
                result.shoot = [...stack];
            }
            stack[index] = 0;
            return;
        }
        if(n>0) {         
            for(let i=index; i<info.length;i++) {
                const state = n >= (info[i]+1) ? info[i]+1 : n;
                stack[i] = state;
                dfs((n-state), (i+1), stack);
                stack[i] = 0;
            }
        }
    }
    dfs(n,0);
    console.log(result)
    return result.gap > 0 ? result.shoot : [-1];
}

function checkGap(arrA, arrB) {
    let sumA = 0;
    let sumB = 0;
    for(let i=0;i<11;i++) {
        if(arrA[i] > arrB[i]) {
            sumA += (10-i);
        } else if(arrB[i]>0) {
            sumB += (10-i);
        }
    }
    return sumA>sumB ? sumA-sumB : -1;
}

function isLowerScoreBetter(arrA, arrB) {
    for(let i=10;i>=0;i--) {
        if(arrA[i] !== arrB[i]) {
            return arrA[i] > arrB[i];
        }
    }
    return false;
}