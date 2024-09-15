function solution(arr) {
    var answer = arr[arr.length-1];
    let num = 1;
    while(true) {
        let number = answer*num;
        let count = 0;
        arr.forEach(e=>{
            if(number%e == 0) count++; 
        })
        if(count == arr.length) {
            answer = number;
            break;  
        } else {
            num++;
        }
    }
    return answer;
}