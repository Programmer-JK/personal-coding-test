function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>a-b);
    while(people.length > 0) {
        let low = 0;
        let big = people.length -1;
        if(people[big]+people[low] > limit) {
            people.pop();
        } else {
            people.pop();
            people.shift();
        }
        answer++;
    }
    return answer;
}