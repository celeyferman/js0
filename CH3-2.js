function add () {
	let sum = 0;
	for (const n of arguments) {
		sum = sum + n;
	}
 	return sum;
}

console.log(add(1, 2) + add(1,4,6,7,2));