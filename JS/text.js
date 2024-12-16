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
// console.log(distanceBetweenBusStops([7,6,3,0,3],0,4));
