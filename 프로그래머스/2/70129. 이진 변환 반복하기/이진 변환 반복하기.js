function solution(s) {
    let answer = [];
    let doCnt = 0;
    let ReCnt = 0;
    while(s.length > 1) {
        let arr = s.split('');
        let newArr = [];
        for(let i=0;i<arr.length;i++) {
            if(arr[i] == "0") {
                ReCnt++;
            } else {
                newArr.push(arr[i]);
            }
        }
        s = newArr.length.toString(2);
        // console.log(arr, newArr, s);
        doCnt++;
    }
    return [doCnt, ReCnt];
}