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

