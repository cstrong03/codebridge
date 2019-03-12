// ********************Navigation******************
let openNav = () => {
  document.getElementById("navBar").style.width = "200px";
  document.getElementById("extra").style.marginLeft = "200px";
}

let closeNav = ()=> {
  document.getElementById("navBar").style.width = "0";
  document.getElementById("extra").style.marginLeft= "0";
}
// ***************************************ARSENAL********************************
 // CLasses is like using a paper application. It tell them(the Dom in this case) where to output all the info that i already wrote for each indiviual item. 
class exotic{
	constructor(name, type, year, description, status, burn, image){
		this.name = name;
		this.type = type;
		this.year = year;
		this.description = description;
		this.status = status;
		this.burn = burn;
		this.image = image;
	}
	getInfo(){
		document.getElementById('name').innerHTML = this.name;
		document.getElementById('type').innerHTML = this.type;
		document.getElementById('year').innerHTML = this.year;
		document.getElementById('description').innerHTML = this.description;
		document.getElementById('status').innerHTML = this.status;
		document.getElementById('burn').innerHTML = this.burn;
		document.getElementById('flick').src = this.image; 
		// this outputs my picture in my DOM
	}
}

let weapon = [];
// This is for me to write all the info in that is need.

let weapon1 = new exotic('Name: Thorn', 'Type: Hand Cannon', 'Year: 1', 'To rend one`s enemies is to see them not as equals, but objects hollow of spirit and meaning', 'Special: Mark of the Devourer', 'Burn: Kinetic', '../images/thorn.jpg');
weapon.push(weapon1);
// I must push into my empty array so it can be seen

let weapon2 = new exotic('Name: Gjallarhorn', 'Type: Rocket Launcher', 'Year: 1', 'If there is beauty in destruction, why not also in its delivery?', 'Special: Wolfpack Rounds', 'Burn: Solar', '../images/gjally.jpg' );
weapon.push(weapon2);

let weapon3 = new exotic('Name: Icebreaker', 'Type: Sniper Rifle', 'Year: 1', 'Please replace these components if use causes fatal damage', 'Special: Ice breaker', 'Burn: Solar', '../images/ice.png');
weapon.push(weapon3);

let weapon4 = new exotic('Name:Telesto','Type: Fusion Rifle', 'Year: 3', 'Vestiges of the Queen`s Harbingers yet linger among Saturn`s moons.', 'Special: Harbingers Spark', 'Burn: Void', '../images/telesto.jpg');
weapon.push(weapon4);

let weapon5 = new exotic('Name: Black Talon', 'Type: Sword', 'Year: 4', 'His life brought peace to the Reef. His death brings a sword.', 'Special: Crow`s Wings', 'Burn: Void', '../images/talon.jpg');
weapon.push(weapon5);

let weapon6 = new exotic('Name: Sleeper Simulant', 'Type: Linear Fusion Rifle', 'Year: 4', 'Subroutine IKELOS: Status=complete. MIDNIGHT EXIGENT: Status=still in progress.', 'Special: Dornröschen', 'Burn: Solar', '../images/sleeper.jpg');
weapon.push(weapon6);
// **********************************************Contact/Credits******************************************
let user = () =>{
	window.alert('Thanks for the Feedback!!');
}
//********************RAID*************************************************************************
document.getElementById('btn').addEventListener('click', 
	function(){
		document.querySelector('.bg-modal').style.display = "flex";
	});

document.getElementById('exit').addEventListener('click',
	function(){
		document.querySelector('.bg-modal').style.display = "none";
	});

document.getElementById('new').addEventListener('click', 
	function(){
		document.querySelector('.syrup').style.display = "flex";
	});

document.getElementById('gone').addEventListener('click',
	function(){
		document.querySelector('.syrup').style.display = "none";
	});
document.getElementById('cotton').addEventListener('click', 
	function(){
		document.querySelector('.candy').style.display = "flex";
	});

document.getElementById('escape').addEventListener('click',
	function(){
		document.querySelector('.candy').style.display = "none";
	});
document.getElementById('coco').addEventListener('click',
function(){
		document.querySelector('.mango').style.display = "flex";
	});

document.getElementById('poof').addEventListener('click',
	function(){
		document.querySelector('.mango').style.display = "none";
	});