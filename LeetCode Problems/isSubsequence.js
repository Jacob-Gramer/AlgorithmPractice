var isSubsequence = function(s, t) {
    let sList = s.split(''),
        tList = t.split('');
    let i = 0;
    while (i < tList.length && sList.length > 0) {
        if (sList[0] === tList[i]) {
            if (i === 0) tList.splice(0, 1);
            else tList.splice(0, i+1);
            sList.splice(0, 1);
            i = 0;
        } else {
            i++;
        }
    }
    if (sList.length > 0) return false;
    return true;
};

isSubsequence('bb', 'ahbgdc');