/*!SECTION
Shell sort is a variation of Insertion Sort that allows for the exchange of far away items.
*/
function sort(arr) {
    var n = arr.length;
    for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (var i = gap; i < n; i++) {
            var temp = arr[i];
            for (var j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
    return arr;
}
var arr = [12, 34, 54, 2, 3];
arr = sort(arr);
console.log(arr);
