function solution(video_len, pos, op_start, op_end, commands) {
    let curPos = skipOp(pos, op_start, op_end);
    commands.forEach((command)=> {
        if(command === 'next') {
            curPos = next(video_len, curPos);
        } else {
            curPos = prev(curPos);
        }
        curPos = skipOp(curPos, opStart, op_end);
    })
    return curPos;
}

function formatTime(secStamp) {
    const minute = Math.floor(secStamp/60).toString();
    const second = (secStamp%60).toString();
    return [minute.padStart(2,'0'), second.padStart(2,'0')].join(":");
}

function getSecStamp(mmss) {
    const mm = parseInt(mmss.split(":")[0]);
    const ss = parseInt(mmss.split(":")[1]);
    return mm*60 + ss;
}

function isInOp(curPos, opStart, opEnd) {
    const posStamp = getSecStamp(curPos);
    const startStamp = getSecStamp(opStart);
    const endStamp = getSecStamp(opEnd);
    return startStamp <= posStamp && posStamp <= endStamp;
}

function prev(curPos){
    let curStamp = getSecStamp(curPos);
    curPos -= 10;
    if(curStamp < 0) return formatTime(0);
    return formatTime(curStamp);
}

function next(videoLen, curPos) {
    const videoTotalStamp = getSecStamp(videoLen)
    let curStamp = getSecStamp(curPos);
    curPos += 10;
    if(curStamp > videoTotalStamp) return formatTime(videoTotalStamp);
    return formatTime(curStamp);
}

function skipOp(curPos, opStart, opEnd){
    if(isInOp(curPos, opStart, opEnd)) return opEnd;
    return curPos;
}