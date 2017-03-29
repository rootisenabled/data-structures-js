function mergeSort(arr, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    //sort left half of the array
    mergeSort(arr, p, q);
    // sort right half
    mergeSort(arr, q + 1, r);
    //merge them
    merge(arr, p, q, r);
  }
}

function merge(arr, p, q, r) {
  const lowHalf = [],
    highHalf = [];

  let k = p;
  let i;
  let j;

  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

  while (i < lowHalf.length && j < highHalf.length) {
  	if (lowHalf[i] < highHalf[j]) {
  		array[k] = lowHalf[i];
  		i++;
  	} else {
  		array[k] = highHalf[j];
  		j++;
  	}
  	k++;
  }

  while (i < lowHalf.length) {
  	array[k] = lowHalf[i];
  	i++;
  	k++;
  }

  while (j < highHalf.length) {
  	array[k] = highHalf[j];
  	j++;
  	k++;
  }
}
