var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--){
        if(digits[i] !== 9){
            digits[i]++;
        }
        else if(i === 0){
            digits[i] = 0;
            digits.unshift(1);
        }
        else{
            digits[i] = 0;
            continue;
        }
        return digits;
    }
};

const digits = [1,2,3];
console.log(plusOne(digits));