function qsort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const [ pivot, ...rest ] = arr;
	const left = [],
		right = [];
	rest.forEach((e1) => (e1 < pivot ? left.push(e1) : right.push(e1)));
	return qsort(left).concat(pivot).concat(qsort(right));
}

console.log(qsort([ 5, 2, 7, 9, 6, 1, 4, 5, 0 ]));
