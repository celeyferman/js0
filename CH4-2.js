function addRec (numbArray) {
	let sum = 0;
	for (const n of numbArray) {
		sum = sum + n;
	}
 	return sum;
}

const arr = [ 1, 3, 5, 7];
console.log(addRec (arr));
