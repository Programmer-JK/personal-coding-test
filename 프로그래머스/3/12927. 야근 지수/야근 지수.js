class maxHeap {
    constructor() {
        this.heap = [];
    }
    
    enqueue(v) {
        this.heap.push(v);
        let index = this.heap.length -1;
        while(index > 0) {
            const parentIndex = Math.floor((index-1)/2);
            if(this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        } 
    }
    
    dequeue() {
        if(this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while(true) {
            let big = index;
            const left = 2*index+1;
            const right = 2*index+2;
            
            if(left < this.heap.length && this.heap[left] > this.heap[big]) {
                big = left;
            }
            if(right < this.heap.length && this.heap[right] > this.heap[big]) {
                big = right;
            }
            
            if(big === index) break;
            [this.heap[index], this.heap[big]] = [this.heap[big], this.heap[index]];
            index = big;
        }
        return max;
    }
}

function solution(n, works) {
    var answer = 0;
    let max = new maxHeap();
    
    works.forEach(e => max.enqueue(e));
    // console.log(max.heap)
    
    for(let i=0;i<n;i++){
        if(max.heap[0] >0) {
            let a = max.dequeue();
            a--;
            max.enqueue(a);
        } else {
            break;
        }
    }
    
//     for(let i=0;i<n;i++){
//         temp = temp.sort((a,b)=>b-a);
//         if(temp[0] > 0){
//             temp[0]--;
//         } else {
//             break;
//         }
//     }
    
    for(let k=0;k<max.heap.length;k++){
        answer += max.heap[k] * max.heap[k]
    }
    
    return answer;
}