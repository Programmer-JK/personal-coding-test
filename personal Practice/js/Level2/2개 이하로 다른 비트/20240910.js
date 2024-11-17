function solution(num) {
    var ans = [];
    for (var i=0;i<num.length;i++) {
        var arr = '0'+num[i].toString(2)
        arr = arr.split('');
        
        var finalIndexZero = arr.lastIndexOf('0');
        if(finalIndexZero == arr.length-1) {
            arr[finalIndexZero] = '1';
        } else {
            arr[finalIndexZero] = '1';
            arr[finalIndexZero+1] = '0';
        }
        answer.push(parseInt(arr.join(''),10))
    }
    return answer;
}