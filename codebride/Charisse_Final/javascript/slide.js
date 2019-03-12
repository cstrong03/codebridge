// ******************************************CHARACTER********************************
var slideIndex = 0;

let showDivs = (n)=> {
	let x = document.getElementsByClassName('picture');
	if (n > x.length -1) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = x.length -1;
	}
	let i = 0;
	while (i < x.length){
		x[i].style.display = "none";
		i++;
	};	
	x[slideIndex].style.display = "block";
};

let plusDivs = (n)=> {
	showDivs(slideIndex += n);
};
showDivs(slideIndex);
