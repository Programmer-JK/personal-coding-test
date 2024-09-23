// BFS
function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    let answer = 0;
    let temp = [];
    const visited = new Set();
    const queue = [];
    
    queue.push(begin);
    
    while(queue.length) {
        // 현재 단어 가져옴
        const word = queue.shift();
        visited.add(word);
        
        if(word === target) {
            return answer;
        }
        
        for(let i=0; i<word.length; i++) {
            const letter = slicedWord(word,i);
            const matched = words.filter((v, j) => !visited.has(v) && slicedWord(v, i) === letter);
            // let matched = [];
            // words.forEach(v => {
            //     if(!visited.has(v) && checkWord(word, v)) {
            //         matched.push(v);
            //     }
            // })
            temp.push(...matched);
        }
        
        if(queue.length < 1) {
            answer++;
            queue.push(...temp);
            temp = [];
        }
         
    }
    
    // 하나의 알파벳을 제외하고 나머지 단어가 일치하는지 확인하는 함수
    function slicedWord (word, i) {
        const wordToArray = word.split('');
        wordToArray.splice(i, 1);
        return wordToArray.join('');
    }

    // function checkWord(word, compare) {
    //     let count = 0;
    //     for(let i=0;i<word.length;i++) {
    //         if(word[i] === compare[i]) count++;
    //     }
    //     if(count === word.length-1) return true;
    //     else return false;
    // }

    return answer;
}

// DFS
function DFS_Solution (begin, target, words) {
    if(!words.includes(target)) return 0;
    
    const answers = [];
    
    function dfs(word, index, level, visit) {
        if(index >= words.length) return;
        
        for(let i=0; i<word.length; i++) {
            const letter = sliceWord(word, i);
            const temp = words.filter((v) => !visit.has(v) && sliceWord(v,i) === letter);
            if(temp.includes(target)) {
                answers.push(level+1);
                return;
            }
            
            temp.map((v,j) => {
                const visited = new Set([...visit]);
                visited.add(v);
                dfs(v,j,level+1, visited);
            })
        }
    }
    
    dfs(begin, 0, 0, new Set());
    
    function sliceword(word, i) {
        const wordToArray = word.split('');
        wordToArray.splice(i,1);
        return wordToArray.join('');
    }
    return answer.length < 1 ? 0 : Math.min(...answers);
}
