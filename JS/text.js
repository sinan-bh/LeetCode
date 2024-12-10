var isBalanced = function (num) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < num.length; i++) {
    if (i % 2 !== 0) {
      a += Number(num[i]);
    } else {
      b += Number(num[i]);
    }
  }
  console.log(a, b);

  if (a === b) {
    return true;
  }

  return false;
};
// const head = new ListNode(1, new ListNode(1, new ListNode(2)));
console.log(isBalanced("24123"));
// console.log(distanceBetweenBusStops([7,6,3,0,3],0,4));
