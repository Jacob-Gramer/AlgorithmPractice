/*
Bubble sort is an introductory sorting algorithm that functions by comparing two adjacent elements and swapping them if needed.
It does not have any modern practical applications, but is a good introduction
*/

const bubbleSort = (array) => {
  let swapped = false;
  do {
    swapped = false;
    array.forEach((current, i) => {
      if (current > array[i + 1]) {
        const temp = current;
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    })
  } while (swapped)
  return array;
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
console.log(bubbleSort(numbers));