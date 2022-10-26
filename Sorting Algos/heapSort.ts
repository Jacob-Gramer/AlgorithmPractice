/*!SECTION
Heap sort is a comparison-based technique based on the binary heap data structure.  It is an in-place algortithm, but is not stable.  Heap Sort is slower than Quick Sort and Merge Sort, so it is not practically used, but the heap data structure is still used often
*/

function sort(arr: number[]) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i)
  };
  for (let i = n - 1; i > 0; i--) {
    let temp = arr[i];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0);
  }
};

function heapify(arr: number[], n: number, i: number) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;
  if (largest !== i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    heapify(arr, n, largest);
  }
};

// const arr = [12, 11, 13, 5, 6, 7];
// console.log(sort(arr));
