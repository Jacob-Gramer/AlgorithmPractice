var lengthOfLongestSubstring = function(s) {
    let longest = 0; //set the longest to 0
    let seen = {}; //create an object to hold the characters that have been seen
    let start = 0; //set the start to 0

    for(let i = 0; i < s.length; i++){ //loop through the string
        let char = s[i]; //set the character to the value of the index of i in the string
        if(seen[char]){ //if the character is in the object
            start = Math.max(start, seen[char]); //set the start to the max of the start and the value of the character in the object
        }
        //index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1); //set the longest to the max of the longest and the index of i minus the start plus 1
        seen[char] = i + 1; //set the value of the character in the object to the index of i plus 1
    }
    return longest;
};

let string = "abcabcdb";
lengthOfLongestSubstring(string);