function solution(expression) {
    var answer = 0;
    let result = [];
    let priority = [["+","-","*"], ["+","*","-"], ["-","+","*"],["-","*","+"],["*","-","+"],["*","+","-"]];
    for(let i=0;i<priority.length;i++) {
        let numStack = [];
        let opStack = [];
        const tokens = expression.match(/\d+|\+|\-|\*/g);
        for(let k=0;k<tokens.length;k++){
            if(isNaN(tokens[k])) {
                while(opStack.length > 0 && priority[i].indexOf(opStack[opStack.length-1]) >= priority[i].indexOf(tokens[k])){
                    const oper = opStack.pop();
                    const b = numStack.pop();
                    const a = numStack.pop();
                    switch(oper) {
                        case "+" : numStack.push(Number(a)+Number(b)); break;
                        case "-" : numStack.push(Number(a)-Number(b)); break;
                        case "*" : numStack.push(Number(a)*Number(b)); break;
                    }
                }
                opStack.push(tokens[k]);
            } else {
                numStack.push(tokens[k]);
            }
            // console.log(i,"numStack", numStack, "opStack", opStack)
        }
        while(opStack.length > 0) {
            const oper = opStack.pop();
            const b = numStack.pop();
            const a = numStack.pop();
            switch(oper) {
                case "+" : numStack.push(Number(a)+Number(b)); break;
                case "-" : numStack.push(Number(a)-Number(b)); break;
                case "*" : numStack.push(Number(a)*Number(b)); break;
            }
        }
        if(numStack[0] < 0) numStack[0] *= (-1);
        result.push(numStack[0]);
    }
    // console.log(result)
    result.sort((a,b)=>b-a);
    return result[0];
}