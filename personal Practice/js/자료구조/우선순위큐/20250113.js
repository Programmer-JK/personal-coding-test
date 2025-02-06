class minHeap {
  constructor() {
    this.heap = [];
  }

  enqueue(v) {
    this.heap.push(v);
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[idx]) break;
      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];
      idx = parentIdx;
    }
  }

  dequeue() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let idx = 0;

    while (true) {
      let small = idx;
      const left = idx * 2 + 1;
      const right = idx * 2 + 2;
      if (left < this.heap.length && this.heap[left] < this.heap[small]) {
        small = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[small]) {
        small = right;
      }
      if (small === idx) break;
      [this.heap[idx], this.heap[small]] = [this.heap[small], this.heap[idx]];
      idx = small;
    }
    return min;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  enqueue(v) {
    this.heap.push(v);
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] >= this.heap[idx]) break;
      [this.heap[parentIdx], this.heap];
    }
  }
}
