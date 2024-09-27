function solution(numbers) {
    var answer = [];
    for (var i=0;i<numbers.length;i++){
        var arr = "0"+numbers[i].toString(2)
        arr = arr.split('')
        // console.log(arr)
        
        var finalIndexZero = arr.lastIndexOf('0')
        // console.log(finalIndexZero)
        if(finalIndexZero == arr.length-1){
            arr[finalIndexZero]='1';
        } else {
            // var finalIndexOne = arr.lastIndexOf('1');
            arr[finalIndexZero]='1';
            arr[finalIndexZero+1]='0';
        }
        // console.log(arr)
        answer.push(parseInt(arr.join(''),2))
    }
    return answer;
}