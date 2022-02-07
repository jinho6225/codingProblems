var BinarySearchTree = function(value) {
    let bst = Object.create(treeMethods)
    bst.value = value
    bst.left = null
    bst.right = null
    return bst
};

var treeMethods = {}

treeMethods.insert = function(value) {
    let cur = this
    while (cur) {
        if (cur.value > value) {
            if (cur.left) {
                cur = cur.left
            } else {
                cur.left = new BinarySearchTree(value)
                break;
            }
        } else {
            if (cur.right) {
                cur = cur.right
            } else {
                cur.right = new BinarySearchTree(value)
                break;
            }
        }
    }
} 
treeMethods.contains = function(value) {
    let cur = this
    while (cur) {
        if (cur.value === value) return true
        if (cur.value > value) {
            if (cur.left) {
                cur = cur.left
            } else {
                break;
            }
        } else {
            if (cur.right) {
                cur = cur.right
            } else {
                break;
            }
        }
    }
    return false
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
