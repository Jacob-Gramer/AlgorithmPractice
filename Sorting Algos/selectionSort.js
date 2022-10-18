/*
Selection sort operates by selecting the smallest (if sorting by ascending) element and moves it to the index it is being compared to
*/

const selectionSort = (array) => {
  // iterate over array
  array.forEach((item, i) => {
    // declare a variable, min
    let min = i;
    // iterate over array from j = i
    for (let j=i + 1; j<array.length; j++) {
      // if array[j] is less than min
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // if array[i] is greater than min
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  })
  return array;
}

const numbers = [1,5,7,3,6,4,5,24,-5,-7,9];
console.log(selectionSort(numbers));