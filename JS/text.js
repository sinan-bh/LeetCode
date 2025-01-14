var minimumLength = function (s) {
  if (s.length < 3) return s.length;
  let str = "";
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      console.log("aa");
      console.log(s.slice(1), "s");

      let a = s.slice(1);
      console.log("ddddd", a);

      console.log(a.slice(-1),"--");
      str = a.slice(i, i + 1);
      
      console.log(str);
      
    }
  }

  return str.length;
};
// console.log(waysToSplitArray([10,4,-8,7]));
console.log(minimumLength("abaacbcbb"));
