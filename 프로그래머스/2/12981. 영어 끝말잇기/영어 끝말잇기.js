function solution(n, words) {
    var answer = [0.,0];
    var wordArr = [words[0]];
    
    for(let i=1;i<words.length;i++){
        if(wordArr.indexOf(words[i]) != -1 || words[i-1][words[i-1].length-1] !== words[i][0]){
            answer = [(i+1)%n===0?n:(i+1)%n, Math.ceil((i+1)/n)]
            break;
        } else {
            wordArr.push(words[i])
        }
    }
    
    
    return answer;
}