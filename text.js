
var maxOperations = function(nums) {
    let operation = 0;
    let prevSum = 0;
    let i = 0;
    while(i < nums.length-1){
        let currentSum = nums[i] + nums[i + 1];
        if( prevSum === 0){
            prevSum = currentSum
        }else if (currentSum === prevSum) {
            nums.splice(i,2)
            operation++
            i = 0
        }else{
            break
        }
    }
    return operation
};
console.log(maxOperations([3,2,1,4,5])); 
console.log(maxOperations([1,5,3,3,4,1,3,2,2,3]));
console.log(maxOperations([5,3]));