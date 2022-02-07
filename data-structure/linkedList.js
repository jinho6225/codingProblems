var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!this.head) {
      this.head = new Node(value)
      this.tail = this.head
    } else {
      this.tail.next = new Node(value)
      this.tail = this.tail.next
    }
  };

  list.removeHead = function() {
    let prevHead = this.head.value
    this.head = this.head.next
    return prevHead
  };

  list.contains = function(target) {
    let cur = this.head
    while (cur) {
      if (cur.value === target) return true
      cur = cur.next
    }
    return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
