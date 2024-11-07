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
