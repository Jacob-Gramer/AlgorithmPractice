var generate = function(numRows) {
    if (numRows === 0) return [];
    let pascal = [[1]];
    const innerFunction = (num) => {
        if (num >= numRows-1) return;
        let curr = [1];
        for (let i=1; i<=num+1; i++) {
            let temp = pascal[num];
            let first = temp[i-1] || 0;
            let second = temp[i] || 0;
            curr.push(first + second);
        }
        pascal.push(curr);
        innerFunction(num+1);
    }
    innerFunction(0);
    return pascal;
};

const numRows = 4;
console.log(generate(numRows));