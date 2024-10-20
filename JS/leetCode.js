//3300. Minimum Element After Replacement With Digit Sum
var minElement = function(nums) {
    const sum = nums.map(n=> n.toString().split("").reduce((a,c)=> a + parseInt(c),0))
    return Math.min(...sum)
};


//3162. Find the Number of Good Pairs I
var numberOfPairs = function(nums1, nums2, k) {
    let sum = [];
    const multipleArr = nums2.map((a)=> a * k)
    for(let i=0;i< nums1.length; i++){
        for(let j=0; j<multipleArr.length; j++){
            if(nums1[i] % multipleArr[j] === 0){
                sum.push(nums1[i] / multipleArr[j])
            }
        }
    }
    return sum.length
};

// 3151. Special Array I
var isArraySpecial = function(nums) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 === nums[i + 1] % 2) return false
    }
    return true
};

//3142. Check if Grid Satisfies Conditions
var satisfiesConditions = function (grid) {
    const g = grid.length;
    const l = grid[0].length;
    for (let i = 0; i < grid.length; i++){
        for ( let j = 0; j < grid[0].length; j++){
            if (i < g - 1 && grid[i][j] !== grid[i + 1][j]) return false
            if (j < l - 1 && grid[i][j] === grid[i][j + 1]) return false
        }
    }
    return true
};

// 3131. Find the Integer Added to Array I
var addedInteger = function(nums1, nums2) {
    return Math.max(...nums2) - Math.max(...nums1)
};

// 14. Longest Common Prefix
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
   for (let i = 1; i < strs.length; i++) {
       while (strs[i].indexOf(prefix) !== 0) {
           prefix = prefix.substring(0, prefix.length - 1);
           if (prefix === "") return "";
       }
   }

   return prefix;    
};

//3226. Number of Bit Changes to Make Two Integers Equal
var minChanges = function (n, k) {
    if ((n & k) !== k) {
           return -1; 
       }    
       let count = 0;
       while (n > 0) {
           if ((n & 1) === 1 && (k & 1) === 0) {
               count++;
           }
           n >>= 1;
           k >>= 1;
       }
       
       return count;
   }