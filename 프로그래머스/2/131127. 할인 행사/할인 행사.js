function solution(want, number, discount) {
    let answer = 0;
    let buyMap = new Map();
    let totalWantCount = 0;
    for(let i=0;i<want.length;i++){
        totalWantCount+=number[i];
    }
    
    for(let startDay=0;startDay<discount.length;startDay++){
        let discountList = discount.slice(startDay, startDay+totalWantCount);
        buyMap.clear();
        for(let i=0;i<discountList.length;i++){
            if(buyMap.has(discountList[i])){
                buyMap.set(discountList[i], buyMap.get(discountList[i])+1);
            } else {
                buyMap.set(discountList[i], 1);
            }
        }
        let keyArr = [...buyMap.keys()];
        let checkCount = 0;
        // console.log(keyArr);
        for(let i=0;i<want.length;i++){
            if(buyMap.has(want[i]) && buyMap.get(want[i]) === number[i]){
                checkCount++;
            }
        }
        if(checkCount === number.length) answer++;
    }
    return answer;
}