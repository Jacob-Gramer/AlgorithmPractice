const getNum = (num: number, index: number) => {
  const strNum = String(num);
  let end = strNum.length - 1;
  const foundNum = strNum[end - index];
  if (foundNum === undefined) return 0;
  else return foundNum;
}

//console.log(getNum(4352, 2));

const largestNum = (arr: number[]) => {
  let largest = "0";

  arr.forEach(num => {
    const strNum = String(num);
    if (strNum.length > largest.length) largest = strNum;
  });
  return largest.length;
}

//console.log(largestNum([4,3,5,2]));

const radixSort = (arr: number[]) => {
  let maxLength = largestNum(arr);
  for (let i=0; i<maxLength; i++) {
    let buckets = Array.from({length: 10}, () => []);
    for (let j=0; j<arr.length; j++) {
      let num = getNum(arr[j], i);
      if (num !== undefined) buckets[num].push(arr[j]);
    };
    arr = buckets.flat();
  };
  return arr;
}

const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

console.log(radixSort(unsortedArr));

export{};
