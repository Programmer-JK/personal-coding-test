function solution(s) {
    var answer = '';
    let arr = s.split(" ");
    for(let i=0;i<arr.length;i++){
        let Upper = arr[i].substr(0,1).toUpperCase();
        let Lower = arr[i].substr(1).toLowerCase();
        arr[i]=Upper+Lower;
    }
    answer = arr.join(" ");
    return answer;
}