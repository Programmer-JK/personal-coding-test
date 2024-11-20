class minHeap {
    constructor () {
        this.heap = [];
    }
    
    enqueue(v) {
        this.heap.push(v);
        let index = this.heap.length-1;
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            if(this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    dequeue(v){
        if(this.heap.length === 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while(true) {
            let small = index;
            let left = index*2+1;
            let right = index*2+2;
            if(left < this.heap.length && this.heap[left] < this.heap[small]){
                small = left;
            }
            if(right < this.heap.length && this.heap[right] < this.heap[small]){
                small = right;
            }
            if(index === small) break;
            [this.heap[small], this.heap[index]] = [this.heap[index], this.heap[small]];
            index = small;
        }
        return min;
    }
}

function solution(scoville, K) {
    var answer = 0;
    let scovilleHeap = new minHeap();
    for(let index=0;index<scoville.length;index++){
        scovilleHeap.enqueue(scoville[index]);
    }
    while(scovilleHeap.heap[0] < K && scovilleHeap.heap.length > 1){
        let mixFoodScoville = scovilleHeap.dequeue() + scovilleHeap.dequeue()*2;
        scovilleHeap.enqueue(mixFoodScoville);
        answer++;
    }
    if(scovilleHeap.heap[0] < K) {
        return -1
    }
    return answer;
}