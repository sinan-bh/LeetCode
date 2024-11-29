var plusOne = function(digits) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1
    if(digits[digits.length - 1] > 9){
        return digits.flatMap(num => num.toString().split('').map(Number));        
    }
    return digits
};

console.log(plusOne([3,2,2,10]));
// console.log(distanceBetweenBusStops([7,6,3,0,3],0,4));
