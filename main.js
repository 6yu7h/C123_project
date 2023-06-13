lipsX = 0;
lipsY = 0;

function preload() {
 lips = loadImage('https://i.postimg.cc/hvRRsFsx/lips.jpg');
}

function setup() {
	canvas = createCanvas(300, 300);
	canvas.center();
} 

function draw() {
	
}

function take_snapshot() {
  save("myfilter.png")	
}
