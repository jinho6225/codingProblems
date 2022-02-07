class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.store = {}
    this.len = 0
  }

  push(value) {
    this.store[this.len] = value
    this.len++
  }
  pop() {
    if (this.len > 0) this.len--
    let popVal = this.store[this.len]
    delete this.store[this.len]
    return popVal;  
  }
  size() {
    return this.len;
  }
}
