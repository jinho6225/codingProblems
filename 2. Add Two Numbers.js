/*
2. Add Two Numbers
Medium

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let store = 0;
  let node = new ListNode(); // {val:0,next:null}
  let cur = node;
  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val; //sum =2, 4,// 1+3 => 4
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val; //sum = 7,10// 8
      l2 = l2.next;
    }
    if (sum >= 10) {
      store = 1;
      sum = sum - 10;
    }
    cur.next = new ListNode(sum); //{val:0,next: {val:7, next:{val:0, next:{val: 8, next:null}}}}
    cur = cur.next; //val:7, next:null // val:0,next:null// val:8,next:null
    sum = store; //0
    store = 0;
  }
  return node.next;
};

var addTwoNumbers = function (l1, l2) {
  let arr = [];
  let sum = 0,
    carry = 0;
  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    }
    arr.push(sum);
    sum = carry;
    carry = 0;
  }
  if (sum) {
    arr.push(sum);
  }
  let node = new ListNode();
  let cur = node;
  while (arr.length > 0) {
    cur.next = new ListNode(arr.shift());
    cur = cur.next;
  }
  return node.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = 0,
    carry = 0;
  let node = new ListNode();
  let cur = node;
  while (l1 || l2) {
    if (l1) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }
    cur.val = sum;
    if (carry) {
      cur.next = new ListNode();
    }
    sum = carry;
    carry = 0;
    if (!l1 && !l2) {
      if (sum !== 0) {
        cur.next = new ListNode(sum);
      }
      break;
    }
    cur.next = new ListNode();
    cur = cur.next;
  }
  return node;
};


/*
Given code seems like C++,
I solved using javascript as below

input: 
    given two non-empty linked lists representing two non-negative integers
    The digits are stored in reverse order, and each of their nodes contains a single digit.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
    it could be [0], [0] // It couldn't be [3,4,0], [1,0]

output:
    Add the two numbers and return the sum as a linked list.

need to take care all case
#1 [9,9,9], [9,9] => [8,9,0,1]
#2 [2,4,3], [5] => [7,4,3]
#3 [2,4,3], [8,5] => [0,0,4]
#4 [2,4,3], [8] => [0,4,3]
#5 [0], [0] => [0]
#6 [2,4,3], [0] => [2,4,3]

if l1.val is 0 and l1.next is null and if l2.val is 0 and l2.next is null
    return l1
if l1.val is 0 and l1.next is null
    return l2
if l2.val is 0 and l2.next is null
    return l1

define variable node and assign as new Node {val: 0, next: null}
define tmp as 0 (sum - 10 value will be stored into tmp if sum value is more than and equal to 10)
define cur variable and assign node variable (point to node)

iterate two linked list using while loop if they are not null
    if l1 and l2 is not null
        sum variable will be assign as l1.val + l2.val + node.val 
    elif l1 is null
        sum variable will be assign as l2.val + node.val 
    elif l2 is null 
        sum variable will be assign as l1.val + node.val

    if sum is greater of equal to 10
        balance variable assign as sum - 10
        tmp assign as 1
        current node.val assign as balance
    else
        current node.val assign as sum
        tmp assign as 0

    if l1 and l2 are null && tmp is 0
        break; out of while loop
    node.next will be assign as new Node {val: tmp, next: null}
    node assign as node.next

return cur

*/

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 
var addTwoNumbers = function(l1, l2) {
    if (l1.val === 0 && l1.next === null && l2.val === 0 && l2.next === null) return l1
    if (l1.val === 0 && l1.next === null) return l2
    if (l2.val === 0 && l2.next === null) return l1
    
    let node = new ListNode(), tmp = 0
    let cur = node
    while (l1 || l2) {
        let sum = null
        if (l1 && l2) {
            sum = l1.val + l2.val + node.val
            l1 = l1.next
            l2 = l2.next            
        } else if (!l1) {
            sum = l2.val + node.val
            l2 = l2.next        
        } else if (!l2) {
            sum = l1.val + node.val
            l1 = l1.next
        } 
        
        if (sum >= 10) {
            let bal = sum - 10
            node.val = bal
            tmp = 1
            
        } else {
            node.val = sum
            tmp = 0    
        }
        if (!l1 && !l2 && tmp === 0) break;        
        node.next = new ListNode(tmp)
        node = node.next
    }
    return cur
};