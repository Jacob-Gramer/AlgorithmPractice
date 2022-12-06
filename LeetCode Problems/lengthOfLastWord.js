var lengthOfLastWord = function(s) {
    debugger;
    let word = '';
    let list = s.split(' ');
    for (let i=list.length - 1; i>=0; i--) {
        if (list[i] === '') continue
        word = list[i];
        return word.length;
    }
};

const string = "a";
console.log(lengthOfLastWord(string));
