function average(){
	let number = math.input.value; //takes the value in the input box
	let arr = number.split("+"); //makes sure they aren't in string form
	let answer = 0; // where my answer goes
		for(let i = 0; i < arr.length; i++) {
			answer += parseInt (arr[i]); //parseInt turns strings into number
		}
	let death = answer / arr.length; //the actual average 
	math.input.value = death; // goes back into the input field
	console.log(death);
}
average();
