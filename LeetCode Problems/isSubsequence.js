// var isSubsequence = function(s, t) {
//     let sList = s.split(''),
//         tList = t.split('');
//     let i = 0;
//     while (i < tList.length && sList.length > 0) {
//         if (sList[0] === tList[i]) {
//             if (i === 0) tList.splice(0, 1);
//             else tList.splice(0, i+1);
//             sList.splice(0, 1);
//             i = 0;
//         } else {
//             i++;
//         }
//     }
//     if (sList.length > 0) return false;
//     return true;
// };


// Two-Pointer Solution
var isSubsequence = function(s, t) {
    let p1 = 0, p2 = 0;
    while(p1<s.length && p2<t.length) {
        if (s[p1] === t[p2]) {
            p1++;
            p2++;
        } else {
            p2++;
        };
    }
    if (p1 === s.length) return true;
    return false
};

isSubsequence('bb', 'ahbgdc');