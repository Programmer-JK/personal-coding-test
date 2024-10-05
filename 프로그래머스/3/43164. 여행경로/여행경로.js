function solution(tickets) {
    var answer = [];
    let usedT = new Array(tickets.length).fill(false);
    tickets.sort();
    const dfs = (nowCity, route) => {
        if(usedT.indexOf(false) == -1 && answer.length == 0){
            answer = route;
            return;
        }
        for(let i=0;i<tickets.length;i++){
            const [start, end] = tickets[i];
            if(!usedT[i]&&start == nowCity){
                usedT[i] = true;
                dfs(end, [...route, end]);
                usedT[i] = false;
            }
        }
    }
    dfs("ICN", ["ICN"]);
    return answer;
}