var longestPalindrome = function(s) {
    if (s.length === 0) return '';
    if (s.length === 1) return s;
    if (s.length === 2 && s[0] !== s[1]) return s[0];
    let output = '';
    for (let i=0; i<s.length; i++) {
        let left = i, right = s.length - 1;
        let start = i, end = s.length - 1;
        let equal = false;
        while (left < right) {
            if (s[right] !== s[left]) {
                if (!equal) right--;
                else {
                    equal = false;
                    left = i;
                    right = end - 1;
                }
            } else {
                if (left === i) end = right;
                equal = true;
                right--;
                left++;
            }
        }
        if (equal) {
            if ((end + 1) - start > output.length) output = s.substring(start, end+1);
        }
        continue;
    }
    return output;
};

let test = "aacabdkacaa";
console.log(longestPalindrome(test));