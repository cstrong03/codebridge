function reverse(str) {
	let strArr = str.split('');
	let reverseArr = strArr.reverse();
	let reverse = reverseArr.join('');
	return reverse;
}
console.log(reverse('hello'));