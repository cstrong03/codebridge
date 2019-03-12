let clock = document.getElementById('time');
let hex = document.getElementById('change');


function hexClock() {
	let time = new Date();
	let hours = (time.getHours() % 12).toString();
	let mintues = time.getMinutes().toString();
	let seconds = time.getSeconds().toString();

	if (hours.length < 2) {
		hours = '0' + hours;
	}
	if (mintues.length < 2) {
		mintues ='0' + mintues;
	}
	if (seconds.length < 2) {
		seconds = '0' + seconds;
	}

	let clockStr = hours + ' : ' + mintues + ' : ' + seconds;
	let hexColorStr = '#' + hours + mintues + seconds;

	clock.textContent = clockStr;
	hex.textContent = hexColorStr;

	document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock, 1000);

let sound = new Audio();
sound.loop = true;

function setAlarm() {
	document.getElementById('setTime');
	if (setTime === time) {
		alert("ring!");
		return;
	}
}

// ########################################


