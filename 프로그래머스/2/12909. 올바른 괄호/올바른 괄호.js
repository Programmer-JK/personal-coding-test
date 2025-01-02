function solution(s){
    var answer = true;
    let stack = [];
    if(s[0] === ")") return false;
    stack.push(s[0]);
    for(let i=1;i<s.length;i++){
        if(s[i] === ")"){
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }

    return stack.length > 0 ? false : true;
}