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
console.log(deleteDuplicates(head));
// console.log(distanceBetweenBusStops([7,6,3,0,3],0,4));
