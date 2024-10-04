function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    let answer = 0;
    let temp = [];
    const visited = new Set();
    const queue = [];

    queue.push(begin);

    while(queue.length) {
        const word = queue.shift();
        visited.add(word);
        if(word === target) {
            return answer;
        }
        for(let i=0;i<word.length; i++) {
            const letter = sliceWord(word,i);
            const matched = words.filter((v) => !visited.has(v) && sliceWord(v,i) === letter);
            temp.push(...matched);
        }
        if(queue.length < 1) {
            answer++;
            queue.push(...temp);
            temp = [];
        }
    }

    function sliceWord(word,i) {
        const wordToArray = word.split('');
        wordToArray.splice(i,1);
        return wordToArray.join();
    }
    return answer;
}

function DFS_Solution(begin,target,words) {
    if(!words.includes(target)) return 0;
    const answers = [];
    function dfs(word, index, level, visit) {
        if(index >= words.length) return;
        for(let i=0;i<word.length;i++) {
            const letter = sliceWord(word,i);
            const temp = words.filter((v) => !visit.has(v) && sliceWord(v,i) === letter);
            
            if(temp.includes(target)){
                answers.push(level+1);
                return;
            }

            temp.map((v,j) => {
                const visited = new Set([...visit]);
                visited.add(v);
                dfs(v,j,level+1,visited);
            })
        }
    }

    dfs(begin, 0, 0, new Set());

    function sliceWord(word, i){
        const wordToArray = word.split('');
        wordToArray.splice(i,1);
        return wordToArray.join('');
    }
    return answers.length < 1 ? 0 : Math.min(...answers);
}

function ThirdSolution(begin, target, words) {
    const queue = [begin];
    const visitArr = new Array(words.length).fill(false);
    let ctr = 0;
    let shiftedWord = begin;
    let queueLeng = 1;

    while(queue.length > 0) {
        shiftedWord = queue.shift();
        queueLeng--;

        for(let i in words) {
            if(check(shiftedWord, words[i])) {
                if(visitArr[i] == true) {
                    continue;
                }
                if(words[i] == target) {
                    return ctr+1;
                }
                visitArr[i] = true;
                queue.push(words[i]);
            }
        }

        if(queueLeng == 0) {
            ctr++;
            queueLeng = queue.length;
        }
    }
    return 0;
    function check(standard, word){
        let diffctr = 0;
        if(standard.length != word.length) {
            return false;
        }
        for(let i=0;i<standard.length;i++) {
            if(standard.charAt(i) != word.charAt(i)){
                diffctr++;
            }
            if(diffctr > 1) {
                return false;
            }
            return true;
        }
    }
}
