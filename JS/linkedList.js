// 83. Remove Duplicates from Sorted List
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var deleteDuplicates = function (head) {
  let h = head;

  while (h && h.next) {
    if (h.val === h.next.val) {
      h.next = h.next.next;
    } else {
      h = h.next;
    }
  }

  return head;
};

const head = new ListNode(1, new ListNode(1, new ListNode(2)));
//   console.log(deleteDuplicates(head));

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var inorderTraversal = function (root) {
  let arr = [];

  function traversal(r) {
    if (!r) return;
    traversal(r.left);
    arr.push(r.val);
    traversal(r.right);
  }

  traversal(root);
  return arr;
};

const root = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(3),
    new TreeNode(4),
    new TreeNode(5),
    new TreeNode(null),
    new TreeNode(8),
    new TreeNode(null),
    new TreeNode(null),
    new TreeNode(6, new TreeNode(7), new TreeNode(9))
  )
);

// console.log(inorderTraversal(root));

//21. Merge Two Sorted Lists
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;

    var mergeTwoLists = function (list1, list2) {
      let value = new ListNode(-1);
      let temp = value;
      console.log(temp);

      while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
          temp.next = list1;
          list1 = list1.next;
        } else {
          temp.next = list2;
          list2 = list2.next;
        }
        current = current.next;
      }

      if (list1 !== null) temp.next = list1;
      if (list2 !== null) temp.next = list2;

      return val.next;
    };
    const head = new ListNode(1, new ListNode(2, new ListNode(4)));
    const head2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    console.log(mergeTwoLists(head, head2));
    // console.log(distanceBetweenBusStops([7,6,3,0,3],0,4));
  }
}

//2. Add Two Numbers
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
  let value = new ListNode(0);
  let temp = value;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry != 0) {
    let a = l1 ? l1.val : 0;
    let b = l2 ? l2.val : 0;
    let sum = a + b + carry;
    carry = Math.floor(sum / 10);
    temp.next = new ListNode(sum % 10);

    temp = temp.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return value.next;
};
