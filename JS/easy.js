//3300. Minimum Element After Replacement With Digit Sum
var minElement = function (nums) {
  const sum = nums.map((n) =>
    n
      .toString()
      .split("")
      .reduce((a, c) => a + parseInt(c), 0)
  );
  return Math.min(...sum);
};

//3162. Find the Number of Good Pairs I
var numberOfPairs = function (nums1, nums2, k) {
  let sum = [];
  const multipleArr = nums2.map((a) => a * k);
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < multipleArr.length; j++) {
      if (nums1[i] % multipleArr[j] === 0) {
        sum.push(nums1[i] / multipleArr[j]);
      }
    }
  }
  return sum.length;
};

// 3151. Special Array I
var isArraySpecial = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i + 1] % 2) return false;
  }
  return true;
};

//3142. Check if Grid Satisfies Conditions
var satisfiesConditions = function (grid) {
  const g = grid.length;
  const l = grid[0].length;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i < g - 1 && grid[i][j] !== grid[i + 1][j]) return false;
      if (j < l - 1 && grid[i][j] === grid[i][j + 1]) return false;
    }
  }
  return true;
};

// 3131. Find the Integer Added to Array I
var addedInteger = function (nums1, nums2) {
  return Math.max(...nums2) - Math.max(...nums1);
};

// 14. Longest Common Prefix
var longestCommonPrefix = function (strs) {
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
};

//28. Find the Index of the First Occurrence in a String
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// 58. Length of Last Word
var lengthOfLastWord = function (s) {
  let t = s.trim().split(" ");
  return t[t.length - 1].length;
};

//67. Add Binary
var addBinary = function (a, b) {
  let c = BigInt(`0b${a}`);
  let d = BigInt(`0b${b}`);
  let e = c + d;
  return e.toString(2);
};

//125. Valid Palindrome
var isPalindrome = function (s) {
  let a = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return a === a.split("").reverse().join("");
};

//242. Valid Anagram
var isAnagram = function (s, t) {
  let a = s.split("").sort().join("");
  let b = t.split("").sort().join("");
  return a === b;
};

//290. Word Pattern
var wordPattern = function (pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const patternToWord = new Map();
  const wordToPattern = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const word = words[i];

    if (patternToWord.has(p)) {
      if (patternToWord.get(p) !== word) {
        return false;
      }
    } else {
      patternToWord.set(p, word);
    }
    if (wordToPattern.has(word)) {
      if (wordToPattern.get(word) !== p) {
        return false;
      }
    } else {
      wordToPattern.set(word, p);
    }
  }
  return true;
};

//3174. Clear Digits
var clearDigits = function (s) {
  let strArr = [];
  s.split("").map((s) => (!isNaN(s) ? strArr.pop(s) : strArr.push(s)));
  return strArr.join("");
};

// 3120. Count the Number of Special Characters I
var numberOfSpecialChars = function (word) {
  count = 0;
  let capitalStr = new Set();
  let smallStr = new Set();
  for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[A-Z]/)) {
      capitalStr.add(word[i]);
    } else {
      smallStr.add(word[i]);
    }
  }
  for (let x of smallStr) {
    if (capitalStr.has(x.toUpperCase())) {
      count++;
    }
  }
  return count;
};

// 3110. Score of a String
var scoreOfString = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += i < s.length - 1 && Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }
  return sum;
};

//1. Two Sum
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }
};

//3046. Split the Array
var isPossibleToSplit = function (nums) {
  let numss = nums.sort((a, b) => a - b);
  let nums2 = new Map();
  let nums1 = new Map();
  for (let i = 0; i < numss.length; i++) {
    if (i % 2 === 0) {
      if (nums1.has(numss[i])) {
        nums2.set(numss[i]);
      } else {
        nums1.set(numss[i]);
      }
    } else {
      if (nums2.has(numss[i])) {
        nums1.set(numss[i]);
      } else {
        nums2.set(numss[i]);
      }
    }
  }
  if (nums1.size === nums2.size && nums1.size === numss.length / 2) {
    return true;
  }
  return false;
};

//3042. Count Prefix and Suffix Pairs I
var countPrefixSuffixPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
        count++;
      }
    }
  }
  return count;
};


//3038. Maximum Number of Operations With the Same Score I
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

//9. Palindrome Number
var isPalindrome = function (x) {
  if (x < 0) return false;
  let rev = "";
  let str = x.toString();
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return str === rev ? true : false
 
};

//2696 Minimum String Length After Removing Substrings
var minLength = function(s) {
  let arr = []
  for(let x of s){
      if((x === 'B' && arr[arr.length - 1] === 'A' || (x === 'D' && arr[arr.length - 1] === 'C'))){
          arr.pop()
      } else{
          arr.push(x)
      }
  }
  return arr.length
};

// 796. Rotate String
var rotateString = function(s, goal) {
  return s.length === goal.length && (s + s).includes(goal)
};

// 1957. Delete Characters to Make Fancy String
var makeFancyString = function(s) {
  let splited = s.split('')
  for(let i = 0; i < splited.length; i++){
      if(splited[i] === splited[i + 1] && splited[i + 1] === splited[i + 2]){
          splited[i] = ''
      }
  }
  return splited.join('')
}

// Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
  let i = 0;
 for (let j = 0; j < nums.length; j++) {
     if (nums[j] != nums[i]) 
         nums[++i] = nums[j];
 }
 return ++i;
};

// 268. Missing Number
var missingNumber = function(nums) {
  let n = nums.sort((a,b)=> a - b);

  for( let i = 0; i <= n.length; i++){
      if (i !== n[i]){
          return i
      }
  }
};

// 27. Remove Element
var removeElement = function(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++){
      if(nums[i] !== val){
          nums[k] = nums[i]
          k++;
      }
  }

  return k
};

// 88. Merge Sorted Array
var merge = function(nums1, m, nums2, n) {
  for(let i = m; i < m + n; i++){
      nums1[i] = nums2[i - m]
  }
  return nums1.sort((a,b)=> a - b)
};

//2788. Split Strings by Separator
var splitWordsBySeparator = function (words, separator) {
  let str = "";
  let arr = [];
  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
          if (words[i][j] === separator) {
              if (str !== "") {
                  arr.push(str);
                  str = ""
                  continue;
              }
          } else {
              str += words[i][j];
          }
      }
      if (str !== "") {
          arr.push(str);
          str = ""
      }
  }
  return arr
};


// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
 var isPrefixOfWord = function(sentence, searchWord) {
  let s = sentence.split(" ")
  for(let i = 0; i < s.length; i++){        
      if(s[i].startsWith(searchWord)){
          return i + 1
      }
  }

  return -1
};

// 169. Majority Element
var majorityElement = function (nums) {
  let n = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
      if (count === 0) {
          n = nums[i];
      }
      if (n === nums[i]) {
          count++;
      } else {
          count--;
      }
  }
  return n;
};