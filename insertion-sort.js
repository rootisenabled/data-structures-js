function insert(array, index, value) {
	for (var j = index; j >=0 && array[j] > value; j--) {
		array[j + 1] = array[j];
	}
	array[j + 1] = value;
}

function insertionSort(array) {
	for (var i = 0; i < array.length; i++) {
		insert(array, i - 1, array[i]);
	}
}