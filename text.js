var canSortArray = function (nums) {
  let arr = [];
  let j = 0;
  while (j < nums.length) {
    if (nums[j] > nums[j + 1]) {
      let n = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = n;
      j = 0;
    } else {
      j++;
    }
  }
  return nums;
};
// console.log(mergeTwoLists([1,2,4],[1,3,4]));
console.log(canSortArray([3,16,8,4,2]));
// console.log(mergeTwoLists([],[0]));
