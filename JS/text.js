var waysToSplitArray = function(nums) {
  let count = 0;

  for(let i = 0; i < nums.length; i++){
      let sumj = 0;
      let sumk = 0;
      for(let j = i; j < i + 1; j++){
          sumj += nums[j];
      }

      for(let k = nums.length - 1; k > i; k--){
          sumk += nums[k];
      }
console.log(sumj, sumk);

      if(sumj >= sumk){
          count++;
      }else{
        return count
      }
  }

  return count;
};
// console.log(waysToSplitArray([10,4,-8,7]));
console.log(waysToSplitArray([2,3,1,0]));
