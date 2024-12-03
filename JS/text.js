var maxArea = function(height) {
    let maxVol = 0;
    let left = 0;
    let right = height.length - 1
    let vol
    while(left < right) {        
        vol = (Math.min(height[left], height[right]) * (right-left))
        if(maxVol < vol) {            
            maxVol = vol
        }
        if(height[left] < height[right]) {
            left++;
        } else {            
            right--;
        }
    }
    return maxVol
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
// console.log(distanceBetweenBusStops([7,6,3,0,3],0,4));


