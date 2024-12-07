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
