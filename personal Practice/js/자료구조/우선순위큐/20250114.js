class minHeap {
  constructor() {
    this.heap = [];
  }
  enqueue(v) {
    this.heap.push(v);
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] < this.heap[idx]) break;
      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];
      idx = parentIdx;
    }
  }
  dequeue() {
    if (this.heap.length === 1) return this.heap.pop();
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let idx = 0;
    while (true) {
      let small = idx;
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      if (left < this.heap.length && this.heap[left] < this.heap[small]) {
        small = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[small]) {
        small = right;
      }
      if (small === idx) return;
      [this.heap[small], this.heap[idx]] = [this.heap[idx], this.heap[small]];
      idx = small;
    }
    return min;
  }
}

class maxHeap {
  constructor() {
    this.heap = [];
  }
  enqeueu(v) {
    this.heap.push(v);
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] > this.heap[idx]) break;
      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];
      idx = parentIdx;
    }
  }
  dequeue() {
    if (this.heap.length == 1) return this.heap.pop();
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    let idx = 0;
    while (true) {
      let big = idx;
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      if (left < this.heap.length && this.heap[left] > this.heap[big]) {
        big = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[big]) {
        big = right;
      }
      if (big === idx) break;
      [this.heap[big], this.heap[idx]] = [this.heap[idx], this.heap[big]];
      idx = big;
    }
    return max;
  }
}

function solution(s) {
  let heap = new maxHeap();
  heap.enqueue("a");
}
