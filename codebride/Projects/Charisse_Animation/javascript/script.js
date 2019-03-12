function bottle() {
		var elem = document.getElementById('water');
		var pos = 0;
		var id = setInterval(frame , 5);
		function frame(){
			if (pos == 2100) {
				clearInterval(id);
				pos = 0;
			}
			else{
				pos++;
				elem.style.left = pos + 'px';
			}
		}
	}