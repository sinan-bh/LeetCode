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
