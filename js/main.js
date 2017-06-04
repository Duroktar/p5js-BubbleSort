var cells = [];
var cellCount = 15;
var sorter;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(10);
	for (var i=0; i < cellCount; i++) {
		cells.push(new Cell(i+1));
	}
	cells = shuffle(cells);
	sorter = new Sorter(cells);
}

function draw() {
	background(0);
	drawCells();
	sorter.tick();
}

function drawCells() {
	var cellWidth = windowWidth * 0.75 / cellCount;
	var buffer = (windowWidth - (cellWidth * cellCount)) / 2;
	for (var i=0; i < cellCount; i++) {
		sorter.array[i].draw(buffer+(i*cellWidth), cellWidth);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
	sorter.reset();
}