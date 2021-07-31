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
//.add("NubeVoladora", "assets/img/Nube.png")
.add("NubeVoladora", "data:image/png;base64,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")
.load(setup);


/*const imgpath = "assets/img/Nube.png";
PIXI.loader.add(imgpath).load(function(){
    let texture = PIXI.loader.resources[imgpath].texture;
    let sprite = new PIXI.Sprite(texture);
    app.stage.addChild(sprite);
});*/

var sprite; // given a global variable, we will be using it 
function setup() {
	stage.interactive = true;
	// set a rectangle frame for skeleton NubeVoladora 
	// (x, y, height, width)
	const rect = new PIXI.Rectangle(0, 0, 65, 65);
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