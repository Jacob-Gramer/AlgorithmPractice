"use strict";
exports.__esModule = true;
var getNum = function (num, index) {
    var strNum = String(num);
    var end = strNum.length - 1;
    var foundNum = strNum[end - index];
    if (foundNum === undefined)
        return 0;
    else
        return foundNum;
};
//console.log(getNum(4352, 2));
var largestNum = function (arr) {
    var largest = "0";
    arr.forEach(function (num) {
        var strNum = String(num);
        if (strNum.length > largest.length)
            largest = strNum;
    });
    return largest.length;
};
//console.log(largestNum([4,3,5,2]));
var radixSort = function (arr) {
    var maxLength = largestNum(arr);
    for (var i = 0; i < maxLength; i++) {
        var buckets = Array.from({ length: 10 }, function () { return []; });
        for (var j = 0; j < arr.length; j++) {
            var num = getNum(arr[j], i);
            if (num !== undefined)
                buckets[num].push(arr[j]);
        }
        ;
        arr = buckets.flat();
    }
    ;
    return arr;
};
var unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
console.log(radixSort(unsortedArr));
