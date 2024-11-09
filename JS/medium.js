//2914. Minimum Number of Changes to Make Binary String Beautiful
var minChanges = function (s) {
  let count = 0;
  for (let i = 1; i < s.length; i += 2) {
    if (s[i] !== s[i - 1]) {
      count++;
    }
  }
  return count;
};

// 3163. String Compression III
var compressedString = function (word) {
  let l = 1;
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      l++;
    } else {
      while (l > 9) {
        arr.push("9" + word[i]);
        l -= 9;
      }
      arr.push(l + word[i]);
      l = 1;
    }
  }
  return arr.join("");
};


//945. Minimum Increment to Make Array Unique
var minIncrementForUnique = function (nums) {
  let sorted = nums.sort((a,b)=> a - b)
  let res = 0;
  let inc = 0;
  for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] <= sorted[i - 1]) {
        inc = sorted[i - 1] - sorted[i] + 1
        sorted[i] += inc;
        res += inc
    }
  }
  return res;
}

//633. Sum of Square Numbers
var judgeSquareSum = function (c) {
  var r = Math.floor(Math.sqrt(c));  
  var l = 0;
  while (l <= r) {
      var sum = l ** 2 + r ** 2;
      if (sum == c) {
          return true;
      } else if (sum < c) {
          l++;
      } else if (sum > c) {
          r--;
      }
  }
  return false;
};