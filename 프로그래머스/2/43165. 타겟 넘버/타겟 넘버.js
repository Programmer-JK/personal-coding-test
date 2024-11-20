function solution(numbers, target) {
    let answer = 0;
    const dfs = (num, index)=>{
        if(index == numbers.length) {
            if(num == target) answer++;
            return;
        }
        dfs(num+numbers[index], index+1)
        dfs(num-numbers[index], index+1)
    }
    dfs(0,0);
    return answer;
}