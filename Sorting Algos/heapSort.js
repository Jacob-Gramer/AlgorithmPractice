/*!SECTION
Heap sort is a comparison-based technique based on the binary heap data structure.  It is an in-place algortithm, but is not stable.  Heap Sort is slower than Quick Sort and Merge Sort, so it is not practically used, but the heap data structure is still used often
*/
function sort(arr) {
    var n = arr.length;
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    ;
    for (var i = n - 1; i > 0; i--) {
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
    return arr;
}
;
function heapify(arr, n, i) {
    var largest = i;
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;
    if (largest !== i) {
        var temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}
;
var arr = [12, 11, 13, 5, 6, 7];
console.log(sort(arr));
