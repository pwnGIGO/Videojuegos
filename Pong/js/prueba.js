PIXI.utils.sayHello("xD"); // the code from Step 3, you can leave it
// create a canvas for all of your game elements
const windowWidth = 720;
const windowHeight = 512;

const renderer = PIXI.autoDetectRenderer(windowWidth, windowHeight, {
	transparent: true,
	resolution: 1
});

const displayDiv = document.querySelector('#display')
displayDiv.appendChild(renderer.view);

const stage = new PIXI.Container();

// lets continue our code
// load the spritesheet, first arg could name anything you want
// second arg will be the path of the png file

PIXI.loader
.add("NubeVoladora", "assets/img/Nube.png")
//.add("NubeVoladora", "https://media.tenor.com/images/854ad8305fcbc7a28e187c33cac466ee/tenor.gif")
.load(setup);


const imgpath = "assets/img/Nube.png";
PIXI.loader.add(imgpath).load(function(){
    let texture = PIXI.loader.resources[imgpath].texture;
    let sprite = new PIXI.Sprite(texture);
    app.stage.addChild(sprite);
});

var sprite; // given a global variable, we will be using it 
function setup() {
	stage.interactive = true;
	// set a rectangle frame for skeleton NubeVoladora 
	// (x, y, height, width)
	const rect = new PIXI.Rectangle(0, 0, 64, 64);
	const texture = PIXI.loader.resources["NubeVoladora"].texture;
	texture.frame = rect;
	sprite = new PIXI.Sprite(texture);
	// setInterval to actual animate the sprite
	/*const idle = setInterval(function() {
	  if (rect.x >= 64 * 4) 
	    rect.x = 0;
	  sprite.texture.frame = rect;
	  rect.x += 64;
	}, 500);*/
	// highly recommend to use scale to change frame size
	sprite.scale.set(2, 2); 
	// these two lines are for eventlistener later
	sprite.vx = 5;
	sprite.vy = 5;


	stage.addChild(sprite); // add sprite to stage area
	animationLoop(); // from below helper function
}


// helper function 
function animationLoop() {
	// a function from Pixi
	requestAnimationFrame(animationLoop);
	renderer.render(stage);
	mueveJugador()
};


function mueveJugador() {
	if (left && up && sprite.x > 0 && sprite.y > 0) {
		sprite.x -= sprite.vx
		sprite.y -= sprite.vy
	} else if (left && down && sprite.x > 0 && sprite.y < windowHeight-128) {
		sprite.x -= sprite.vx
		sprite.y += sprite.vy
	} else if (right && up && sprite.y > 0 && sprite.x < windowWidth-128) {
		sprite.x += sprite.vx
		sprite.y -= sprite.vy
	} else if (right && down && sprite.y < windowHeight-128 && sprite.x < windowWidth-128) {
		sprite.x += sprite.vx
		sprite.y += sprite.vy
	} else if (left && sprite.x > 0) {
		sprite.x -= sprite.vx
	} else if (up && sprite.y > 0) {
		sprite.y -= sprite.vy
	} else if (right && sprite.x < windowWidth-128) {
		sprite.x += sprite.vx
	} else if (down && sprite.y < windowHeight-128) {
		sprite.y += sprite.vx
	}
}
/*
// Eventos touch: touchstart, touchmove, touchend, touchcancel
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