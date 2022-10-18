/*
Insertion sort involves iterating through an array and placing unsorted elements at the suitable location during each iteration
*/

const insertionSort = (array) => {
  for (let i=1; i<array.length; i++) {
    for (let j=0; j<i; j++) {
      if (array[i] < array[j]) {
        const [element] = array.splice(i, 1);
        array.splice(j, 0, element);
      }
    }
  }
  return array;
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
console.log(insertionSort(numbers));