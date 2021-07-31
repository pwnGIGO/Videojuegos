// Banderas de teclas
let left, right, up, down;
this.down = false;
this.left = false;
this.up = false;
this.right = false;

// Eventos touch: touchstart, touchmove, touchend, touchcancel
/*
window.addEventListener('touchstart', event => {
	//console.log("Tocuh!", event);
	touchX = event.touches[0].clientX;
  	touchY = event.touches[0].clientY;
})

var touchX,touchY;
window.addEventListener('touchmove', event => {

  	if (event.touches[0].clientX > windowWidth/2) {
		right = true;
	} else if (event.touches[0].clientX < windowWidth/2) {
		left = true;
	} else if (event.touches[0].clientY > windowHeight/2) {
		down = true;
	} else if (event.touches[0].clientY < windowHeight/2) {
		up = true;
	}else if (event.touches[0].clientY < windowHeight/2 && event.touches[0].clientX < windowWidth/2) {
		up = true;
		left = true;
	}else if (event.touches[0].clientY < windowHeight/2 && event.touches[0].clientX > windowWidth/2) {
		up = true;
		right = true;
	}else if (event.touches[0].clientY > windowHeight/2 && event.touches[0].clientX < windowWidth/2) {
		down = true;
		left = true;
	}else if (event.touches[0].clientY > windowHeight/2 && event.touches[0].clientX > windowWidth/2) {
		down = true;
		right = true;
	}

	touchX = event.touches[0].clientX;
  	touchY = event.touches[0].clientY;
  	
})

window.addEventListener('touchend', event => {
		right = false;
		left = false;
		down = false;
		up = false;
  	
})
*/
window.addEventListener('keydown', event => {
	if (event.key === 'ArrowRight') {
		right = true;
	} else if (event.key === 'ArrowLeft') {
		left = true;
	} else if (event.key === 'ArrowDown') {
		down = true;
	} else if (event.key === 'ArrowUp') {
		up = true;
	}
})


window.addEventListener('keyup', event => {
	//console.log(event.key)
	if (event.key === 'ArrowRight') {
		right = false;
	} else if (event.key === 'ArrowLeft') {
		left = false;
	} else if (event.key === 'ArrowDown') {
		down = false;
	} else if (event.key === 'ArrowUp') {
		up = false;
	}
})