function QuickSort(arr, start, end) {
	var pivot = arr[start];
	var i = start;
	var j = end;
	while (i < j) {
		while (i < j && arr[j] >= pivot) j--;
		arr[i] = arr[j];
		while (i < j && arr[i] <= pivot) i++;
		arr[j] = arr[i];
	}
	arr[i] = pivot;
	if (start < i - 1) {
		QuickSort(arr, start, i - 1);
	}
	if (end > i + 1) {
		QuickSort(arr, i + 1, end);
	}
}