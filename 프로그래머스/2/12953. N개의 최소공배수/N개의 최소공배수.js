function gcd(a,b) {
    let mod = a%b;
    if(mod === 0) return b;
    return gcd(b, mod);
}

function solution(arr) {
    var answer = 0;
    let temp = [];
    temp.push(arr[0]);
    for(let i=1;i<arr.length;i++){
        let a = temp.pop();
        let gcdNum = gcd(a, arr[i]);
        temp.push((a/gcdNum)*(arr[i]/gcdNum)*gcdNum);
    }
    console.log(temp)
    return temp[0];
}