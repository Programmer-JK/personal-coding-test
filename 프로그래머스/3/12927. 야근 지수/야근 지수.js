class maxHeap {
    constructor() {
        this.heap = [];
    }
    enqueue(v) {
        this.heap.push(v);
        let idx = this.heap.length -1;
        while(idx>0) {
            let parentIdx = Math.floor((idx-1)/2);
            if(this.heap[parentIdx] > this.heap[idx]) return;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }
    dequeue() {
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        let idx = 0;
        while(true) {
            if(this.heap.length === 1) return this.heap.pop();
            let big = idx;
            let left = idx*2+1;
            let right = idx*2+2;
            if(left < this.heap.length && this.heap[left] > this.heap[big]) {
                big = left;
            }
            if(right < this.heap.length && this.heap[right] > this.heap[big]) {
                big = right;
            }
            if(big === idx) break;
            [this.heap[idx], this.heap[big]] = [this.heap[big], this.heap[idx]];
            idx = big;
        }
        return max;
    }
    getArr() {
        return this.heap;
    }
}

function solution(n, works) {
    var answer = 0;
    let heap = new maxHeap();
    for(let i=0;i<works.length; i++) {
        heap.enqueue(works[i]);
    };
    while(n>0) {
        let work = heap.dequeue();
        if(work <= 0) break;
        heap.enqueue(work-1);
        n--;
    }
    answer = n>0 ? 0 : heap.heap.reduce((acc, work)=> acc+ work*work, 0);
    return answer;
}