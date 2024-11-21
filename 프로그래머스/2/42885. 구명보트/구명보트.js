function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>(b-a));
    // console.log(people)
    let i=0;
    let k=people.length-1;
    while(i<=k){
        if(people[i]+people[k]<=limit){
            i++;
            k--;
        } else {
            i++;
        }
        answer++;
    }
    return answer;
}