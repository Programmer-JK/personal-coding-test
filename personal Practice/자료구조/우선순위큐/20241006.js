class minHeap {
    constructor (){
        this.heap = [];
    }
    enqueue(v) {
        this.heap.push(v);
        let index = this.heap.length -1;
        while(index > 0) {
            let parentIndex = Math.floor((index-1/2));
            if(this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parent;
        }
    }
    dequeue() {
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while(true) {
            let small = index;
            let left = 2*index +1;
            let right = 2*index +2;
            if(left < this.heap.length && this.heap[left] < this.heap[small]) {
                small = left;
            }
            if(right < this.heap.length && this.heap[right] < this.heap[small]) {
                small = right;
            }
            if(small === index) break;
            [this.heap[index], this.heap[small]] = [this.heap[small], this.heap[index]];
            index = small;
        }
        return min;
    }
}


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
        if(this.heap.length == 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;

        while(true) {
            let big = index;
            let left = 2*index+1;
            let right = 2*index+2;
            if(left < this.heap.length && this.heap[left] > this.heap[big]) {
                big = left
            }
            if(right < this.heap.length && this.heap[right] > this.heap[big]) {
                big = right;
            }
            if(big == index) break;
            [this.heap[big], this.heap[index]] = [this.heap[index], this.heap[big]];
            index = big;
        }
        return max;
    }
}