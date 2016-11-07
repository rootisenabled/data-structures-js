function swap(array, firstIndex, secondIndex) {
  //using here destructuring assignment
  [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
};

function indexOfMinimum(array, startIndex) {

  let minValue = array[startIndex];
  var minIndex = startIndex;

  for (let i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

function selectionSort(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let min = indexOfMinimum(array, i);
    swap(array, i, min);
  }
};
