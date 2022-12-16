var longestPalindrome = function(s) {
    if (s.length === 0) return '';
    if (s.length === 1) return s;
    if (s.length === 2 && s[0] !== s[1]) return s[0];
    let output = '';
    // iterate over string using 2 pointers
    for (let i=0; i<s.length; i++) {
    // decrement the rightmost pointer until the character is equal to the leftmost pointer
        let left = i, right = s.length - 1;
        let start = i, end = s.length - 1;
        let equal = false;
        // while left pointer < right pointer
        while (left < right) {
            // increment left and decrement right and compare equality
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