function solution(s){
    var answer = -1;
    var temp = s.split('');
    // let flag = false;
    // while(true){
    //     flag = false;
    //     for(var i=0;i<temp.length-1;i++){
    //         if(temp[i] == temp[i+1]) {
    //             temp.splice(i,2);
    //             flag = true;
    //             break;
    //         }
    //     }
    //     if (flag == false) {
    //         break;
    //     }
    // }
    // return temp.length>0?0:1;
    
    let stack = [];
    stack.push(s[0]);
    let flag = false;
    for(var i=1;i<s.length;i++){
        flag = false;
        while(stack.length > 0 && stack[stack.length-1]===s[i]){
            flag = true;
            stack.pop();
        }
        if(flag === false) stack.push(s[i])
    }
    
    return stack.length>0?0:1;
}