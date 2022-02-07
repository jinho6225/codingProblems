var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};
  
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
var treeMethods = {};

treeMethods.addChild = function(value) {
  let node = new Tree(value)
  this.children.push(node)
};

treeMethods.contains = function(target) {
  let flag = false
  let cur = this
  function helper(cur) {
    if (!cur) return
    if (cur.value === target) {
      flag = true
      return
    }
    for (let i = 0; i < cur.children.length; i++) {
      helper(cur.children[i])
    }
  }
  helper(cur)  
  return flag
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
