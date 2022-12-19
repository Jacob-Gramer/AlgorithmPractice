var convert = function(s, numRows) {
    debugger;
    if (numRows <= 1 || s.length < numRows) return s;
    let zigzag = [];
    for (let i=0; i<numRows; i++) {
        let split = 2 * (numRows - (i + 1)) || 2 * (numRows - 1);
        let j = i;
        while (j < s.length) {
            zigzag.push(s[j]);
            j += split;
        }
    }
    return zigzag.join('');
};

let s = "PAYPALISHIRING";

console.log(convert(s,4));