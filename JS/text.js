var isPrefixOfWord = function(sentence, searchWord) {
    let s = sentence.split(" ")
    for(let i = 0; i < s.length; i++){        
        if(s[i].startsWith(searchWord)){
            return i + 1
        }
    }

    return -1
};
console.log(isPrefixOfWord("i love eating burger","burg"));
// console.log(distanceBetweenBusStops([7,6,3,0,3],0,4));


