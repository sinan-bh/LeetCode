// 4. Median of Two Sorted Arrays

var findMedianSortedArrays = function (nums1, nums2) {
  let nums = [...nums1, ...nums2];
  nums.sort((a, b) => a - b);
  let l = nums.length;
  if (l % 2 === 0) {
    return (nums[l / 2 - 1] + nums[l / 2]) / 2;
  } else {
    return nums[Math.floor(l / 2)];
  }
};
