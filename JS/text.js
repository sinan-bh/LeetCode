let myAtoi = function(s) {    
    const num = parseInt(s);   
       if (num) {
        if (num <= -(2**31))return -(2**31);
        else if (num >= (2**31)-1)return (2**31)-1;
        else return num;
    }
    return 0;
  };
console.log(myAtoi("1337c0d3"));
// console.log(distanceBetweenBusStops([7,6,3,0,3],0,4));
