var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    // declare a map variable
    let sMap = createMap(s, t),
        tMap = createMap(t, s);
    let sCharList = s.split(''),
        tCharList = t.split('');
    for (let i=0; i<sCharList.length; i++) {
        sCharList[i] = sMap.get(sCharList[i]);
        tCharList[i] = tMap.get(tCharList[i])
    }
    if (sCharList.join('') === t && tCharList.join('') === s) return true;
    return false;
};

const createMap = function(s, t) {
    let map = new Map();
    for (let i=0; i<s.length; i++) {
        if (map.has(s[i])) continue;
        map.set(s[i], t[i]);
    }
    return map;
}