class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.len = 0;
    this.key = 0
    this.store = {};
  }

  size() {
    return this.len-this.key;
  };

  enqueue(val) {
    this.store[this.len] = val
    this.len++
  };

  dequeue() {
    let dequeVal = this.store[this.key]
    delete this.store[this.key]
    if (this.len > this.key) this.key++
    return dequeVal; 
  };

}
