function Cell(value, color) {
	this.value = value;
	this.color = color || [255, 0, 200, 75];
	this.sizeMultiplier = 10;

	this.draw = function(x, width) {
		var cellHeight = windowHeight - (this.value*this.sizeMultiplier);
		fill(this.color);
		rect(x, cellHeight, width, cellHeight);
	}

	this.revertColor = function() {
		this.color = [255, 0, 200, 75];
	}
}