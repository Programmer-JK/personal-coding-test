class minHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(v) {
        this.heap.push(v);
        let index = this.heap.length -1;
        while(index > 0) {
            const parentIndex = Math.floor((index-1)/2);
            if(this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    dequeue() {
        if(this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;

        while(true) {
            let small = index;
            const left = 2*index +1;
            const right = 2*index +2;
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

class minHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(v) {
        this.heap.push(v);
        let index = this.heap.length -1;
        while(index > 0) {
            const parentIndex = Math.floor((index-1)/2);
            if(this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    dequeue() {
        if(this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;

        while(true) {
            let small = index;
            const left = 2*index +1;
            const right = 2*index +2;
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
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        let left = index*2+1;
        while(true) {
            let big = index;
            let right = index*2+2;
            if(left < this.heap.length && this.heap[left] > this.heap[index]){
                big = left;
            }
            if(right < this.heap.length && this.heap[right] > this.heap[index]){
                big = right;
            }
            if(big === index) break;
            [this.heap[big], this.heap[index]] = [this.heap[index], this.heap[big]];
            index = big;
        }
        return max;
    }
}

class minHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(v) {
        this.heap.push(v);
        let index = this.heap.length -1;
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            if(this.heap[parentIndex] < this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index = parentIndex;
        }
    }
    
    dequeue() {
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while(true) {
            let small = index;
            let left = index*2+1;
            let right = index*2+2;
            if(left < this.heap.length && this.heap[left] < this.heap[small]){
                small = left
            }
            if(right < this.heap.length && this.heap[right] < this.heap[small]){
                small = right
            }
            if(small === index) break;
            [this.heap[small], this.heap[index]] = [this.heap[index], this.heap[small]]
            index = small;
        }
        return min;
    }
}