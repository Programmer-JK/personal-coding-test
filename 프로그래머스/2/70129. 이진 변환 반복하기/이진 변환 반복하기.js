function solution(s) {
    var answer = [];
    
    var removeZeroCount = 0;
    var removeZeroTime = 0;
    
    while(s.length > 1) {
        var result = [];
        for(var i=0;i<s.length;i++){
            if(s[i] == '1'){
                result.push(s[i]);
            } else {
                removeZeroCount++;
            }
        }
        removeZeroTime++;
        s = result.length.toString(2);
    }
    
    answer = [removeZeroTime, removeZeroCount]
    return answer;
}