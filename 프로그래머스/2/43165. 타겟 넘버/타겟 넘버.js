function solution(numbers, target) {
    var answer = 0;
    const bfs = (visited, num) => {
        let step = visited;
        if(step == numbers.length){
            if(num == target){
                answer++;
            }
            return;
        }
        bfs(step+1, num+numbers[step]);
        bfs(step+1, num-numbers[step]);
    }
    bfs(0, 0);
    return answer;
}