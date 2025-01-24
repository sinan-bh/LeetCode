var plusOne = function(digits) {
  let join = digits.join("")
  let num = BigInt(join)
  sum = num++
  return sum.toString().split("").map(Number)
};

console.log(plusOne([1,2,3]));
