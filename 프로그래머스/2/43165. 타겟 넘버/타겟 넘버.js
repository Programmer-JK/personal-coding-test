function solution(numbers, target) {
    var answer = 0;
    let visited = new Array(numbers.length).fill(false);
    const bfs = (visited, num) => {
        // console.log(visited, num)
        // let visit = [...visited];
        // if(visit.indexOf(false) == -1){
        //     // console.log(visited, num)
        //     if(num == target){
        //         console.log(visit, num)
        //         answer++;
        //     }
        //     return;
        // }
        // for(let i=0;i<numbers.length;i++){
        //     if(!visit[i]){
        //         visit[i] = true;
        //         bfs(visit, num+numbers[i]);
        //         bfs(visit, num-numbers[i]);
        //     } 
        // }
        let step = visited;
        if(step == numbers.length){
            // console.log(visited, num)
            if(num == target){
                answer++;
            }
            return;
        }
        bfs(step+1, num+numbers[step]);
        bfs(step+1, num-numbers[step]);
    }
    bfs(0, 0);
    console.log(answer);
    return answer;
}