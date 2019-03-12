// This is the template uses to make multiple different items
class dog{
	constructor(breed, age, name){
		this.breed = breed;
		this.age = age;
		this.name = name;
	}
	getName() {
		console.log(this.name);
	}
	getAge() {
		console.log(this.age);
	}
	getBreed() {
		console.log(this.breed);
	}
}
// what this does is uses the constructor as a template. Just fill in with actual data.
let dog1 = new dog('spaniel', 2, 'fido'); 

dog1.getName();
dog1.getBreed();
dog1.getAge();

console.log(dog1.name);

let dog2 = new dog('yorkie', 4, 'safari');

dog2.getBreed();
dog2.getAge();
dog2.getName();