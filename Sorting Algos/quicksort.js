const quickSort = (array) => {
  if (array.length < 2) return array;
  const pivot = array.length - 1;
  const chosen = array[pivot];
  const a = [];
  const b = [];
  for (let i=0; i < pivot; i++) {
    const temp = array[i];
    temp < chosen ? a.push(temp) : b.push(temp);
  }
  const output = [...quickSort(a), chosen, ...quickSort(b)];
  console.log(output);
  return output;
};

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
quickSort(numbers);