function solution(friends, gifts) {
    let answer = 0;
    // 선물 지수 체크
    // 받아야할 선물의 숫자를 배열에 Map으로 저장
    let giftPowerArr = [];
    let needReceiveGift = new Array(friends.length).fill(0);
    for(let i=0;i<friends.length;i++){
        let sendGift = 0;
        let receiveGift = 0;
        let giftPower = 0;
        let giftMap = new Map();
        for(let j=0;j<friends.length;j++){
            if(i!==j){
                giftMap.set(friends[j], 0);
            }
        }
        
        for(let k=0;k<gifts.length;k++){
            let [sender, receiver] = gifts[k].split(' ');
            // console.log(sender, receiver)
            if(sender === friends[i]) {
                sendGift++;
                giftMap.set(receiver, giftMap.get(receiver)+1);
            }
            if(receiver === friends[i]) {
                receiveGift++;
                giftMap.set(sender, giftMap.get(sender)-1);
            }
        }
        giftPower = sendGift-receiveGift;
        giftPowerArr.push([giftPower, giftMap]);
    }
    // console.log(giftPowerArr)
    for(let i=0;i<friends.length;i++){
        for(const [friend, gift] of giftPowerArr[i][1].entries()){
            // console.log(friend, gift);
            let index = friends.indexOf(friend);
            giftPowerArr[index][1].delete(friends[i]);
            if(gift < 0) {
                needReceiveGift[index]++;
            } else if(gift > 0) {
                needReceiveGift[i]++;
            }
            else {
                if(giftPowerArr[i][0] > giftPowerArr[index][0]){
                    needReceiveGift[i]++;
                } else if (giftPowerArr[i][0] < giftPowerArr[index][0]) {
                    needReceiveGift[index]++;
                }
            }
        }
        // console.log(needReceiveGift)
    }
    
    needReceiveGift.sort((a,b)=>(b-a));
    
    return needReceiveGift[0];
}